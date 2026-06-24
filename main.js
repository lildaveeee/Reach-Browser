const { app, BrowserWindow, session, ipcMain, Menu, clipboard, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const https = require('https');
const http = require('http');
const settingsPath = path.join(app.getPath('userData'), 'settings.json');

let mainWindow = null;
let cookiePolicy = {
  enabled: true,
  level: 'blockAll',
  exceptions: [
    { domain: 'google.com', action: 'allow' },
    { domain: 'youtube.com', action: 'allow' }
  ]
};

let blockedDomains = new Set();
let adBlockEnabled = true;

const BLOCK_LISTS = [
  'https://easylist.to/easylist/easylist.txt',
  'https://easylist.to/easylist/easyprivacy.txt',
  'https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters.txt',
];

const ADBLOCK_CACHE_PATH = path.join(app.getPath('userData'), 'adblock-cache.json');

function fetchUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    let data = '';
    const req = client.get(url, { timeout: 15000 }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchUrl(res.headers.location).then(resolve);
      }
      if (res.statusCode !== 200) return resolve('');
      res.setEncoding('utf8');
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', () => resolve(''));
    req.on('timeout', () => { req.destroy(); resolve(''); });
  });
}

function parseDomains(text) {
  const domains = new Set();
  const lines = text.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('!') || trimmed.startsWith('#') || trimmed.startsWith('[')) continue;
    const match = trimmed.match(/^\|\|([a-z0-9._%-]+)\^/);
    if (match) {
      const domain = match[1].replace(/^www\./, '');
      if (domain && domain.includes('.')) domains.add(domain);
    }
  }
  return domains;
}

function saveCachedDomains(domains) {
  try {
    fs.writeFileSync(ADBLOCK_CACHE_PATH, JSON.stringify({
      timestamp: Date.now(),
      domains: Array.from(domains)
    }), 'utf8');
  } catch {}
}

function loadCachedDomains() {
  try {
    if (!fs.existsSync(ADBLOCK_CACHE_PATH)) return null;
    const raw = JSON.parse(fs.readFileSync(ADBLOCK_CACHE_PATH, 'utf8'));
    if (Date.now() - raw.timestamp > 24 * 60 * 60 * 1000) return null;
    return new Set(raw.domains);
  } catch {
    return null;
  }
}

async function loadAdBlockLists(forceRefresh = false) {
  if (!forceRefresh) {
    const cached = loadCachedDomains();
    if (cached && cached.size > 0) {
      blockedDomains = cached;
      console.log(`Ad blocker: loaded ${blockedDomains.size} domains from cache`);
      return;
    }
  }

  console.log('Ad blocker: fetching block lists...');
  const results = await Promise.all(BLOCK_LISTS.map(fetchUrl));
  const merged = new Set();
  for (const text of results) {
    if (!text) continue;
    const domains = parseDomains(text);
    domains.forEach(d => merged.add(d));
  }

  if (merged.size > 0) {
    blockedDomains = merged;
    saveCachedDomains(merged);
    console.log(`Ad blocker: loaded ${blockedDomains.size} domains`);
  } else {
    console.log('Ad blocker: fetch returned no results, keeping existing list');
  }
}

const SAFE_RESOURCE_TYPES = new Set([
  'mainFrame', 'subFrame', 'stylesheet', 'script', 'font',
  'media', 'websocket', 'other'
]);

const BLOCKABLE_RESOURCE_TYPES = new Set([
  'image', 'xhr', 'ping', 'subResource'
]);

function getBaseDomain(hostname) {
  if (!hostname) return '';
  const parts = hostname.replace(/^www\./, '').split('.');
  return parts.length >= 2 ? parts.slice(-2).join('.') : hostname;
}

function isBlockedByAdBlock(details) {
  if (!adBlockEnabled || blockedDomains.size === 0) return false;

  const resourceType = details.resourceType || details.type || '';
  if (SAFE_RESOURCE_TYPES.has(resourceType)) return false;

  if (resourceType && !BLOCKABLE_RESOURCE_TYPES.has(resourceType)) return false;

  try {
    const reqHostname = new URL(details.url).hostname.replace(/^www\./, '');
    if (!reqHostname) return false;

    const initiator = details.initiator || details.referrer || '';
    if (initiator) {
      try {
        const initHostname = new URL(initiator).hostname.replace(/^www\./, '');
        if (getBaseDomain(reqHostname) === getBaseDomain(initHostname)) return false;
        if (reqHostname === initHostname) return false;
      } catch {}
    }

    const parts = reqHostname.split('.');
    for (let i = 0; i < parts.length - 1; i++) {
      if (blockedDomains.has(parts.slice(i).join('.'))) return true;
    }
    return false;
  } catch {
    return false;
  }
}

function getHost(url) {
  try { return new URL(url).hostname; } catch { return ''; }
}

function matchesException(host, exceptionDomain) {
  if (!host || !exceptionDomain) return false;
  const normalizedHost = host.toLowerCase();
  const normalizedDomain = exceptionDomain.toLowerCase();
  return normalizedHost === normalizedDomain || normalizedHost.endsWith(`.${normalizedDomain}`);
}

function getOrigin(url) {
  try {
    const parsed = new URL(url);
    return `${parsed.protocol}//${parsed.hostname}${parsed.port ? `:${parsed.port}` : ''}`;
  } catch { return ''; }
}

function shouldBlockCookies(details) {
  const urlHost = getHost(details.url);
  const initiator = details.initiator || details.referrer || '';
  const initiatorHost = getHost(initiator);
  const isThirdParty = initiatorHost && initiatorHost !== urlHost;
  const requestOrigin = getOrigin(details.url);
  const initiatorOrigin = getOrigin(initiator);
  const isCrossSite = initiatorOrigin && requestOrigin && initiatorOrigin !== requestOrigin;

  for (const exception of cookiePolicy.exceptions || []) {
    if (!exception.domain) continue;
    if (matchesException(urlHost, exception.domain)) {
      return exception.action === 'block';
    }
  }

  if (!cookiePolicy.enabled) return true;
  if (cookiePolicy.level === 'allowAll') return false;
  if (cookiePolicy.level === 'blockThirdParty') return isThirdParty;
  if (cookiePolicy.level === 'blockCrossSite') return isCrossSite;
  if (cookiePolicy.level === 'blockAll') return true;
  return false;
}

app.commandLine.appendSwitch('disable-features', 'AutofillServerCommunication');

let cachedSettings = null;

async function loadSharedSettings() {
  if (cachedSettings) return cachedSettings;
  try {
    const raw = await fs.promises.readFile(settingsPath, 'utf8');
    cachedSettings = JSON.parse(raw);
    return cachedSettings;
  } catch {
    cachedSettings = {};
    return cachedSettings;
  }
}

async function saveSharedSettings(data) {
  cachedSettings = data;
  try {
    await fs.promises.writeFile(settingsPath, JSON.stringify(data, null, 2), 'utf8');
  } catch {}
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 940,
    minWidth: 800,
    minHeight: 400,
    show: false,
    fullscreenable: true,
    frame: false,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      enableRemoteModule: false,
      webviewTag: true,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      webSecurity: true,
      allowRunningInsecureContent: false
    }
  });

  if (process.platform === 'win32') {
    win.hookWindowMessage(0x0084, () => {
      win.setEnabled(false);
      win.setEnabled(true);
    });
  }

  mainWindow = win;
  win.loadFile(path.join(__dirname, 'src', 'index.html'));
  win.show();
  win.setMenuBarVisibility(false);
}

app.whenReady().then(async () => {

  const savedSettings = await loadSharedSettings();
  adBlockEnabled = savedSettings?.privacy?.adBlockEnabled !== false;
  loadAdBlockLists().catch(() => {});
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    if (permission === 'fullscreen') return callback(true);
    return callback(false);
  });
  session.defaultSession.webRequest.onBeforeRequest(
    { urls: ['*://*/*'] },
    (details, callback) => {
      if (isBlockedByAdBlock(details)) {
        return callback({ cancel: true });
      }
      callback({ cancel: false });
    }
  );

  session.defaultSession.webRequest.onBeforeSendHeaders(
    { urls: ['*://*/*'] },
    (details, callback) => {
      const requestHeaders = { ...details.requestHeaders };
      if (shouldBlockCookies(details)) {
        for (const header of Object.keys(requestHeaders)) {
          if (header.toLowerCase() === 'cookie') delete requestHeaders[header];
        }
      }
      callback({ requestHeaders });
    }
  );

  session.defaultSession.webRequest.onHeadersReceived(
    { urls: ['*://*/*'] },
    (details, callback) => {
      const responseHeaders = { ...details.responseHeaders };
      if (shouldBlockCookies(details)) {
        for (const header of Object.keys(responseHeaders)) {
          if (header.toLowerCase() === 'set-cookie') delete responseHeaders[header];
        }
      }
      callback({ responseHeaders });
    }
  );

  session.defaultSession.on('will-download', (event, item, webContents) => {
    const id = `dl-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const ownerWin = BrowserWindow.fromWebContents(webContents) || mainWindow;

    ownerWin.webContents.send('download-started', {
      id,
      filename: item.getFilename(),
      url: item.getURL(),
      totalBytes: item.getTotalBytes(),
      savePath: item.getSavePath()
    });

    item.on('updated', (event, state) => {
      if (state === 'progressing') {
        ownerWin.webContents.send('download-progress', {
          id,
          receivedBytes: item.getReceivedBytes(),
          totalBytes: item.getTotalBytes(),
          speed: item.getCurrentBytesPerSecond ? item.getCurrentBytesPerSecond() : 0
        });
      }
    });

    item.once('done', (event, state) => {
      if (state === 'completed') {
        ownerWin.webContents.send('download-completed', {
          id,
          savePath: item.getSavePath(),
          totalBytes: item.getTotalBytes()
        });
      } else {
        ownerWin.webContents.send('download-failed', { id, state });
      }
    });
  });

  app.on('web-contents-created', (event, contents) => {
    contents.setWindowOpenHandler(({ url, disposition }) => {
      if (contents.getType() !== 'window') {
        const senderWin = BrowserWindow.fromWebContents(contents) ||
                          BrowserWindow.getAllWindows().find(w => !w.isDestroyed());
        if (senderWin) {
          const activate = disposition !== 'background-tab';
          senderWin.webContents.send('open-new-tab', { url, activate });
        }
      }
      return { action: 'deny' };
    });

    contents.on('will-attach-webview', (event, webPreferences, params) => {
      webPreferences.preload = '';
      webPreferences.preloadURL = '';
      webPreferences.nodeIntegration = false;
      webPreferences.nodeIntegrationInSubFrames = false;
      webPreferences.nodeIntegrationInWorker = false;
      webPreferences.contextIsolation = true;
      webPreferences.sandbox = true;
      webPreferences.webSecurity = true;
      webPreferences.allowRunningInsecureContent = false;
    });

    contents.on('before-input-event', (event, input) => {
      try {
        if (!mainWindow || mainWindow.isDestroyed()) return;
        if (typeof contents.getType === 'function' && contents.getType() === 'window') return;
        const isKeyDown = input.type === 'keyDown' || input.type === 'keydown';
        if (!isKeyDown) return;

        const parts = [];
        if (input.control) parts.push('Control');
        if (input.alt) parts.push('Alt');
        if (input.shift) parts.push('Shift');
        if (input.meta) parts.push('Meta');

        let key = input.key || '';
        if (!key) key = input.code || '';
        if (key === ' ') key = 'Space';
        if (key === 'Esc') key = 'Escape';
        if (!['Control', 'Shift', 'Alt', 'Meta'].includes(key)) {
          if (key.length === 1) key = key.toUpperCase();
          parts.push(key);
        }

        if (parts.length === 0) return;
        mainWindow.webContents.send('global-shortcut', { shortcut: parts.join('+') });
      } catch {}
    });

    contents.on('enter-html-full-screen', () => {
      try { const bw = BrowserWindow.fromWebContents(contents); if (bw) bw.setFullScreen(true); } catch {}
    });

    contents.on('leave-html-full-screen', () => {
      try { const bw = BrowserWindow.fromWebContents(contents); if (bw) bw.setFullScreen(false); } catch {}
    });
  });

  app.on('browser-window-closed', () => { mainWindow = null; });

  ipcMain.handle('settings:load', async () => loadSharedSettings());
  ipcMain.handle('settings:save', async (event, data) => {
    if (data?.privacy?.adBlockEnabled !== undefined) {
      adBlockEnabled = data.privacy.adBlockEnabled;
    }
    await saveSharedSettings(data);
    return { success: true };
  });

  ipcMain.handle('set-adblock-enabled', (event, enabled) => {
    adBlockEnabled = !!enabled;
    return { success: true };
  });

  ipcMain.handle('get-adblock-stats', () => {
    return {
      enabled: adBlockEnabled,
      domainCount: blockedDomains.size,
      cacheAge: (() => {
        try {
          if (!fs.existsSync(ADBLOCK_CACHE_PATH)) return null;
          const raw = JSON.parse(fs.readFileSync(ADBLOCK_CACHE_PATH, 'utf8'));
          return Date.now() - raw.timestamp;
        } catch { return null; }
      })()
    };
  });

  ipcMain.handle('reload-adblock-lists', async () => {
    await loadAdBlockLists(true);
    return { success: true, domainCount: blockedDomains.size };
  });

  ipcMain.handle('move-tab-to-window', (event, { url, title, targetWindowId }) => {
    const allWins = BrowserWindow.getAllWindows();
    const targetWin = targetWindowId ? allWins.find(w => w.id === targetWindowId) : null;
    if (targetWin && !targetWin.isDestroyed()) {
      targetWin.webContents.send('open-new-tab', { url, activate: true });
      targetWin.focus();
    }
    return { success: true };
  });

  let _tabDragInterval = null;
  let _tabDragSenderWin = null;

  ipcMain.handle('start-tab-drag', (event) => {
    const { screen } = require('electron');
    _tabDragSenderWin = BrowserWindow.fromWebContents(event.sender);
    if (_tabDragInterval) clearInterval(_tabDragInterval);
    _tabDragInterval = setInterval(() => {
      if (!_tabDragSenderWin || _tabDragSenderWin.isDestroyed()) {
        clearInterval(_tabDragInterval);
        _tabDragInterval = null;
        return;
      }
      const point = screen.getCursorScreenPoint();
      const bounds = _tabDragSenderWin.getBounds();
      _tabDragSenderWin.webContents.send('tab-drag-cursor', { point, bounds });
    }, 16);
    return { success: true };
  });

  ipcMain.handle('end-tab-drag', () => {
    if (_tabDragInterval) { clearInterval(_tabDragInterval); _tabDragInterval = null; }
    _tabDragSenderWin = null;
    return { success: true };
  });

  ipcMain.handle('get-all-windows', (event) => {
    const senderWin = BrowserWindow.fromWebContents(event.sender);
    return BrowserWindow.getAllWindows()
      .filter(w => !w.isDestroyed() && w.id !== (senderWin ? senderWin.id : -1))
      .map(w => ({ id: w.id, bounds: w.getBounds() }));
  });

  ipcMain.handle('get-cursor-screen-position', (event) => {
    const { screen } = require('electron');
    const point = screen.getCursorScreenPoint();
    const win = BrowserWindow.fromWebContents(event.sender);
    const bounds = win ? win.getBounds() : null;
    return { point, bounds };
  });

  ipcMain.handle('open-new-window', (event, url) => {
    const { screen } = require('electron');
    const cursor = screen.getCursorScreenPoint();
    const win = new BrowserWindow({
      width: 1400,
      height: 940,
      x: cursor.x - 700,
      y: cursor.y - 30,
      minWidth: 800,
      minHeight: 400,
      show: false,
      fullscreenable: true,
      frame: false,
      autoHideMenuBar: true,
      titleBarStyle: 'hidden',
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
        nodeIntegration: false,
        sandbox: true,
        enableRemoteModule: false,
        webviewTag: true,
        nodeIntegrationInWorker: false,
        nodeIntegrationInSubFrames: false,
        webSecurity: true,
        allowRunningInsecureContent: false
      }
    });
    win.loadFile(path.join(__dirname, 'src', 'index.html'));
    win.show();
    win.setMenuBarVisibility(false);
    win.webContents.once('did-finish-load', () => {
      win.webContents.send('open-new-tab', { url, activate: true });
    });
    return { success: true };
  });

  ipcMain.handle('get-cookies', async () => {
    try { return await session.defaultSession.cookies.get({}); } catch { return []; }
  });

  ipcMain.handle('show-context-menu', (event, params) => {
    const menuTemplate = [];

    if (params.linkURL) {
      menuTemplate.push({
        label: 'Open Link in New Tab',
        click: () => event.sender.send('context-menu-command', { command: 'open-link', url: params.linkURL })
      });
      menuTemplate.push({
        label: 'Copy Link Address',
        click: () => clipboard.writeText(params.linkURL)
      });
    }

    if (params.mediaType === 'image' && params.srcURL) {
      menuTemplate.push({
        label: 'Open Image in New Tab',
        click: () => event.sender.send('context-menu-command', { command: 'open-link', url: params.srcURL })
      });
      menuTemplate.push({
        label: 'Copy Image Address',
        click: () => clipboard.writeText(params.srcURL)
      });
    }

    if (params.selectionText) {
      menuTemplate.push({ type: 'separator' });
      menuTemplate.push({ role: 'copy', label: 'Copy' });
    }

    menuTemplate.push({ type: 'separator' });
    menuTemplate.push({
      label: 'Inspect Element',
      click: () => {
        const window = BrowserWindow.fromWebContents(event.sender);
        if (window) window.webContents.openDevTools({ mode: 'right' });
      }
    });

    const menu = Menu.buildFromTemplate(menuTemplate.filter(Boolean));
    const window = BrowserWindow.fromWebContents(event.sender);
    menu.popup({ window });
  });

  ipcMain.handle('browser-clear-data', async (event, type) => {
    const ses = session.defaultSession;
    try {
      switch (type) {
        case 'cookies':
          await ses.clearStorageData({ storages: ['cookies'] });
          break;
        case 'storage':
          await ses.clearStorageData({ storages: ['localstorage', 'indexdb', 'serviceworkers', 'caches'] });
          break;
        case 'all':
          await ses.clearStorageData({
            storages: ['appcache', 'cookies', 'filesystem', 'indexdb', 'localstorage', 'shadercache', 'serviceworkers', 'caches']
          });
          break;
        case 'passwords':
          await ses.clearAuthCache();
          break;
        default:
          break;
      }
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  });

  ipcMain.handle('close-app', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    if (window) window.close();
    return { success: true };
  });
  ipcMain.handle('download-and-install-update', async (event, { url, filename }) => {
    const win = BrowserWindow.fromWebContents(event.sender);

    // on Linux AppImage, process.execPath is the mounted read-only path
    // APPIMAGE env var points to the actual .AppImage file on disk
    const actualPath = process.platform === 'linux'
      ? (process.env.APPIMAGE || process.execPath)
      : process.execPath;

    const tmpPath = actualPath + '.update.tmp';
    const file = fs.createWriteStream(tmpPath);

    return new Promise((resolve) => {
      function doRequest(requestUrl) {
        const client = requestUrl.startsWith('https') ? https : http;
        client.get(requestUrl, (res) => {
          if (res.statusCode === 301 || res.statusCode === 302) {
            return doRequest(res.headers.location);
          }

          const total = parseInt(res.headers['content-length'] || '0', 10);
          let received = 0;

          res.on('data', (chunk) => {
            received += chunk.length;
            if (total > 0 && win && !win.isDestroyed()) {
              win.webContents.send('update-download-progress', {
                percent: Math.round((received / total) * 100),
                received,
                total
              });
            }
          });

          res.pipe(file);

          file.on('finish', () => {
            file.close(() => {
              try {
                if (process.platform === 'linux') {
                  fs.renameSync(tmpPath, actualPath);
                  fs.chmodSync(actualPath, 0o755);
                  const { spawn } = require('child_process');
                  setTimeout(() => {
                    spawn(actualPath, [], { detached: true, stdio: 'ignore' }).unref();
                    app.quit();
                  }, 500);
                } else if (process.platform === 'win32') {
                  const installDir = path.dirname(actualPath);
                  const newExePath = path.join(installDir, filename);
                  fs.renameSync(tmpPath, newExePath);
                  const { spawn } = require('child_process');
                  setTimeout(() => {
                    spawn(newExePath, ['/S'], { detached: true, stdio: 'ignore' }).unref();
                    app.quit();
                  }, 500);
                }
                resolve({ success: true, path: actualPath });
              } catch (err) {
                try { fs.unlinkSync(tmpPath); } catch {}
                resolve({ success: false, message: err.message });
              }
            });
          });

          file.on('error', (err) => {
            try { fs.unlinkSync(tmpPath); } catch {}
            resolve({ success: false, message: err.message });
          });

        }).on('error', (err) => {
          try { fs.unlinkSync(tmpPath); } catch {}
          resolve({ success: false, message: err.message });
        });
      }

      doRequest(url);
    });
  });
  ipcMain.handle('get-app-version', () => app.getVersion());
  ipcMain.handle('open-external', (_, url) => shell.openExternal(url));
  ipcMain.handle('toggle-maximise', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    if (!window) return;
    window.isMaximized() ? window.unmaximize() : window.maximize();
    return { success: true };
  });

  ipcMain.handle('set-cookie-policy', (event, policy) => {
    if (policy && typeof policy === 'object') {
      cookiePolicy.enabled = policy.enabled === true;
      cookiePolicy.level = ['allowAll', 'blockThirdParty', 'blockCrossSite', 'blockAll'].includes(policy.level)
        ? policy.level : 'blockThirdParty';
      if (Array.isArray(policy.exceptions)) {
        cookiePolicy.exceptions = policy.exceptions
          .filter(e => e && e.domain)
          .map(e => ({ domain: e.domain.toLowerCase(), action: e.action === 'block' ? 'block' : 'allow' }));
      }
    }
    return { success: true, policy: cookiePolicy };
  });

  ipcMain.handle('cancel-download', (event, id) => ({ success: true }));

  ipcMain.handle('delete-download-file', async (event, filePath) => {
    try {
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  });

  ipcMain.handle('show-item-in-folder', (event, filePath) => {
    if (!filePath) return { success: false };
    const dir = path.dirname(filePath);
    shell.openPath(dir);
    return { success: true };
  });

  ipcMain.handle('open-file', (event, filePath) => {
    if (filePath) shell.openPath(filePath);
    return { success: true };
  });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});