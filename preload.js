const { contextBridge, shell, ipcRenderer } = require('electron');

ipcRenderer.on('global-shortcut', (event, data) => {
  try {
    window.dispatchEvent(
      new CustomEvent('electron-global-shortcut', { detail: data })
    );
  } catch (e) {}
});

ipcRenderer.on('tab-drag-cursor', (event, data) => {
  try {
    window.dispatchEvent(
      new CustomEvent('tab-drag-cursor', { detail: data })
    );
  } catch (e) {}
});

const electronAPI = {
  openExternal: (url) => shell.openExternal(url),

  showContextMenu: (params) => ipcRenderer.invoke('show-context-menu', params),
  onContextMenuCommand: (callback) =>
    ipcRenderer.on('context-menu-command', (event, data) => callback(data)),

  clearBrowserData: (type) => ipcRenderer.invoke('browser-clear-data', type),

  setCookiePolicy: (policy) => ipcRenderer.invoke('set-cookie-policy', policy),

  closeApp: () => ipcRenderer.invoke('close-app'),

  onGlobalShortcut: (callback) =>
    ipcRenderer.on('global-shortcut', (event, data) => callback(data)),
  onOpenNewTab: (cb) => 
    ipcRenderer.on('open-new-tab', (_, data) => cb(data)),
  onDownloadStarted: (cb) =>
    ipcRenderer.on('download-started', (_, data) => cb(data)),
  onDownloadProgress: (cb) =>
    ipcRenderer.on('download-progress', (_, data) => cb(data)),
  onDownloadCompleted: (cb) =>
    ipcRenderer.on('download-completed', (_, data) => cb(data)),
  onDownloadFailed: (cb) =>
    ipcRenderer.on('download-failed', (_, data) => cb(data)),

  cancelDownload: (id) => ipcRenderer.invoke('cancel-download', id),
  deleteDownloadFile: (path) => ipcRenderer.invoke('delete-download-file', path),
  showItemInFolder: (path) => shell.showItemInFolder(path),
  openFile: (path) => shell.openPath(path),
  getCookies: () => ipcRenderer.invoke('get-cookies'),
  loadSettings: () => ipcRenderer.invoke('settings:load'),
  saveSettings: (data) => ipcRenderer.invoke('settings:save', data),
  openNewWindow: (url) => ipcRenderer.invoke('open-new-window', url),
  getCursorScreenPosition: () => ipcRenderer.invoke('get-cursor-screen-position'),
  moveTabToWindow: (data) => ipcRenderer.invoke('move-tab-to-window', data),
  getAllWindows: () => ipcRenderer.invoke('get-all-windows'),
  startTabDrag: () => ipcRenderer.invoke('start-tab-drag'),
  endTabDrag: () => ipcRenderer.invoke('end-tab-drag'),
  setAdblockEnabled:  (enabled) => ipcRenderer.invoke('set-adblock-enabled', enabled),
  getAdblockStats:    ()        => ipcRenderer.invoke('get-adblock-stats'),
  reloadAdblockLists: ()        => ipcRenderer.invoke('reload-adblock-lists'),
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
};

contextBridge.exposeInMainWorld('electronAPI', electronAPI);
