const SEARCH_ENGINES = {
  startpage: {
    name: 'Startpage',
    home: 'https://www.startpage.com',
    search: 'https://www.startpage.com/search?q='
  },
  duckduckgo: {
    name: 'DuckDuckGo',
    home: 'https://duckduckgo.com',
    search: 'https://duckduckgo.com/?q='
  },
  google: {
    name: 'Google',
    home: 'https://www.google.com',
    search: 'https://www.google.com/search?q='
  },
  bing: {
    name: 'Bing',
    home: 'https://www.bing.com',
    search: 'https://www.bing.com/search?q='
  },
  brave: {
    name: 'Brave Search',
    home: 'https://search.brave.com',
    search: 'https://search.brave.com/search?q='
  },
  wikipedia: {
    name: 'Wikipedia',
    home: 'https://www.wikipedia.org',
    search: 'https://en.wikipedia.org/w/index.php?search='
  },
  ecosia: {
    name: 'Ecosia',
    home: 'https://www.ecosia.org',
    search: 'https://www.ecosia.org/search?q='
  },
  kagi: {
    name: 'Kagi',
    home: 'https://kagi.com',
    search: 'https://kagi.com/search?q='
  },
    reddit: {
    name: 'Reddit',
    home: 'https://www.reddit.com',
    search: 'https://www.reddit.com/search/?q='
  },
  youtube: {
    name: 'YouTube',
    home: 'https://www.youtube.com',
    search: 'https://www.youtube.com/results?search_query='
  },
  github: {
    name: 'GitHub',
    home: 'https://www.github.com',
    search: 'https://github.com/search?q='
  },
  ebay: {
    name: 'eBay',
    home: 'https://www.ebay.co.uk',
    search: 'https://www.ebay.com/sch/i.html?_nkw='
  },
  irs: {
    name: 'IRS',
    home: 'https://www.irs.gov',
    search: 'https://www.irs.gov/site-index-search?search='
  },
};
const searchEngineSelect = document.getElementById('search-engine-select');
const tabStrip = document.getElementById('tab-strip');
const newTabBtn = document.getElementById('new-tab-btn');
const closeAppBtn = document.getElementById('close-app-btn');
const addressBar = document.getElementById('address-bar');
const navBack = document.getElementById('nav-back');
const navForward = document.getElementById('nav-forward');
const navReload = document.getElementById('nav-reload');
const navReloadIcon = navReload.querySelector('.reload-icon');
const navHome = document.getElementById('nav-home');
const webviewContainer = document.getElementById('webview-container');
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const settingsClose = document.getElementById('settings-close');
const settingsTabs = document.querySelectorAll('.settings-tab');
const settingsSections = document.querySelectorAll('.settings-section');
const keybindAction = document.getElementById('tab-middle-click-action');
const shortcutSwitchForward = document.getElementById('shortcut-switch-forward');
const shortcutSwitchBack = document.getElementById('shortcut-switch-back');
const shortcutNewTab = document.getElementById('shortcut-new-tab');
const shortcutUndoTab = document.getElementById('shortcut-undo-tab');
const shortcutRedoTab = document.getElementById('shortcut-redo-tab');
const themeAccent = document.getElementById('theme-accent');
const themeSurface = document.getElementById('theme-surface');
const themeBackground = document.getElementById('theme-background');
const themeBorderColor = document.getElementById('theme-border-color');
const themeBorderWidth = document.getElementById('theme-border-width');
const themeTabActiveBg = document.getElementById('theme-tab-active-bg');
const themeTabInactiveBg = document.getElementById('theme-tab-inactive-bg');
const themeTabActiveText = document.getElementById('theme-tab-active-text');
const themeTabInactiveText = document.getElementById('theme-tab-inactive-text');
const themeSettingsFontColor = document.getElementById('theme-settings-font-color');
const themeGradient = document.getElementById('theme-gradient');
const themeGradientAccent = document.getElementById('theme-gradient-accent');
const themeGradientSurface = document.getElementById('theme-gradient-surface');
const themeGradientTabActive = document.getElementById('theme-gradient-tab-active');
const themeGradientTabInactive = document.getElementById('theme-gradient-tab-inactive');
const themeGradientControls = document.querySelectorAll('.theme-gradient-dependent');
const tabPositionSelect = document.getElementById('tab-position');
const verticalTabWidthInput = document.getElementById('vertical-tab-width');
const credentialSaveModal = document.getElementById('credential-save-modal');
const credentialSaveText = document.getElementById('credential-save-text');
const credentialSaveConfirm = document.getElementById('credential-save-confirm');
const credentialSaveDismiss = document.getElementById('credential-save-dismiss');
const videoPopoutBtn = document.getElementById('video-popout-btn');
const bookmarksBtn = document.getElementById('bookmarks-btn');
const bookmarksModal = document.getElementById('bookmarks-modal');
let bookmarksDropdown = document.getElementById('bookmarks-dropdown');
let pendingCredential = null;
const cookiesModal       = document.getElementById('cookies-modal');
const cookiesModalClose  = document.getElementById('cookies-modal-close');
const cookiesList        = document.getElementById('cookies-list');
const cookiesSearch      = document.getElementById('cookies-search');
const cookiesHeaderSummary = document.getElementById('cookies-header-summary');
const viewCookiesBtn     = document.getElementById('view-cookies-btn');
const cookieEnabled = document.getElementById('cookie-enabled');
const cookieLevel = document.getElementById('cookie-level');
const cookieExceptionsContainer = document.getElementById('cookie-exceptions');
const searchOverlay = document.getElementById('search-overlay');
const searchOverlayInput = document.getElementById('search-overlay-input');
const shortcutOpenSearch = document.getElementById('shortcut-open-search');
const shortcutMuteTab = document.getElementById('shortcut-mute-tab');
const shortcutRefreshTab = document.getElementById('shortcut-refresh-tab');
const websiteShortcutsContainer = document.getElementById('website-shortcuts');
const shortcutToggleTabs = document.getElementById('shortcut-toggle-tabs');
const shortcutSplitScreen = document.getElementById('shortcut-split-screen');
const shortcutReopenClosed = document.getElementById('shortcut-reopen-closed');
const clearCookiesBtn = document.getElementById('clear-cookies-btn');
const clearStorageBtn = document.getElementById('clear-storage-btn');
const clearAllBtn = document.getElementById('clear-all-btn');
const clearPasswordsBtn = document.getElementById('clear-passwords-btn');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const clearDownloadsHistoryBtn = document.getElementById('clear-downloads-history-btn');
const privacyStatus = document.getElementById('privacy-status');
const themeSurfacePattern = document.getElementById('theme-surface-pattern');
const themeInput = document.getElementById('theme-input');
const themeSurfacePatternColor = document.getElementById('theme-surface-pattern-color');
const themeSurfacePatternOpacity = document.getElementById('theme-surface-pattern-opacity');
const surfacePatternColorControl = document.getElementById('surface-pattern-color-control');
const surfacePatternOpacityControl = document.getElementById('surface-pattern-opacity-control');
const saveThemeBtn = document.getElementById('save-theme-btn');
const randomiseThemeBtn = document.getElementById('randomise-theme-btn');
const toolbar = document.querySelector('.toolbar');
const downloadsBtn = document.getElementById('downloads-btn');
const downloadsBadge = document.getElementById('downloads-badge');
const downloadsModal = document.getElementById('downloads-modal');
const downloadsModalClose = document.getElementById('downloads-modal-close');
const downloadsList = document.getElementById('downloads-list');
const downloadsEmptyState = document.getElementById('downloads-empty-state');
const downloadsHeaderSummary = document.getElementById('downloads-header-summary');
const downloadsClearCompletedBtn = document.getElementById('downloads-clear-completed-btn');
const findBar        = document.getElementById('find-bar');
const findInput      = document.getElementById('find-input');
const findCount      = document.getElementById('find-count');
const findPrevBtn    = document.getElementById('find-prev-btn');
const findNextBtn    = document.getElementById('find-next-btn');
const findCloseBtn   = document.getElementById('find-close-btn');
const shortcutFindInPage = document.getElementById('shortcut-find-in-page');
function getSearchEngine() {
  const key = settings?.privacy?.searchEngine || 'startpage';
  return SEARCH_ENGINES[key] || SEARCH_ENGINES.startpage;
}

function getDefaultHome() {
  return getSearchEngine().home;
}
const SETTINGS_KEY = 'davosBrowserSettings';
const defaultSettings = {
  keybinds: {
    tabMiddleClick: 'close',
    openSearch: 'Control+Space',
    muteTab: 'Control+M',
    refreshTab: 'F5',
    findInPage: 'Control+F',
    undoTab: 'Alt+ArrowLeft',
    redoTab: 'Alt+ArrowRight',
    reopenClosed: 'Control+Shift+T',
    switchForward: 'Control+Tab',
    switchBack: 'Control+Shift+Tab',
    newTab: 'Control+N',
    toggleTabs: 'Control+B',
    splitScreen: 'Control+S',
    websites: [
      { key: 'Alt+1', url: '' },
      { key: 'Alt+2', url: '' },
      { key: 'Alt+3', url: '' }
    ]
  },
  theme: {
    accent: '#f075cf',
    surface: '#20191e',
    background: '#0c090b',
    panel: '#2d242b',
    input: '#2d242b',
    borderColor: '#5b3e53',
    borderWidth: '1px',
    tabActiveBg: '#372b33',
    tabInactiveBg: '#2b2229',
    tabActiveText: '#f1f5f9',
    tabInactiveText: '#f1f5f9',
    settingsFontColor: '#f1f5f9',
    gradient: true,
    gradientAccent: '#f7b1e4',
    gradientSurface: '#000000',
    gradientTabActive: '#5c4856',
    gradientTabInactive: '#442c3d',
    tabPosition: 'right',
    verticalTabWidth: 8,
    text: '#f1f5f9',
    surfacePattern: 'dots',
    surfacePatternColor: '#74776b',
    surfacePatternOpacity: 20
  },
  ui: {
    tabBarHidden: false
  },
  privacy: {
    cookiesEnabled: true,
    adBlockEnabled: true,
    cookieLevel: 'blockCrossSite',
    searchEngine: 'startpage',
    exceptions: [
      { domain: 'google.com', action: 'allow' },
      { domain: 'accounts.google.com', action: 'allow' },
      { domain: 'youtube.com', action: 'allow' },
      { domain: '', action: 'allow' }
    ]
  },
  credentials: [],
  closedTabsHistory: [],
  downloadsHistory: [],
  navigationHistory: []
};

defaultSettings.bookmarks = [];

let settings = { ...defaultSettings };
let closedTabs = [];

setTimeout(() => {
  try {
    const colorInputs = Array.from(document.querySelectorAll('.settings-control input[type="color"]'));
    colorInputs.forEach((input) => {
      if (!input || input.closest('.color-input-wrap')) return;
      const wrap = document.createElement('div');
      wrap.className = 'color-input-wrap';
      input.parentNode.insertBefore(wrap, input);
      wrap.appendChild(input);
      input.style.setProperty('background', input.value || '#ffffff', 'important');
    });
  } catch (e) {}
});

let _findActiveWebview = null;
let _findQuery         = '';
let _findResultCount   = 0;
let _findActiveIndex   = 0;
let _allCookies    = [];
let _cookieFilter  = 'all';
let _cookieSearch  = '';
let activeDownloads = new Map();
let _downloadsFilter = 'all';

function mergeSettings(defaults, saved) {
  return {
    ...defaults,
    ...saved,
    keybinds: { ...(defaults.keybinds || {}), ...(saved.keybinds || {}) },
    theme: { ...(defaults.theme || {}), ...(saved.theme || {}) },
    ui: { ...(defaults.ui || {}), ...(saved.ui || {}) },
    privacy: { ...(defaults.privacy || {}), ...(saved.privacy || {}) }
  };
}

async function loadSettings() {
  try {
    const raw = await window.electronAPI?.loadSettings?.();
    const loaded = raw || {};
    const merged = mergeSettings(defaultSettings, loaded);
    if (merged.theme.tabPosition === undefined) {
      merged.theme.tabPosition = merged.theme.verticalTabs ? 'left' : 'top';
    }
    return merged;
  } catch {
    return { ...defaultSettings };
  }
}

function saveSettings() {
  if (window.electronAPI?.saveSettings) {
    window.electronAPI.saveSettings(settings);
  }
}

function cleanDomain(value) {
  return value.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
}

function loadCookieExceptionsFromUI() {
  saveCookieExceptionsFromUI();
}
function openCookiesModal() {
  if (!cookiesModal) return;
  cookiesModal.classList.add('open');
  cookiesModal.setAttribute('aria-hidden', 'false');
  _cookieFilter = 'all';
  _cookieSearch = '';
  if (cookiesSearch) cookiesSearch.value = '';
  document.querySelectorAll('[data-cookie-filter]').forEach(b =>
    b.classList.toggle('active', b.dataset.cookieFilter === 'all')
  );
  loadAndRenderCookies();
}

function closeCookiesModal() {
  if (!cookiesModal) return;
  cookiesModal.classList.remove('open');
  cookiesModal.setAttribute('aria-hidden', 'true');
}

async function loadAndRenderCookies() {
  if (!cookiesList) return;
  cookiesList.innerHTML = '<p style="color:var(--muted);font-size:0.88rem;padding:12px 0;">Loading cookies…</p>';

  let cookies = [];

  if (window.electronAPI && window.electronAPI.getCookies) {
    try { cookies = (await window.electronAPI.getCookies()) || []; } catch (e) {}
  }

  if (!cookies.length) {
    try {
      cookies = document.cookie.split(';')
        .map(s => s.trim())
        .filter(Boolean)
        .map(s => {
          const eq = s.indexOf('=');
          return {
            name:   eq >= 0 ? s.slice(0, eq).trim() : s,
            value:  eq >= 0 ? s.slice(eq + 1).trim() : '',
            domain: getHost(tabs.find(t => t.id === activeTabId)?.url || ''),
            path:   '/',
            secure: false,
            httpOnly: false,
            session: true,
            expirationDate: null
          };
        });
    } catch (e) {}
  }

  _allCookies = cookies;
  renderCookieList();
}

function getFilteredCookies() {
  let list = _allCookies;

  switch (_cookieFilter) {
    case 'session':    list = list.filter(c => c.session || !c.expirationDate); break;
    case 'persistent': list = list.filter(c => !c.session && c.expirationDate); break;
    case 'secure':     list = list.filter(c => c.secure);    break;
    case 'httponly':   list = list.filter(c => c.httpOnly);   break;
  }

  if (_cookieSearch) {
    const q = _cookieSearch.toLowerCase();
    list = list.filter(c =>
      (c.name   || '').toLowerCase().includes(q) ||
      (c.domain || '').toLowerCase().includes(q) ||
      (c.value  || '').toLowerCase().includes(q)
    );
  }
  return list;
}

function formatCookieExpiry(c) {
  if (c.session || !c.expirationDate) return 'Session';
  try {
    const d = new Date(c.expirationDate * 1000);
    const now = Date.now();
    const diff = d - now;
    if (diff < 0) return 'Expired';
    const days = Math.floor(diff / 86400000);
    if (days < 1)   return 'Expires today';
    if (days === 1) return 'Expires tomorrow';
    if (days < 30)  return `Expires in ${days}d`;
    if (days < 365) return `Expires in ${Math.round(days / 30)}mo`;
    return `Expires in ${Math.round(days / 365)}yr`;
  } catch { return 'Unknown'; }
}

function decodeCookieValue(value) {
  if (!value) return { decoded: '', isEncoded: false };
  try {
    const dec = decodeURIComponent(value);
    if (dec !== value) return { decoded: dec, isEncoded: true };
  } catch {}
  try {
    if (/^[A-Za-z0-9+/=]{8,}$/.test(value) && value.length % 4 === 0) {
      const dec = atob(value);
      if (/^[\x20-\x7E]+$/.test(dec)) return { decoded: dec, isEncoded: true, encoding: 'base64' };
    }
  } catch {}
  try {
    const parsed = JSON.parse(value);
    return { decoded: JSON.stringify(parsed, null, 2), isEncoded: true, encoding: 'json' };
  } catch {}
  return { decoded: value, isEncoded: false };
}

function renderCookieList() {
  if (!cookiesList) return;
  const list = getFilteredCookies();
  const total = _allCookies.length;

  if (cookiesHeaderSummary) {
    cookiesHeaderSummary.textContent =
      list.length === total
        ? `${total} cookie${total !== 1 ? 's' : ''}`
        : `${list.length} of ${total} cookies`;
  }

  if (!list.length) {
    cookiesList.innerHTML = `<p style="color:var(--muted);font-size:0.88rem;padding:12px 0;">
      ${_allCookies.length ? 'No cookies match your filter.' : 'No cookies found for this session.'}
    </p>`;
    return;
  }

  const grouped = {};
  list.forEach(c => {
    const domain = c.domain || '(unknown)';
    if (!grouped[domain]) grouped[domain] = [];
    grouped[domain].push(c);
  });

  cookiesList.innerHTML = '';

  Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([domain, cookies]) => {
      const section = document.createElement('div');
      section.style.cssText = 'margin-bottom:18px;';

      const domainHeader = document.createElement('div');
      domainHeader.style.cssText = [
        'display:flex;align-items:center;gap:8px;',
        'padding:6px 0 8px;',
        'border-bottom:var(--border-width) solid var(--border-color);',
        'margin-bottom:8px;cursor:pointer;'
      ].join('');

      const chevron = document.createElement('span');
      chevron.textContent = '▾';
      chevron.style.cssText = 'font-size:0.75rem;color:var(--muted);transition:transform 0.18s;flex-shrink:0;';

      const domainFavicon = document.createElement('div');
      domainFavicon.style.cssText = [
        'width:18px;height:18px;border-radius:4px;',
        'background:var(--accent-soft);color:var(--accent);',
        'display:flex;align-items:center;justify-content:center;',
        'font-size:0.6rem;font-weight:700;flex-shrink:0;'
      ].join('');
      domainFavicon.textContent = domain.replace(/^\./, '')[0]?.toUpperCase() || '?';

      const domainLabel = document.createElement('span');
      domainLabel.style.cssText = 'font-size:0.82rem;font-weight:600;color:var(--settings-font-color);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';
      domainLabel.textContent = domain;

      const countBadge = document.createElement('span');
      countBadge.style.cssText = [
        'font-size:0.7rem;font-weight:600;',
        'background:var(--accent-soft);color:var(--accent);',
        'border-radius:20px;padding:1px 8px;flex-shrink:0;'
      ].join('');
      countBadge.textContent = cookies.length;

      domainHeader.appendChild(chevron);
      domainHeader.appendChild(domainFavicon);
      domainHeader.appendChild(domainLabel);
      domainHeader.appendChild(countBadge);

      const cookiesWrap = document.createElement('div');

      domainHeader.addEventListener('click', () => {
        const collapsed = cookiesWrap.style.display === 'none';
        cookiesWrap.style.display = collapsed ? 'block' : 'none';
        chevron.style.transform = collapsed ? '' : 'rotate(-90deg)';
      });

      cookies.forEach(c => {
        const row = document.createElement('div');
        row.style.cssText = [
          'padding:9px 10px;border-radius:10px;',
          'border:var(--border-width) solid var(--border-color);',
          'background:var(--input-bg);margin-bottom:5px;',
          'cursor:pointer;transition:background 0.14s;'
        ].join('');
        row.addEventListener('mouseenter', () => row.style.background = 'var(--button-hover)');
        row.addEventListener('mouseleave', () => row.style.background = 'var(--input-bg)');

        const { decoded, isEncoded, encoding } = decodeCookieValue(c.value);

        const rowHead = document.createElement('div');
        rowHead.style.cssText = 'display:flex;align-items:center;gap:6px;margin-bottom:4px;flex-wrap:wrap;';

        const nameEl = document.createElement('span');
        nameEl.style.cssText = 'font-size:0.83rem;font-weight:600;color:var(--settings-font-color);word-break:break-all;';
        nameEl.textContent = c.name || '(unnamed)';

        const badges = [];
        if (c.secure)   badges.push({ label: 'Secure',   color: 'rgba(34,197,94,0.15)',   text: 'rgb(22,163,74)' });
        if (c.httpOnly) badges.push({ label: 'HttpOnly', color: 'rgba(59,130,246,0.15)',  text: 'rgb(37,99,235)' });
        if (c.session || !c.expirationDate)
                        badges.push({ label: 'Session',  color: 'rgba(124,58,237,0.12)', text: 'var(--accent)' });
        if (c.sameSite) badges.push({ label: `SameSite: ${c.sameSite}`, color: 'rgba(245,158,11,0.12)', text: 'rgb(180,116,7)' });
        if (isEncoded)  badges.push({ label: encoding || 'URL-encoded', color: 'rgba(239,68,68,0.1)', text: 'rgb(220,38,38)' });

        rowHead.appendChild(nameEl);
        badges.forEach(b => {
          const badge = document.createElement('span');
          badge.style.cssText = `font-size:0.65rem;font-weight:600;padding:1px 7px;border-radius:20px;background:${b.color};color:${b.text};flex-shrink:0;`;
          badge.textContent = b.label;
          rowHead.appendChild(badge);
        });

        const valueWrap = document.createElement('div');
        valueWrap.style.cssText = 'display:flex;align-items:flex-start;gap:6px;';

        const valueLabel = document.createElement('span');
        valueLabel.style.cssText = 'font-size:0.72rem;color:var(--muted);flex-shrink:0;padding-top:1px;';
        valueLabel.textContent = 'Value:';

        const valueEl = document.createElement('span');
        valueEl.style.cssText = [
          'font-size:0.78rem;font-family:monospace;',
          'color:var(--settings-font-color);',
          'word-break:break-all;flex:1;',
          'max-height:3.6em;overflow:hidden;',
          'display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;'
        ].join('');
        valueEl.textContent = decoded || '(empty)';

        valueWrap.appendChild(valueLabel);
        valueWrap.appendChild(valueEl);

        let expanded = false;
        if (decoded.length > 120) {
          valueEl.style.cursor = 'pointer';
          valueEl.title = 'Click to expand';
          valueEl.addEventListener('click', (e) => {
            e.stopPropagation();
            expanded = !expanded;
            valueEl.style.maxHeight    = expanded ? 'none' : '3.6em';
            valueEl.style['-webkit-line-clamp'] = expanded ? 'unset' : '3';
            valueEl.title = expanded ? 'Click to collapse' : 'Click to expand';
          });
        }

        const footer = document.createElement('div');
        footer.style.cssText = 'display:flex;align-items:center;gap:10px;margin-top:5px;flex-wrap:wrap;';

        const metaParts = [
          `Path: ${c.path || '/'}`,
          formatCookieExpiry(c)
        ];
        metaParts.forEach(text => {
          const m = document.createElement('span');
          m.style.cssText = 'font-size:0.7rem;color:var(--muted);';
          m.textContent = text;
          footer.appendChild(m);
        });

        const copyBtn = document.createElement('button');
        copyBtn.style.cssText = [
          'margin-left:auto;height:22px;padding:0 8px;',
          'border-radius:6px;border:var(--border-width) solid var(--border-color);',
          'background:transparent;color:var(--muted);',
          'font-size:0.68rem;cursor:pointer;',
          'transition:background 0.14s,color 0.14s;'
        ].join('');
        copyBtn.textContent = 'Copy value';
        copyBtn.addEventListener('click', e => {
          e.stopPropagation();
          navigator.clipboard.writeText(c.value || '').catch(() => {});
          copyBtn.textContent = 'Copied!';
          setTimeout(() => { copyBtn.textContent = 'Copy value'; }, 1500);
        });
        footer.appendChild(copyBtn);

        row.appendChild(rowHead);
        row.appendChild(valueWrap);
        row.appendChild(footer);
        cookiesWrap.appendChild(row);
      });

      section.appendChild(domainHeader);
      section.appendChild(cookiesWrap);
      cookiesList.appendChild(section);
    });
}

if (viewCookiesBtn) viewCookiesBtn.addEventListener('click', openCookiesModal);
if (cookiesModalClose) cookiesModalClose.addEventListener('click', closeCookiesModal);
if (cookiesModal) cookiesModal.addEventListener('click', e => { if (e.target === cookiesModal) closeCookiesModal(); });

if (cookiesSearch) {
  cookiesSearch.addEventListener('input', e => {
    _cookieSearch = e.target.value.trim();
    renderCookieList();
  });
}

document.querySelectorAll('[data-cookie-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    _cookieFilter = btn.dataset.cookieFilter;
    document.querySelectorAll('[data-cookie-filter]').forEach(b =>
      b.classList.toggle('active', b.dataset.cookieFilter === _cookieFilter)
    );
    renderCookieList();
  });
});

function saveCookieExceptionsFromUI() {
  if (!cookieExceptionsContainer) return;
  const rows = Array.from(cookieExceptionsContainer.querySelectorAll('.cookie-exception-row'));
  const exceptions = rows.map((row) => {
    const input = row.querySelector('input');
    const select = row.querySelector('select');
    return { domain: cleanDomain(input.value || ''), action: select.value || 'allow' };
  }).filter((ex) => ex.domain);
  settings.privacy.exceptions = exceptions;
  saveSettings();
  applyCookiePolicy(settings.privacy);
}

async function applyAdBlockSetting(enabled) {
  if (window.electronAPI?.setAdblockEnabled) {
    await window.electronAPI.setAdblockEnabled(enabled);
  }
}

async function updateAdBlockStatus() {
  if (!window.electronAPI?.getAdblockStats) return;
  const stats = await window.electronAPI.getAdblockStats();
  const el = document.getElementById('adblock-status');
  if (el) el.textContent = stats.enabled
    ? `Active — ${stats.domainCount.toLocaleString()} domains blocked`
    : 'Disabled';
}

function createCookieExceptionRow(domain = '', action = 'allow') {
  const row = document.createElement('div');
  row.className = 'cookie-exception-row';
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'example.com';
  input.value = domain || '';
  const select = document.createElement('select');
  const optAllow = document.createElement('option');
  optAllow.value = 'allow';
  optAllow.textContent = 'Allow';
  const optBlock = document.createElement('option');
  optBlock.value = 'block';
  optBlock.textContent = 'Block';
  select.appendChild(optAllow);
  select.appendChild(optBlock);
  select.value = action || 'allow';
  row.appendChild(input);
  row.appendChild(select);
  input.addEventListener('input', () => { adjustCookieExceptionRows(); saveCookieExceptionsFromUI(); });
  select.addEventListener('change', () => { saveCookieExceptionsFromUI(); });
  return row;
}

function createWebsiteShortcutRow(key = '', url = '') {
  const row = document.createElement('div');
  row.className = 'website-shortcut-row';
  const keyInput = document.createElement('input');
  keyInput.type = 'text';
  keyInput.placeholder = 'Alt+1';
  keyInput.className = 'ws-key';
  keyInput.value = key || '';
  const urlInput = document.createElement('input');
  urlInput.type = 'text';
  urlInput.placeholder = 'https://www.example.com';
  urlInput.className = 'ws-url';
  urlInput.value = url || '';
  keyInput.addEventListener('input', () => { adjustWebsiteShortcutRows(); saveWebsiteShortcuts(); });
  urlInput.addEventListener('input', () => { adjustWebsiteShortcutRows(); saveWebsiteShortcuts(); });
  row.appendChild(keyInput);
  row.appendChild(urlInput);
  return row;
}

function adjustWebsiteShortcutRows() {
  if (!websiteShortcutsContainer) return;
  const rows = Array.from(websiteShortcutsContainer.querySelectorAll('.website-shortcut-row'));
  const filled = rows.filter((r) => {
    const k = (r.querySelector('.ws-key')?.value || '').trim();
    const u = (r.querySelector('.ws-url')?.value || '').trim();
    return k !== '' || u !== '';
  }).length;
  const desired = Math.max(2, filled + 1);
  const current = rows.length;
  if (current < desired) {
    for (let i = 0; i < desired - current; i++) websiteShortcutsContainer.appendChild(createWebsiteShortcutRow());
  } else if (current > desired) {
    for (let i = current - 1; i >= desired; i--) {
      const row = rows[i];
      const k = (row.querySelector('.ws-key')?.value || '').trim();
      const u = (row.querySelector('.ws-url')?.value || '').trim();
      if (k === '' && u === '') row.remove();
    }
  }
}

function populateWebsiteShortcutsUI() {
  if (!websiteShortcutsContainer) return;
  websiteShortcutsContainer.innerHTML = '';
  const websites = settings.keybinds.websites || [];
  const filled = websites.filter((w) => w && (w.key || w.url)).length;
  const desired = Math.max(2, filled + 1);
  for (let i = 0; i < desired; i++) {
    const w = websites[i] || { key: '', url: '' };
    websiteShortcutsContainer.appendChild(createWebsiteShortcutRow(w.key || '', w.url || ''));
  }
}

function adjustCookieExceptionRows() {
  if (!cookieExceptionsContainer) return;
  const rows = Array.from(cookieExceptionsContainer.querySelectorAll('.cookie-exception-row'));
  const filled = rows.filter((r) => (r.querySelector('input').value || '').trim() !== '').length;
  const desired = Math.max(2, filled + 1);
  const current = rows.length;
  if (current < desired) {
    for (let i = 0; i < desired - current; i++) cookieExceptionsContainer.appendChild(createCookieExceptionRow());
  } else if (current > desired) {
    for (let i = current - 1; i >= desired; i--) {
      const row = rows[i];
      const input = row.querySelector('input');
      if (input && input.value.trim() === '') row.remove();
    }
  }
}

function populateCookieExceptionsUI() {
  if (!cookieExceptionsContainer) return;
  cookieExceptionsContainer.innerHTML = '';
  const exceptions = settings.privacy.exceptions || [];
  const filled = exceptions.filter((e) => e && (e.domain || '').trim() !== '').length;
  const desired = Math.max(2, filled + 1);
  for (let i = 0; i < desired; i++) {
    const ex = exceptions[i] || { domain: '', action: 'allow' };
    cookieExceptionsContainer.appendChild(createCookieExceptionRow(ex.domain || '', ex.action || 'allow'));
  }
}

function findSavedCredential(host) {
  if (!host || !settings.credentials) return null;
  return settings.credentials.find((credential) => {
    const credentialHost = credential.host.toLowerCase();
    const normalizedHost = host.toLowerCase();
    return normalizedHost === credentialHost || normalizedHost.endsWith(`.${credentialHost}`);
  });
}

async function addOrUpdateSavedCredential(host, username, password) {
  if (!host || !username || !password) return;
  if (!settings.masterPasswordHash) return;

  const masterPw = await promptMasterPasswordForEncryption();
  if (!masterPw) return;

  const normalizedHost = host.toLowerCase();
  const encryptedPassword = await encryptPassword(masterPw, password);

  const existing = settings.credentials.find(
    c => c.host.toLowerCase() === normalizedHost && c.username === username
  );
  if (existing) {
    existing.encryptedPassword = encryptedPassword;
    existing.password = undefined;
  } else {
    settings.credentials.push({
      host: normalizedHost,
      username,
      encryptedPassword,
      password: undefined
    });
  }
  saveSettings();
}

let _unlockedMasterPw = null;
let _unlockedMasterPwTimer = null;

function setUnlockedMasterPw(pw) {
  _unlockedMasterPw = pw;
  clearTimeout(_unlockedMasterPwTimer);
  _unlockedMasterPwTimer = setTimeout(() => { _unlockedMasterPw = null; }, 5 * 60 * 1000);
}

async function promptMasterPasswordForEncryption() {
  if (_unlockedMasterPw) return _unlockedMasterPw;

  return new Promise((resolve) => {
    const overlay = document.createElement('div');
    overlay.className = 'settings-modal open';
    overlay.style.zIndex = '99999';
    overlay.innerHTML = `
      <div class="settings-panel" style="width:min(360px,calc(100vw - 32px));max-height:unset;">
        <div class="settings-header" style="padding:18px 22px 14px;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:36px;height:36px;border-radius:10px;background:var(--accent-soft);color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2a5 5 0 0 1 5 5v3H7V7a5 5 0 0 1 5-5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><rect x="3" y="10" width="18" height="12" rx="3" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="16" r="1.5" fill="currentColor"/></svg>
            </div>
            <div>
              <div style="font-size:1rem;font-weight:700;color:var(--settings-font-color);">Confirm master password</div>
              <div style="font-size:0.78rem;color:var(--muted);margin-top:1px;">Required to encrypt your password</div>
            </div>
          </div>
        </div>
        <div style="padding:16px 22px 20px;display:flex;flex-direction:column;gap:10px;">
          <div style="position:relative;">
            <input type="password" id="encrypt-pw-input" placeholder="Enter master password"
              style="width:100%;height:42px;padding:0 40px 0 14px;border-radius:12px;border:var(--border-width) solid var(--border-color);background:var(--input-bg);color:var(--text);font-size:0.9rem;outline:none;transition:border-color 0.18s,box-shadow 0.18s;box-sizing:border-box;" />
            <button id="encrypt-pw-toggle" tabindex="-1"
              style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--muted);padding:4px;display:flex;align-items:center;justify-content:center;border-radius:6px;">
            </button>
          </div>
          <div id="encrypt-pw-error" style="color:rgba(239,68,68,0.85);font-size:0.8rem;min-height:16px;padding:0 2px;"></div>
          <div style="display:flex;gap:8px;margin-top:2px;">
            <button id="encrypt-pw-confirm"
              style="flex:1;height:40px;border-radius:12px;border:none;background:var(--accent);color:#fff;font-size:0.88rem;font-weight:600;cursor:pointer;transition:opacity 0.15s,transform 0.15s;">
              Confirm
            </button>
            <button id="encrypt-pw-cancel"
              style="flex:1;height:40px;border-radius:12px;border:var(--border-width) solid var(--border-color);background:transparent;color:var(--settings-font-color);font-size:0.88rem;font-weight:500;cursor:pointer;transition:background 0.15s,transform 0.15s;">
              Cancel
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    setTimeout(() => overlay.querySelector('#encrypt-pw-input')?.focus(), 50);

    const confirm = async () => {
      const pw = overlay.querySelector('#encrypt-pw-input').value;
      const ok = await verifyMasterPassword(pw);
      if (!ok) {
        overlay.querySelector('#encrypt-pw-error').textContent = 'Incorrect password.';
        return;
      }
      setUnlockedMasterPw(pw);
      overlay.remove();
      resolve(pw);
    };

    overlay.querySelector('#encrypt-pw-confirm').addEventListener('click', confirm);
    overlay.querySelector('#encrypt-pw-input').addEventListener('keydown', e => {
      if (e.key === 'Enter') confirm();
    });
    overlay.querySelector('#encrypt-pw-cancel').addEventListener('click', () => {
      overlay.remove();
      resolve(null);
    });
  });
}

function showCredentialSavePrompt(host, username, password) {
  if (!credentialSaveModal || !credentialSaveText) return;

  if (!settings.masterPasswordHash) {
    pendingCredential = { host, username, password };
    openMasterPasswordSetup();
    return;
  }

  pendingCredential = { host, username, password };
  credentialSaveText.textContent = host;
  credentialSaveModal.classList.add('open');
  credentialSaveModal.setAttribute('aria-hidden', 'false');

  clearTimeout(credentialSaveModal._autoDismiss);
  credentialSaveModal._autoDismiss = setTimeout(() => hideCredentialSavePrompt(), 10000);
}

function hideCredentialSavePrompt() {
  if (!credentialSaveModal) return;
  clearTimeout(credentialSaveModal._autoDismiss);
  pendingCredential = null;
  credentialSaveModal.classList.remove('open');
  credentialSaveModal.setAttribute('aria-hidden', 'true');
}

async function hashMasterPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + 'davos-browser-salt');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function deriveCryptoKey(masterPassword) {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(masterPassword),
    'PBKDF2',
    false,
    ['deriveKey']
  );
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: encoder.encode('davos-browser-vault-salt'),
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

async function encryptPassword(masterPassword, plaintext) {
  const key = await deriveCryptoKey(masterPassword);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoder = new TextEncoder();
  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoder.encode(plaintext)
  );
  const combined = new Uint8Array(iv.byteLength + encrypted.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(encrypted), iv.byteLength);
  return btoa(String.fromCharCode(...combined));
}

async function decryptPassword(masterPassword, ciphertext) {
  try {
    const combined = Uint8Array.from(atob(ciphertext), c => c.charCodeAt(0));
    const iv = combined.slice(0, 12);
    const data = combined.slice(12);
    const key = await deriveCryptoKey(masterPassword);
    const decrypted = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      data
    );
    return new TextDecoder().decode(decrypted);
  } catch {
    return null;
  }
}

async function verifyMasterPassword(password) {
  const hash = await hashMasterPassword(password);
  return hash === settings.masterPasswordHash;
}

function openMasterPasswordSetup() {
  const modal = document.getElementById('master-password-modal');
  if (!modal) return;
  document.getElementById('master-pw-input').value = '';
  document.getElementById('master-pw-confirm').value = '';
  document.getElementById('master-pw-error').textContent = '';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  setTimeout(() => document.getElementById('master-pw-input')?.focus(), 50);
}

function closeMasterPasswordSetup() {
  const modal = document.getElementById('master-password-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function openVaultModal() {
  const modal = document.getElementById('vault-modal');
  if (!modal) return;
  document.getElementById('vault-locked').style.display = 'flex';
  document.getElementById('vault-unlocked').style.display = 'none';
  document.getElementById('vault-unlock-input').value = '';
  document.getElementById('vault-unlock-error').textContent = '';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  setTimeout(() => document.getElementById('vault-unlock-input')?.focus(), 50);
}

function closeVaultModal() {
  const modal = document.getElementById('vault-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.getElementById('vault-locked').style.display = 'flex';
  document.getElementById('vault-unlocked').style.display = 'none';
}

function renderVaultList() {
  const list = document.getElementById('vault-list');
  if (!list) return;
  const creds = settings.credentials || [];
  if (!creds.length) {
    list.innerHTML = '<p style="color:var(--muted);font-size:0.9rem;padding:8px 0;">No saved passwords yet.</p>';
    return;
  }
  list.innerHTML = '';
  creds.forEach((cred, idx) => {
    const item = document.createElement('div');
    item.className = 'vault-item';

    const favicon = document.createElement('div');
    favicon.style.cssText = 'width:28px;height:28px;border-radius:7px;background:var(--accent-soft);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;flex-shrink:0;';
    favicon.textContent = (cred.host?.[0] || '?').toUpperCase();

    const info = document.createElement('div');
    info.className = 'vault-item-info';
    info.innerHTML = `
      <div class="vault-item-host">${cred.host || ''}</div>
      <div class="vault-item-user">${cred.username || ''}</div>
      <div class="vault-item-pw" id="vault-pw-${idx}">••••••••</div>
    `;

    const actions = document.createElement('div');
    actions.className = 'vault-item-actions';

    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'vault-btn';
    toggleBtn.title = 'Show/hide password';
    toggleBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/></svg>';
    let shown = false;
    toggleBtn.addEventListener('click', async () => {
      shown = !shown;
      const pwEl = document.getElementById(`vault-pw-${idx}`);
      if (!pwEl) return;
      if (!shown) { pwEl.textContent = '••••••••'; return; }

      let pw = cred.password;
      if (cred.encryptedPassword) {
        const masterPw = await promptMasterPasswordForEncryption();
        if (!masterPw) { shown = false; return; }
        pw = await decryptPassword(masterPw, cred.encryptedPassword);
      }
      if (pwEl) pwEl.textContent = pw || '(decryption failed)';
    });
    const copyBtn = document.createElement('button');
    copyBtn.className = 'vault-btn';
    copyBtn.title = 'Copy password';
    copyBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" stroke-width="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" stroke-width="2"/></svg>';
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(cred.password).catch(() => {});
      copyBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      setTimeout(() => {
        copyBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" stroke-width="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" stroke-width="2"/></svg>';
      }, 1500);
    });

    const delBtn = document.createElement('button');
    delBtn.className = 'vault-btn vault-btn--delete';
    delBtn.title = 'Delete';
    delBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    delBtn.addEventListener('click', () => {
      settings.credentials.splice(idx, 1);
      saveSettings();
      renderVaultList();
    });

    actions.appendChild(toggleBtn);
    actions.appendChild(copyBtn);
    actions.appendChild(delBtn);
    item.appendChild(favicon);
    item.appendChild(info);
    item.appendChild(actions);
    list.appendChild(item);
  });
}

function savePendingCredential() {
  if (!pendingCredential) return;
  addOrUpdateSavedCredential(pendingCredential.host, pendingCredential.username, pendingCredential.password);
  hideCredentialSavePrompt();
}

function fillCredentialsForTab(tab) {
  const credential = findSavedCredential(getHost(tab.url));
  if (!credential || !tab || !tab.webview) return;
  showFillCredentialPrompt(tab, credential);
}

function showFillCredentialPrompt(tab, credential) {
  const existing = document.getElementById('fill-cred-toast-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'fill-cred-toast-overlay';
  overlay.className = 'cred-toast-overlay open';
  overlay.style.bottom = '24px';

  overlay.innerHTML = `
    <div class="cred-toast">
      <div class="cred-toast-icon" style="background:var(--accent-soft);color:var(--accent);">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 2a5 5 0 0 1 5 5v3H7V7a5 5 0 0 1 5-5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
          <rect x="3" y="10" width="18" height="12" rx="3" stroke="currentColor" stroke-width="1.8"/>
          <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
        </svg>
      </div>
      <div class="cred-toast-body">
        <div class="cred-toast-title">Use saved password?</div>
        <div class="cred-toast-sub">${credential.username} · ${credential.host}</div>
      </div>
      <div class="cred-toast-actions">
        <button class="cred-toast-btn cred-toast-btn--save" id="fill-cred-confirm">Fill</button>
        <button class="cred-toast-btn cred-toast-btn--dismiss" id="fill-cred-dismiss">✕</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const autoTimer = setTimeout(() => overlay.remove(), 12000);

  document.getElementById('fill-cred-confirm').addEventListener('click', () => {
    clearTimeout(autoTimer);
    overlay.remove();
    doFillCredentials(tab, credential);
  });

  document.getElementById('fill-cred-dismiss').addEventListener('click', () => {
    clearTimeout(autoTimer);
    overlay.remove();
  });
}

async function doFillCredentials(tab, credential) {
  if (!tab || !tab.webview) return;

  let password = credential.password;

  if (credential.encryptedPassword) {
    const masterPw = await promptMasterPasswordForEncryption();
    if (!masterPw) return;
    password = await decryptPassword(masterPw, credential.encryptedPassword);
    if (!password) return;
  }

  const script = `(() => {
    const username = ${JSON.stringify(credential.username)};
    const password = ${JSON.stringify(password)};
    const inputs = Array.from(document.querySelectorAll('input'));
    const passwordInput = inputs.find((input) => input.type === 'password');
    if (!passwordInput) return false;
    const usernameInput = inputs.find((input) => {
      const type = (input.type || '').toLowerCase();
      const name = (input.name || '').toLowerCase();
      const id = (input.id || '').toLowerCase();
      const placeholder = (input.placeholder || '').toLowerCase();
      return type === 'text' || type === 'email' || name.includes('user') || name.includes('email') || id.includes('user') || id.includes('email') || placeholder.includes('user') || placeholder.includes('email');
    }) || inputs.find((input) => input.type === 'text' || input.type === 'email');
    if (usernameInput) {
      usernameInput.value = username;
      usernameInput.dispatchEvent(new Event('input', { bubbles: true }));
      usernameInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
    passwordInput.value = password;
    passwordInput.dispatchEvent(new Event('input', { bubbles: true }));
    passwordInput.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  })();`;
  tab.webview.executeJavaScript(script, true).catch(() => null);
}

function captureCredentialsForTab(tab) {
  if (!tab || !tab.webview) return;
  const script = `new Promise((resolve) => {
    let resolved = false;
    function cleanup() {
      resolved = true;
      document.removeEventListener('submit', onSubmit, true);
      document.removeEventListener('click', onClick, true);
      observer.disconnect();
      clearTimeout(timeout);
    }
    function getFields() {
      const passwordInput = document.querySelector('input[type="password"]');
      if (!passwordInput || !passwordInput.value) return null;
      const candidates = Array.from(document.querySelectorAll('input')).filter((input) => {
        const type = (input.type || '').toLowerCase();
        return type === 'text' || type === 'email';
      });
      const usernameInput = candidates.find((input) => {
        const name = (input.name || '').toLowerCase();
        const id = (input.id || '').toLowerCase();
        const placeholder = (input.placeholder || '').toLowerCase();
        return name.includes('user') || name.includes('email') || id.includes('user') || id.includes('email') || placeholder.includes('user') || placeholder.includes('email');
      }) || candidates[0];
      if (!usernameInput || !usernameInput.value) return null;
      return { username: usernameInput.value, password: passwordInput.value };
    }
    function onSubmit() {
      if (resolved) return;
      const value = getFields();
      if (value) { cleanup(); resolve(value); }
    }
    function onClick(e) {
      if (resolved) return;
      const target = e.target;
      const isSubmitBtn = (
        target.type === 'submit' ||
        target.tagName === 'BUTTON' ||
        (target.role || '').toLowerCase() === 'button'
      );
      if (!isSubmitBtn) return;
      setTimeout(() => {
        if (resolved) return;
        const value = getFields();
        if (value) { cleanup(); resolve(value); }
      }, 300);
    }
    const observer = new MutationObserver(() => {
      if (resolved) return;
      const value = getFields();
      if (value && document.querySelector('input[type="password"]')?.value?.length > 1) {
      }
    });
    observer.observe(document, { childList: true, subtree: true });
    document.addEventListener('submit', onSubmit, true);
    document.addEventListener('click', onClick, true);
    const timeout = setTimeout(() => { if (!resolved) { cleanup(); resolve(null); } }, 60000);
  });`;
  tab.webview.executeJavaScript(script, true).then((matched) => {
    if (!matched || !matched.username || !matched.password) return;
    const host = getHost(tab.url);
    if (!findSavedCredential(host)) showCredentialSavePrompt(host, matched.username, matched.password);
  }).catch(() => null);
}

function setupCredentialHandling(tab) {
  fillCredentialsForTab(tab);
  captureCredentialsForTab(tab);
}

async function applyCookiePolicy(privacy) {
  if (!window.electronAPI || !window.electronAPI.setCookiePolicy) return;
  const policy = { enabled: privacy.cookiesEnabled, level: privacy.cookieLevel, exceptions: privacy.exceptions || [] };
  await window.electronAPI.setCookiePolicy(policy);
}

function popoutActiveVideo() {
  const tab = getFocusedTab();
  if (!tab || !tab.webview) return;
  tab.webview.executeJavaScript(`(async () => {
    const video = document.querySelector('video');
    if (!video) return false;
    if (document.pictureInPictureElement) { await document.exitPictureInPicture(); return true; }
    if (video.readyState >= 3) { await video.requestPictureInPicture(); return true; }
    return false;
  })();`, true).catch(() => null);
}

let videoPopoutTimer = null;

function setVideoPopoutVisible(visible) {
  if (!videoPopoutBtn) return;
  videoPopoutBtn.style.display = visible ? 'inline-flex' : 'none';
}

function refreshVideoPopoutButtonState() {
  const tab = tabs.find((item) => item.id === activeTabId);
  if (!tab || !tab.webview) { setVideoPopoutVisible(false); return; }
  tab.webview.executeJavaScript(`(function() {
    try {
      const videos = Array.from(document.querySelectorAll('video'));
      if (videos.length === 0) return false;
      return videos.some(v => {
        try { return Number.isFinite(v.duration) && v.duration > 0; } catch(e) { return false; }
      });
    } catch(e) { return false; }
  })();`, true).then((hasVideo) => {
    setVideoPopoutVisible(Boolean(hasVideo));
  }).catch(() => {
    const tab = tabs.find((item) => item.id === activeTabId);
    const url = tab ? tab.url : '';
    const isVideoSite = /youtube\.com\/watch|twitch\.tv\/.+|vimeo\.com\/.+|dailymotion\.com\/.+/.test(url);
    setVideoPopoutVisible(isVideoSite);
  });
}

function startVideoPopoutPolling() {
  if (videoPopoutTimer) return;
  let fastTicks = 0;
  refreshVideoPopoutButtonState();
  videoPopoutTimer = setInterval(() => {
    refreshVideoPopoutButtonState();
    fastTicks++;
    if (fastTicks >= 10 && videoPopoutTimer) {
      clearInterval(videoPopoutTimer);
      videoPopoutTimer = setInterval(refreshVideoPopoutButtonState, 2000);
    }
  }, 500);
}

function stopVideoPopoutPolling() {
  if (!videoPopoutTimer) return;
  clearInterval(videoPopoutTimer);
  videoPopoutTimer = null;
}

function syncSettingsColorInputs() {
  const colorInputs = Array.from(document.querySelectorAll('.settings-control input[type="color"]'));
  if (!colorInputs.length) return;
  function getContrastColor(hex) {
    if (!hex) return '#000';
    const v = hex.replace('#', '');
    const r = parseInt(v.substring(0,2),16);
    const g = parseInt(v.substring(2,4),16);
    const b = parseInt(v.substring(4,6),16);
    const lum = 0.2126*r + 0.7152*g + 0.0722*b;
    return lum > 150 ? '#000' : '#fff';
  }
  colorInputs.forEach((input) => {
    const update = () => {
      try { 
        input.style.background = input.value || '#ffffff'; 
        input.style.color = getContrastColor(input.value || '#ffffff'); 
      } 
      catch (e) {}
    };
    update();
    input.addEventListener('input', update);
    input.addEventListener('change', update);
  });
}


function normalizeShortcut(combo) {
  if (!combo || typeof combo !== 'string') return '';
  const parts = combo.split('+').map((part) => part.trim()).filter(Boolean);
  const normalized = [];
  parts.forEach((part) => {
    const lower = part.toLowerCase();
    if (lower === 'ctrl' || lower === 'control') { if (!normalized.includes('Control')) normalized.push('Control'); return; }
    if (lower === 'alt') { if (!normalized.includes('Alt')) normalized.push('Alt'); return; }
    if (lower === 'shift') { if (!normalized.includes('Shift')) normalized.push('Shift'); return; }
    if (lower === 'meta' || lower === 'cmd' || lower === 'win' || lower === 'command') { if (!normalized.includes('Meta')) normalized.push('Meta'); return; }
    if (lower === 'space' || lower === 'spacebar') { normalized.push('Space'); return; }
    if (lower.length === 1) { normalized.push(lower.toUpperCase()); } else { normalized.push(part); }
  });
  const order = ['Control', 'Alt', 'Shift', 'Meta'];
  const sorted = normalized.sort((a, b) => {
    const ia = order.indexOf(a); const ib = order.indexOf(b);
    if (ia === -1 && ib === -1) return a.localeCompare(b);
    if (ia === -1) return 1; if (ib === -1) return -1;
    return ia - ib;
  });
  return sorted.join('+');
}

function getEventShortcut(event) {
  const keys = [];
  if (event.ctrlKey) keys.push('Control');
  if (event.altKey) keys.push('Alt');
  if (event.shiftKey) keys.push('Shift');
  if (event.metaKey) keys.push('Meta');
  let key = event.key;
  if (!key) return '';
  if (key === ' ') key = 'Space';
  if (key === 'Esc') key = 'Escape';
  if (['Control', 'Shift', 'Alt', 'Meta'].includes(key)) return normalizeShortcut(keys.join('+'));
  if (key.length === 1) key = key.toUpperCase();
  keys.push(key);
  return normalizeShortcut(keys.join('+'));
}

function isEditableTarget(target) {
  return target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
}

let _lastMouseX = 0;
document.addEventListener('mousemove', (e) => { _lastMouseX = e.clientX; }, { passive: true });
let lastPointerOverTabId = null;

function getFocusedTab() {
  if (isSplitActive()) {
    if (activeTabId === splitState.leftId || activeTabId === splitState.rightId) {
      const active = tabs.find((t) => t.id === activeTabId);
      if (active) return active;
    }
    if (lastPointerOverTabId) {
      const hovered = tabs.find((t) => t.id === lastPointerOverTabId);
      if (hovered && (hovered.id === splitState.leftId || hovered.id === splitState.rightId)) return hovered;
    }
    const midpoint = window.innerWidth / 2;
    const targetId = _lastMouseX >= midpoint ? splitState.rightId : splitState.leftId;
    const target = tabs.find((t) => t.id === targetId);
    if (target) return target;
  }
  return tabs.find((item) => item.id === activeTabId);
}

function getSearchTargetTab() {
  return tabs.find((t) => t.id === activeTabId) || getFocusedTab();
}

function openSearchOverlay() {
  if (!searchOverlay || !searchOverlayInput) return;
  const tab = getSearchTargetTab();
  searchOverlay.dataset.targetTabId = tab ? tab.id : '';
  let prefill = '';
  try {
    if (tab && tab.url) {
      const currentUrl = tab.url.replace(/\/$/, '');
      const isHomePage = Object.values(SEARCH_ENGINES).some(engine => {
        const home = engine.home.replace(/\/$/, '');
        return currentUrl === home || currentUrl.startsWith(home + '?') || currentUrl.startsWith(home + '/');
      });
      if (!isHomePage) {
        try {
          const u = new URL(tab.url);
          prefill = u.hostname || '';
        } catch (e) { prefill = ''; }
      }
    }
  } catch (e) { prefill = ''; }
  searchOverlay.setAttribute('aria-hidden', 'false');
  searchOverlayInput.value = prefill;
  requestAnimationFrame(() => {
    searchOverlay.setAttribute('aria-hidden', 'false');
    searchOverlayInput.value = prefill;
    void searchOverlay.offsetHeight;
    searchOverlay.classList.add('open');
    requestAnimationFrame(() => {
      searchOverlayInput.focus();
    });
  });
}

function closeSearchOverlay() {
  if (!searchOverlay) return;
  searchOverlay.classList.remove('open');
  searchOverlay.setAttribute('aria-hidden', 'true');
}

function toggleMuteActiveTab() {
  const tab = getFocusedTab();
  if (!tab || !tab.webview) return;
  const isMuted = tab.webview.isAudioMuted();
  tab.webview.setAudioMuted(!isMuted);
}

function refreshActiveTab() {
  const tab = getFocusedTab();
  if (tab && tab.webview) tab.webview.reload();
}

function loadWebsiteShortcut(shortcut) {
  if (!shortcut || !shortcut.url) return;
  const tab = tabs.find((item) => item.id === activeTabId);
  if (!tab || !tab.webview) return;
  tab.webview.loadURL(normalizeUrl(shortcut.url));
}

function matchShortcut(eventShortcut, settingShortcut) {
  return eventShortcut && normalizeShortcut(eventShortcut) === normalizeShortcut(settingShortcut);
}

function saveWebsiteShortcuts() {
  if (!websiteShortcutsContainer) return;
  const rows = Array.from(websiteShortcutsContainer.querySelectorAll('.website-shortcut-row'));
  const websites = rows.map((row) => ({
    key: (row.querySelector('.ws-key')?.value || '').trim(),
    url: (row.querySelector('.ws-url')?.value || '').trim()
  })).filter((w) => (w.key || w.url));
  settings.keybinds.websites = websites;
  saveSettings();
}

function handleGlobalKeydown(event) {
  if (event.defaultPrevented) return;
  if (isEditableTarget(document.activeElement)) return;
  const shortcut = getEventShortcut(event);
  if (!shortcut) return;
  try { const handled = triggerShortcut(shortcut); if (handled) event.preventDefault(); } catch (e) {}
}

function handleSearchOverlayKeydown(event) {
  if (!searchOverlay || !searchOverlay.classList.contains('open')) return;
  if (event.key === 'Escape') { event.preventDefault(); closeSearchOverlay(); return; }
  if (event.key === 'Enter') {
    event.preventDefault();
    const value = searchOverlayInput.value.trim();
    closeSearchOverlay();
    const targetId = searchOverlay.dataset.targetTabId;
    const tab = (targetId && tabs.find((t) => t.id === targetId)) || getFocusedTab();
    if (tab && tab.webview) {
      const isBang = value.startsWith('!') || value.includes(' !');
      if (isBang) {
        tab.webview.loadURL(`https://duckduckgo.com/?q=${encodeURIComponent(value)}`);
      } else {
        tab.webview.loadURL(normalizeUrl(value));
      }
    }
  }
}

function anyColorToRgb(color) {
  if (!color) return null;
  const rgbMatch = color.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (rgbMatch) return { r: +rgbMatch[1], g: +rgbMatch[2], b: +rgbMatch[3] };
  let hex = color.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
  if (hex.length !== 6) return null;
  return {
    r: parseInt(hex.slice(0,2), 16),
    g: parseInt(hex.slice(2,4), 16),
    b: parseInt(hex.slice(4,6), 16)
  };
}

function hexToRgba(color, alpha) {
  const c = anyColorToRgb(color);
  if (!c) return `rgba(0,0,0,${alpha})`;
  return `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`;
}

function anyColorToCss(color) {
  const c = anyColorToRgb(color);
  if (!c) return color || '#000000';
  return `rgb(${c.r}, ${c.g}, ${c.b})`;
}

function applyTheme(theme) {
  const root = document.documentElement;
  const tabPos = theme.tabPosition || 'left';
  const gradientDir = (tabPos === 'left' || tabPos === 'right') ? '180deg' : '135deg';

  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--surface', theme.gradient ? `linear-gradient(135deg, ${theme.surface}, ${theme.gradientSurface})` : theme.surface);
  root.style.setProperty('--panel', theme.panel);
  root.style.setProperty('--input-bg', theme.input);
  root.style.setProperty('--text', theme.text);
  root.style.setProperty('--button-bg', theme.surface);
  root.style.setProperty('--button-hover', hexToRgba(theme.accent, 0.08));
  root.style.setProperty('--newtab-bg', hexToRgba(theme.accent, 0.12));
  root.style.setProperty('--accent-soft', hexToRgba(theme.accent, 0.12));
  root.style.setProperty('--border-color', theme.borderColor);
  root.style.setProperty('--border-width', theme.borderWidth);
  root.style.setProperty('--tab-active-bg', theme.gradient ? `linear-gradient(135deg, ${theme.tabActiveBg}, ${theme.gradientTabActive})` : theme.tabActiveBg);
  root.style.setProperty('--tab-inactive-bg', theme.gradient ? `linear-gradient(135deg, ${theme.tabInactiveBg}, ${theme.gradientTabInactive})` : theme.tabInactiveBg);
  root.style.setProperty('--tab-active-text', theme.tabActiveText);
  root.style.setProperty('--tab-inactive-text', theme.tabInactiveText);
  root.style.setProperty('--settings-font-color', theme.settingsFontColor);
  root.style.setProperty('--muted', hexToRgba(theme.text || theme.settingsFontColor, 0.5));
  root.style.setProperty('--surface-solid', theme.surface);
  root.style.setProperty('--background', theme.gradient ? `linear-gradient(135deg, ${theme.gradientAccent}, ${theme.gradientSurface})` : theme.background);
  root.style.setProperty('--shadow', '0 14px 28px rgba(15, 23, 42, 0.06)');
  root.style.setProperty('--shell-bg', theme.gradient ? `linear-gradient(135deg, ${theme.surface}, ${theme.gradientSurface})` : theme.surface);
  root.style.setProperty('--shell-bg', theme.gradient ? `linear-gradient(${gradientDir}, ${theme.surface}, ${theme.gradientSurface})` : theme.surface);
  root.style.setProperty('--shell-bg-from', theme.surface);
  root.style.setProperty('--shell-bg-to', theme.gradient ? theme.gradientSurface : theme.surface);
  const rawSurface = theme.surface || '#ffffff';
  const hexMatch = rawSurface.match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/);
  if (hexMatch) {
    const surfaceHex = hexMatch[1].length === 3 ? hexMatch[1].split('').map(x => x + x).join('') : hexMatch[1];
    const sr = parseInt(surfaceHex.substring(0, 2), 16);
    const sg = parseInt(surfaceHex.substring(2, 4), 16);
    const sb = parseInt(surfaceHex.substring(4, 6), 16);
    const luminance = (0.2126 * sr + 0.7152 * sg + 0.0722 * sb) / 255;
    root.style.setProperty('--icon-filter', luminance > 0.5 ? 'none' : 'invert(1)');
  } else {
    root.style.setProperty('--icon-filter', 'none');
  }
  const shell = document.querySelector('.browser-shell');
  if (shell) {
    const patternValue = theme.surfacePattern || 'none';
    shell.dataset.surfacePattern = patternValue;
    document.documentElement.dataset.surfacePattern = patternValue;
    const hex = (theme.surfacePatternColor || '#7c3aed').replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    root.style.setProperty('--pattern-color', `${r}, ${g}, ${b}`);
    root.style.setProperty('--pattern-opacity', (theme.surfacePatternOpacity ?? 18) / 100);
  }
  const isPattern = (theme.surfacePattern && theme.surfacePattern !== 'none');
  if (surfacePatternColorControl) surfacePatternColorControl.classList.toggle('hidden', !isPattern);
  if (surfacePatternOpacityControl) surfacePatternOpacityControl.classList.toggle('hidden', !isPattern);
}

if (addressBar) {
  addressBar.addEventListener('focus', () => {
    document.querySelector('.browser-shell')
      ?.classList.add('address-expanded');
  });

  addressBar.addEventListener('blur', () => {
    document.querySelector('.browser-shell')
      ?.classList.remove('address-expanded');
  });
}

function applyTabPosition(position) {
  const browserShell = document.querySelector('.browser-shell');
  if (!browserShell) return;
  browserShell.classList.remove('vertical-tabs', 'tabs-right', 'tabs-bottom');
  if (position === 'left') {
    browserShell.classList.add('vertical-tabs');
  } else if (position === 'right') {
    browserShell.classList.add('vertical-tabs', 'tabs-right');
  } else if (position === 'bottom') {
    browserShell.classList.add('tabs-bottom');
  }
}

function getSavedThemePresets() {
  if (!settings.themePresets) settings.themePresets = [];
  return settings.themePresets;
}

function saveThemePresets(presets) {
  settings.themePresets = presets;
  saveSettings();
}

function saveCurrentThemeAsPreset() {
  const container = document.getElementById('theme-presets-list');
  if (!container) return;
  if (document.getElementById('theme-save-input-row')) return;
  const row = document.createElement('div');
  row.id = 'theme-save-input-row';
  row.className = 'theme-preset-row';
  row.style.marginBottom = '8px';
  const input = document.createElement('input');
  input.type = 'text'; input.placeholder = 'Theme name...';
  input.style.flex = '1 1 auto'; input.style.height = '32px'; input.style.padding = '0 10px';
  input.style.borderRadius = '8px'; input.style.border = 'var(--border-width) solid var(--border-color)';
  input.style.background = 'var(--input-bg)'; input.style.color = 'var(--settings-font-color)';
  input.style.outline = 'none'; input.style.fontSize = '0.88rem';
  const confirmBtn = document.createElement('button');
  confirmBtn.textContent = 'Save'; confirmBtn.className = 'theme-preset-load';
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel'; cancelBtn.className = 'theme-preset-load';
  const cleanup = () => row.remove();
  confirmBtn.addEventListener('click', () => {
    const name = input.value.trim();
    if (!name) return;
    const presets = getSavedThemePresets();
    presets.push({ name, theme: { ...settings.theme } });
    saveThemePresets(presets); cleanup(); renderThemePresets();
  });
  cancelBtn.addEventListener('click', cleanup);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') confirmBtn.click(); if (e.key === 'Escape') cleanup(); });
  row.appendChild(input); row.appendChild(confirmBtn); row.appendChild(cancelBtn);
  container.insertBefore(row, container.firstChild);
  input.focus();
}

function deleteThemePreset(index) {
  const presets = getSavedThemePresets();
  presets.splice(index, 1);
  saveThemePresets(presets);
  renderThemePresets();
}

function loadThemePreset(index) {
  const presets = getSavedThemePresets();
  const preset = presets[index];
  if (!preset) return;
  settings.theme = { ...settings.theme, ...preset.theme };
  applyTheme(settings.theme); applyTabPosition(settings.theme.tabPosition); saveSettings(); populateSettingsUI();
}

function renderThemePresets() {
  const container = document.getElementById('theme-presets-list');
  if (!container) return;
  const presets = getSavedThemePresets();
  container.innerHTML = '';
  if (!presets.length) {
    const empty = document.createElement('div');
    empty.className = 'theme-preset-empty';
    empty.textContent = 'No saved themes yet.';
    container.appendChild(empty); return;
  }
  presets.forEach((preset, idx) => {
    const row = document.createElement('div'); row.className = 'theme-preset-row';
    const swatch = document.createElement('div'); swatch.className = 'theme-preset-swatch'; swatch.style.background = preset.theme.accent || '#7c3aed';
    const label = document.createElement('span'); label.className = 'theme-preset-label'; label.textContent = preset.name;
    const actions = document.createElement('div'); actions.className = 'theme-preset-actions';
    const loadBtn = document.createElement('button'); loadBtn.textContent = 'Load'; loadBtn.className = 'theme-preset-load';
    loadBtn.addEventListener('click', () => loadThemePreset(idx));
    const delBtn = document.createElement('button'); delBtn.title = 'Delete'; delBtn.className = 'theme-preset-delete';
    delBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M3 6h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 11v6M14 11v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    delBtn.addEventListener('click', () => deleteThemePreset(idx));
    actions.appendChild(loadBtn); actions.appendChild(delBtn);
    row.appendChild(swatch); row.appendChild(label); row.appendChild(actions);
    container.appendChild(row);
  });
}

function hslToHex(h, s, l) {
  h = ((h % 360) + 360) % 360; s = Math.min(100, Math.max(0, s)); l = Math.min(100, Math.max(0, l));
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    return Math.round(Math.min(255, Math.max(0, color * 255))).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToHsl(hex) {
  if (!hex || !/^#[0-9a-fA-F]{6}$/.test(hex)) return [0, 0, 100];
  let r = parseInt(hex.slice(1,3),16)/255, g = parseInt(hex.slice(3,5),16)/255, b = parseInt(hex.slice(5,7),16)/255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b);
  let h, s, l = (max+min)/2;
  if (max === min) { h = s = 0; } else {
    const d = max - min;
    s = l > 0.5 ? d/(2-max-min) : d/(max+min);
    switch(max) {
      case r: h = ((g-b)/d + (g<b?6:0))/6; break;
      case g: h = ((b-r)/d + 2)/6; break;
      default: h = ((r-g)/d + 4)/6;
    }
  }
  return [h*360, s*100, l*100];
}

function shiftL(hex, delta) {
  try {
    if (!hex || !/^#[0-9a-fA-F]{6}$/.test(hex)) return hex;
    const [h, s, l] = hexToHsl(hex);
    return hslToHex(h, s, Math.min(100, Math.max(0, l + delta)));
  } catch (e) { return hex; }
}

function randomiseTheme() {
  const huePresets = [0,15,30,45,60,80,100,120,145,160,180,195,210,225,240,255,270,285,300,315,330,345];
  const hue = huePresets[Math.floor(Math.random() * huePresets.length)] + Math.floor(Math.random() * 14);
  const satPresets = [75,80,85,90,95,100];
  const sat = satPresets[Math.floor(Math.random() * satPresets.length)];
  const _bv = typeof window._getRandomiseBrightness === 'function' ? window._getRandomiseBrightness() : 50;
  let isDark;
  if (_bv < 35)       { isDark = true; }
  else if (_bv > 65)  { isDark = false; }
  else                { isDark = Math.random() < 0.4; }
  const _bvClamped = Math.min(100, Math.max(0, _bv));
  const surfaceHue = Math.random() < 0.6 ? hue : (Math.random() * 360);

  let surfaceL, accentL, accentSat;
  if (isDark) {
    const t = _bvClamped / 34;
    surfaceL = Math.round(3 + t * 17);
    accentL = Math.round(60 + t * 12);
    accentSat = Math.round(sat * (0.6 + t * 0.4));
  } else {
    const t = (_bvClamped - 66) / 34;
    surfaceL = Math.round(88 + t * 11);
    accentL = Math.round(38 + t * 12);
    accentSat = sat;
  }
  const accent = hslToHex(surfaceHue, accentSat, accentL);

  const surfaceSat = isDark ? 45 + Math.random()*40 : 40 + Math.random()*45;
  const surface = hslToHex(surfaceHue, surfaceSat, surfaceL);
  const bgLDelta = isDark ? -(3+Math.floor(Math.random()*5)) : -(3+Math.floor(Math.random()*6));
  const background = hslToHex(surfaceHue, surfaceSat+4, Math.max(0, surfaceL+bgLDelta));
  const panelL = isDark ? surfaceL+4 : surfaceL-2;
  const panel = hslToHex(surfaceHue, surfaceSat+2, Math.min(100, Math.max(0, panelL)));
  const input = shiftL(surface, isDark ? 4 : 1);
  const borderL = isDark ? 35+Math.floor(Math.random()*15) : 45+Math.floor(Math.random()*20);
  const borderSat = 50+Math.floor(Math.random()*30);
  const borderColor = hslToHex(surfaceHue, borderSat, borderL);
  const textL = isDark ? 88 + Math.floor(Math.random() * 8) : 8 + Math.floor(Math.random() * 8);
  const textSat = isDark ? 18 + Math.floor(Math.random() * 22) : 20 + Math.floor(Math.random() * 25);
  const text = hslToHex(surfaceHue, textSat, textL);
  const tabActiveBg = hslToHex(surfaceHue, surfaceSat, isDark ? surfaceL+8 : surfaceL-4);
  const tabInactiveBg = hslToHex(surfaceHue, surfaceSat-5, isDark ? surfaceL+4 : surfaceL-1);
  const gradientShift = 8 + Math.floor(Math.random() * 8);
  const gradientSurface = hslToHex(surfaceHue, surfaceSat+8, Math.max(0, surfaceL + (isDark ? -gradientShift : gradientShift)));
  const gradientAccent = shiftL(accent, isDark ? gradientShift : -gradientShift);
  const gradientTabActive = shiftL(tabActiveBg, isDark ? gradientShift : -gradientShift);
  const gradientTabInactive = shiftL(tabInactiveBg, isDark ? gradientShift*0.6 : -gradientShift*0.6);
  const themeSurfacePatternColor = hslToHex(surfaceHue, Math.min(100, surfaceSat+15), isDark ? surfaceL+20 : surfaceL-20);

  settings.theme = {
    ...settings.theme,
    accent,
    surface,
    background,
    panel,
    input,
    borderColor,
    tabActiveBg,
    tabInactiveBg,
    tabActiveText: text,
    tabInactiveText: text,
    settingsFontColor: text,
    text,
    gradientAccent,
    gradientSurface,
    gradientTabActive,
    gradientTabInactive,
    surfacePatternColor: themeSurfacePatternColor
  };

  applyTheme(settings.theme);
  applyTabPosition(settings.theme.tabPosition);
  saveSettings();
  populateSettingsUI();
}

function populateSettingsUI() {
  keybindAction.value = settings.keybinds.tabMiddleClick;
  shortcutOpenSearch.value = settings.keybinds.openSearch;
  shortcutMuteTab.value = settings.keybinds.muteTab;
  shortcutRefreshTab.value = settings.keybinds.refreshTab;
  if (shortcutSwitchForward) shortcutSwitchForward.value = settings.keybinds.switchForward;
  if (shortcutSwitchBack) shortcutSwitchBack.value = settings.keybinds.switchBack;
  if (shortcutNewTab) shortcutNewTab.value = settings.keybinds.newTab;
  if (shortcutToggleTabs) shortcutToggleTabs.value = settings.keybinds.toggleTabs;
  if (shortcutSplitScreen) shortcutSplitScreen.value = settings.keybinds.splitScreen || '';
  if (shortcutUndoTab) shortcutUndoTab.value = settings.keybinds.undoTab || '';
  if (shortcutRedoTab) shortcutRedoTab.value = settings.keybinds.redoTab || '';
  if (shortcutFindInPage) shortcutFindInPage.value = settings.keybinds.findInPage || 'Control+F';
  populateWebsiteShortcutsUI();
  cookieEnabled.checked = settings.privacy.cookiesEnabled;
  cookieLevel.value = settings.privacy.cookieLevel;
  populateCookieExceptionsUI();
  if (shortcutReopenClosed) shortcutReopenClosed.value = settings.keybinds.reopenClosed || '';
  themeAccent.value = settings.theme.accent;
  themeSurface.value = settings.theme.surface;
  themeBackground.value = settings.theme.background;
  themeBorderColor.value = settings.theme.borderColor;
  themeBorderWidth.value = parseInt(settings.theme.borderWidth, 10);
  themeTabActiveBg.value = settings.theme.tabActiveBg;
  themeTabInactiveBg.value = settings.theme.tabInactiveBg;
  themeTabActiveText.value = settings.theme.tabActiveText;
  themeTabInactiveText.value = settings.theme.tabInactiveText;
  themeSettingsFontColor.value = settings.theme.settingsFontColor;
  themeGradient.checked = settings.theme.gradient;
  themeGradientAccent.value = settings.theme.gradientAccent;
  themeGradientSurface.value = settings.theme.gradientSurface;
  themeGradientTabActive.value = settings.theme.gradientTabActive;
  themeGradientTabInactive.value = settings.theme.gradientTabInactive;
  if (themeSurfacePattern) themeSurfacePattern.value = settings.theme.surfacePattern || 'none';
  if (themeSurfacePatternColor) themeSurfacePatternColor.value = settings.theme.surfacePatternColor || '#7c3aed';
  if (themeSurfacePatternOpacity) themeSurfacePatternOpacity.value = settings.theme.surfacePatternOpacity ?? 18;
  const isPattern = settings.theme.surfacePattern && settings.theme.surfacePattern !== 'none';
  if (surfacePatternColorControl) surfacePatternColorControl.classList.toggle('hidden', !isPattern);
  if (surfacePatternOpacityControl) surfacePatternOpacityControl.classList.toggle('hidden', !isPattern);
  if (themeInput) themeInput.value = settings.theme.input;
  if (tabPositionSelect) tabPositionSelect.value = settings.theme.tabPosition || 'top';
  if (verticalTabWidthInput) {
    const v = Math.min(30, Math.max(5, settings.theme.verticalTabWidth || 10));
    verticalTabWidthInput.value = v;
    const display = document.getElementById('vertical-tab-width-display');
    if (display) display.textContent = v;
  }
  const adblockToggle = document.getElementById('adblock-enabled');
  if (adblockToggle) adblockToggle.checked = settings.privacy.adBlockEnabled ?? true;
  updateAdBlockStatus();
  updateVerticalWidthVisibility();
  updateGradientControlsVisibility();
  privacyStatus.textContent = '';
  const engineSelect = document.getElementById('search-engine-select');
  if (engineSelect) engineSelect.value = settings.privacy.searchEngine || 'startpage';
}

function updateGradientControlsVisibility() {
  const visible = themeGradient && themeGradient.checked;
  themeGradientControls.forEach((control) => { control.classList.toggle('hidden', !visible); });
}

function updateVerticalWidthVisibility() {
  const control = document.getElementById('vertical-tab-width-control');
  if (!control) return;
  const _pos = tabPositionSelect ? tabPositionSelect.value : (settings.theme.tabPosition || 'top');
  control.style.display = (['left','right'].includes(_pos) ? 'block' : 'none');
}

function openSettings() {
  settingsModal.classList.add('open');
  settingsModal.setAttribute('aria-hidden', 'false');
  populateSettingsUI();
  renderThemePresets();
  startHistoryLiveUpdates();
}

function closeSettings() {
  settingsModal.classList.remove('open');
  settingsModal.setAttribute('aria-hidden', 'true');
  saveSettings();
  stopHistoryLiveUpdates();
}

function setSettingsTab(tabName) {
  settingsTabs.forEach((button) => { button.classList.toggle('active', button.dataset.tab === tabName); });
  settingsSections.forEach((section) => { section.classList.toggle('active', section.dataset.section === tabName); });
  if (tabName === 'history') renderHistorySection();
}

function hexToRgbString(color) {
  const c = anyColorToRgb(color);
  if (!c) return color;
  return `rgb(${c.r}, ${c.g}, ${c.b})`;
}

function normalizeColor(value) {
  if (!value) return '#000000';
  if (/^rgba?\(/i.test(value)) return value;
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value)) return value;
  const ctx = document.createElement('canvas').getContext('2d');
  ctx.fillStyle = value;
  return ctx.fillStyle || value;
}

function updateThemeFromUI() {
  settings.theme.accent          = normalizeColor(themeAccent.value);
  settings.theme.surface         = normalizeColor(themeSurface.value);
  settings.theme.background      = normalizeColor(themeBackground.value);
  settings.theme.borderColor     = normalizeColor(themeBorderColor.value);

  settings.theme.borderWidth     = `${parseInt(themeBorderWidth.value, 10) || 1}px`;

  settings.theme.tabActiveBg     = normalizeColor(themeTabActiveBg.value);
  settings.theme.tabInactiveBg   = normalizeColor(themeTabInactiveBg.value);
  settings.theme.tabActiveText   = normalizeColor(themeTabActiveText.value);
  settings.theme.tabInactiveText = normalizeColor(themeTabInactiveText.value);

  settings.theme.settingsFontColor = normalizeColor(themeSettingsFontColor.value);

  settings.theme.gradient        = themeGradient.checked;
  settings.theme.gradientAccent  = normalizeColor(themeGradientAccent.value);
  settings.theme.gradientSurface = normalizeColor(themeGradientSurface.value);
  settings.theme.gradientTabActive   = normalizeColor(themeGradientTabActive.value);
  settings.theme.gradientTabInactive = normalizeColor(themeGradientTabInactive.value);

  settings.theme.tabPosition = tabPositionSelect ? tabPositionSelect.value : 'top';

  settings.theme.surfacePattern = themeSurfacePattern ? themeSurfacePattern.value : 'none';

  settings.theme.surfacePatternColor =
    normalizeColor(themeSurfacePatternColor ? themeSurfacePatternColor.value : '#7c3aed');

  settings.theme.surfacePatternOpacity =
    themeSurfacePatternOpacity ? (parseInt(themeSurfacePatternOpacity.value, 10) || 18) : 18;

  settings.theme.input = normalizeColor(themeInput.value);

  if (verticalTabWidthInput) {
    const v = parseInt(verticalTabWidthInput.value, 10);
    settings.theme.verticalTabWidth =
      Number.isFinite(v) ? v : settings.theme.verticalTabWidth || 10;
  }

  applyTheme(settings.theme);
  applyTabPosition(settings.theme.tabPosition);
  updateVerticalWidthVisibility();
  updateSidebarWidth();
  saveSettings();
}

function updatePrivacyStatus(message) { privacyStatus.textContent = message; }

async function clearBrowserData(type) {
  if (type === 'all' || type === 'downloads-history') {
    settings.downloadsHistory = [];
    saveSettings();
    renderDownloadsList();
    updateDownloadsBadge();
    if (type === 'downloads-history') { updatePrivacyStatus('Download history cleared.'); return; }
  }
  if (type === 'all' || type === 'navigation-history') {
    settings.navigationHistory = [];
    saveSettings();
    const container = document.getElementById('history-list-container');
    if (container) renderHistorySection();
    if (type === 'navigation-history') { updatePrivacyStatus('Browsing history cleared.'); return; }
  }
  const result = await window.electronAPI.clearBrowserData(type);
  if (result && result.success) {
    updatePrivacyStatus(`${type.replace('-', ' ')} cleared successfully.`);
  } else {
    updatePrivacyStatus(`Could not clear ${type.replace('-', ' ')}.`);
  }
}

function renderHistorySection() {
  const container = document.getElementById('history-list-container');
  if (!container) return;
  const history = Array.isArray(settings.navigationHistory) ? settings.navigationHistory : [];
  if (!history.length) {
    container.innerHTML = '<p style="color:var(--muted);font-size:0.9rem;padding:8px 0;">No browsing history yet.</p>';
    return;
  }
  const groups = {};
  history.forEach(entry => {
    const d = new Date(entry.visitedAt);
    const key = d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    if (!groups[key]) groups[key] = [];
    groups[key].push(entry);
  });
  container.innerHTML = '';
  Object.entries(groups).forEach(([date, entries]) => {
    const dateHeader = document.createElement('div');
    dateHeader.style.cssText = 'font-size:0.78rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:0.06em;padding:12px 0 6px;border-bottom:var(--border-width) solid var(--border-color);margin-bottom:4px;';
    dateHeader.textContent = date;
    container.appendChild(dateHeader);
    entries.forEach(entry => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:7px 8px;border-radius:10px;cursor:pointer;transition:background 0.15s;';
      row.addEventListener('mouseenter', () => row.style.background = 'var(--button-hover)');
      row.addEventListener('mouseleave', () => row.style.background = '');
      const time = document.createElement('span');
      time.style.cssText = 'font-size:0.72rem;color:var(--muted);flex:0 0 44px;text-align:right;';
      time.textContent = new Date(entry.visitedAt).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
      const favicon = document.createElement('div');
      favicon.style.cssText = 'width:18px;height:18px;border-radius:4px;background:var(--accent-soft);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.6rem;font-weight:700;color:var(--accent);';
      try { favicon.textContent = new URL(entry.url).hostname.replace('www.', '')[0]?.toUpperCase() || '?'; } catch { favicon.textContent = '?'; }
      const info = document.createElement('div');
      info.style.cssText = 'flex:1 1 0;min-width:0;';
      const title = document.createElement('div');
      title.style.cssText = 'font-size:0.875rem;color:var(--settings-font-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';
      title.textContent = entry.title || entry.url;
      const url = document.createElement('div');
      url.style.cssText = 'font-size:0.72rem;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:1px;';
      url.textContent = entry.url;
      info.appendChild(title);
      info.appendChild(url);
      const del = document.createElement('button');
      del.style.cssText = 'width:24px;height:24px;border-radius:6px;border:var(--border-width) solid var(--border-color);background:transparent;color:var(--muted);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.15s,background 0.15s,border-color 0.15s,color 0.15s;flex-shrink:0;';
      del.innerHTML = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>';
      del.title = 'Remove this entry';
      row.addEventListener('mouseenter', () => del.style.opacity = '1');
      row.addEventListener('mouseleave', () => del.style.opacity = '0');
      del.addEventListener('mouseenter', () => { del.style.background = 'rgba(239,68,68,0.1)'; del.style.borderColor = 'rgba(239,68,68,0.4)'; del.style.color = 'rgb(239,68,68)'; });
      del.addEventListener('mouseleave', () => { del.style.background = 'transparent'; del.style.borderColor = 'var(--border-color)'; del.style.color = 'var(--muted)'; });
      del.addEventListener('click', e => {
        e.stopPropagation();
        const globalIdx = settings.navigationHistory.indexOf(entry);
        if (globalIdx > -1) { settings.navigationHistory.splice(globalIdx, 1); saveSettings(); renderHistorySection(); }
      });
      row.appendChild(time);
      row.appendChild(favicon);
      row.appendChild(info);
      row.appendChild(del);
      row.addEventListener('click', () => {
        const tab = tabs.find(t => t.id === activeTabId);
        if (tab && tab.webview) tab.webview.loadURL(entry.url);
        closeSettings();
      });
      container.appendChild(row);
    });
  });
}

function formatBytes(bytes) {
  if (!bytes || bytes <= 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

function formatDownloadSpeed(bytesPerSec) {
  return `${formatBytes(bytesPerSec)}/s`;
}

function formatTimestamp(ts) {
  if (!ts) return '';
  try {
    const d = new Date(ts);
    const now = new Date();
    const diffMs = now - d;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return d.toLocaleDateString();
  } catch (e) { return ''; }
}

function getFileExtension(filename) {
  if (!filename) return '';
  const parts = filename.split('.');
  return parts.length > 1 ? parts[parts.length - 1].toUpperCase() : '';
}

function getFileTypeColor(filename) {
  const ext = getFileExtension(filename).toLowerCase();
  const map = {
    pdf: '#e53e3e', doc: '#2b6cb0', docx: '#2b6cb0', xls: '#276749', xlsx: '#276749',
    ppt: '#c05621', pptx: '#c05621', zip: '#744210', rar: '#744210', '7z': '#744210',
    mp4: '#553c9a', mkv: '#553c9a', avi: '#553c9a', mov: '#553c9a',
    mp3: '#b7791f', wav: '#b7791f', flac: '#b7791f',
    jpg: '#2c7a7b', jpeg: '#2c7a7b', png: '#2c7a7b', gif: '#2c7a7b', webp: '#2c7a7b',
    exe: '#c53030', dmg: '#c53030', pkg: '#c53030',
    js: '#d69e2e', ts: '#3182ce', py: '#3182ce', html: '#e53e3e', css: '#553c9a',
  };
  return map[ext] || '#718096';
}

function getDownloadStatusIcon(state) {
  switch (state) {
    case 'progressing': return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
    case 'completed': return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    case 'cancelled': return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
    case 'interrupted': return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 9v4M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/></svg>`;
    default: return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/></svg>`;
  }
}

function openDownloadsModal() {
  if (!downloadsModal) return;
  downloadsModal.classList.add('open');
  downloadsModal.setAttribute('aria-hidden', 'false');
  renderDownloadsList();
}

function closeDownloadsModal() {
  if (!downloadsModal) return;
  downloadsModal.classList.remove('open');
  downloadsModal.setAttribute('aria-hidden', 'true');
}

function setDownloadsFilter(filter) {
  _downloadsFilter = filter;
  document.querySelectorAll('.dl-filter-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  renderDownloadsList();
}

let historyRefreshInterval = null;

function startHistoryLiveUpdates() {
  stopHistoryLiveUpdates();

  historyRefreshInterval = setInterval(() => {
    const historySection = document.getElementById('history-list-container');

    if (!historySection) return;

    renderHistorySection();
  }, 1000);
}

function stopHistoryLiveUpdates() {
  if (historyRefreshInterval) {
    clearInterval(historyRefreshInterval);
    historyRefreshInterval = null;
  }
}

function getAllDownloads() {
  const active = Array.from(activeDownloads.values());
  const history = Array.isArray(settings.downloadsHistory) ? settings.downloadsHistory : [];
  return [...active, ...history];
}

function getFilteredDownloads() {
  const all = getAllDownloads();
  switch (_downloadsFilter) {
    case 'active': return all.filter((d) => d.state === 'progressing' || d.state === 'paused');
    case 'completed': return all.filter((d) => d.state === 'completed');
    case 'failed': return all.filter((d) => d.state === 'cancelled' || d.state === 'interrupted');
    default: return all;
  }
}

function renderDownloadsList() {
  if (!downloadsList || !downloadsEmptyState) return;
  const items = getFilteredDownloads();
  const all = getAllDownloads();

  const active = all.filter((d) => d.state === 'progressing').length;
  const completed = all.filter((d) => d.state === 'completed').length;
  if (downloadsHeaderSummary) {
    if (active > 0) {
      downloadsHeaderSummary.textContent = `${active} active · ${all.length} total`;
    } else {
      downloadsHeaderSummary.textContent = all.length ? `${all.length} download${all.length !== 1 ? 's' : ''}` : '';
    }
  }

  if (!items.length) {
    downloadsEmptyState.style.display = 'flex';
    downloadsList.innerHTML = '';
    if (downloadsEmptyState) {
      downloadsEmptyState.querySelector('p').textContent =
        _downloadsFilter === 'all' ? 'No downloads yet' : `No ${_downloadsFilter} downloads`;
    }
    return;
  }

  downloadsEmptyState.style.display = 'none';
  downloadsList.innerHTML = '';

  items.forEach((dl) => {
    const el = createDownloadItemElement(dl);
    downloadsList.appendChild(el);
  });
}

function createDownloadItemElement(dl) {
  const item = document.createElement('div');
  item.className = `dl-item dl-item--${dl.state || 'unknown'}`;
  item.dataset.dlId = dl.id;

  const isActive = dl.state === 'progressing';
  const isPaused = dl.state === 'paused';
  const isCompleted = dl.state === 'completed';
  const isFailed = dl.state === 'cancelled' || dl.state === 'interrupted';
  const percent = (dl.totalBytes > 0) ? Math.round((dl.receivedBytes / dl.totalBytes) * 100) : (isCompleted ? 100 : 0);
  const ext = getFileExtension(dl.filename);
  const typeColor = getFileTypeColor(dl.filename);

  let statusText = '';
  if (isActive) {
    const received = formatBytes(dl.receivedBytes);
    const total = dl.totalBytes > 0 ? ` / ${formatBytes(dl.totalBytes)}` : '';
    const speed = dl.speed ? ` · ${formatDownloadSpeed(dl.speed)}` : '';
    statusText = `${percent}%  ${received}${total}${speed}`;
  } else if (isCompleted) {
    statusText = dl.totalBytes > 0 ? formatBytes(dl.totalBytes) : (dl.receivedBytes > 0 ? formatBytes(dl.receivedBytes) : 'Completed');
  } else if (dl.state === 'cancelled') {
    statusText = 'Cancelled';
  } else if (dl.state === 'interrupted') {
    statusText = 'Failed';
  } else if (isPaused) {
    statusText = `Paused · ${percent}%`;
  }

  item.innerHTML = `
    <div class="dl-icon" style="background: ${typeColor}22; color: ${typeColor}">
      <span class="dl-ext">${ext || '?'}</span>
    </div>
    <div class="dl-info">
      <div class="dl-filename" title="${dl.savePath || dl.filename || ''}">${dl.filename || 'Unknown file'}</div>
      <div class="dl-meta">
        <span class="dl-status-icon dl-status--${dl.state}">${getDownloadStatusIcon(dl.state)}</span>
        <span class="dl-status-text">${statusText}</span>
        ${dl.startedAt ? `<span class="dl-timestamp">${formatTimestamp(dl.startedAt)}</span>` : ''}
      </div>
      ${isActive || isPaused ? `
        <div class="dl-progress-track">
          <div class="dl-progress-fill" style="width: ${percent}%"></div>
        </div>
      ` : ''}
    </div>
    <div class="dl-actions">
      ${isActive ? `
        <button class="dl-btn dl-btn--cancel" data-action="cancel" data-id="${dl.id}" title="Cancel download">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
        </button>
      ` : ''}
      ${isCompleted && dl.savePath ? `
        <button class="dl-btn dl-btn--open-folder" data-action="open-folder" data-path="${dl.savePath}" title="Show in folder">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
        </button>
        <button class="dl-btn dl-btn--open-file" data-action="open-file" data-path="${dl.savePath}" title="Open file">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="1.8"/><path d="M9 12h6M12 9l3 3-3 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      ` : ''}
      ${!isActive ? `
        <button class="dl-btn dl-btn--remove" data-action="remove" data-id="${dl.id}" title="Remove from list">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      ` : ''}
    </div>
  `;

  item.querySelectorAll('[data-action]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = btn.dataset.action;
      const id = btn.dataset.id;
      const path = btn.dataset.path;
      handleDownloadAction(action, id, path);
    });
  });

  return item;
}

function handleDownloadAction(action, id, path) {
  const dl = [...activeDownloads.values(), ...(settings.downloadsHistory || [])]
  .find((d) => d.id === id);
  switch (action) {
    case 'cancel':
      if (window.electronAPI && window.electronAPI.cancelDownload) {
        window.electronAPI.cancelDownload(id);
      }
      if (activeDownloads.has(id)) {
        const dl = activeDownloads.get(id);
        dl.state = 'cancelled';
        archiveDownload(dl);
        activeDownloads.delete(id);
        renderDownloadsList();
        updateDownloadsBadge();
      }
      break;

    case 'open-folder':
      if (path && window.electronAPI && window.electronAPI.showItemInFolder) {
        window.electronAPI.showItemInFolder(path);
      }
      break;

    case 'open-file':
      if (path && window.electronAPI && window.electronAPI.openFile) {
        window.electronAPI.openFile(path);
      }
      break;

    case 'remove':
      if (dl && dl.savePath && window.electronAPI && window.electronAPI.deleteDownloadFile) {
        window.electronAPI.deleteDownloadFile(dl.savePath);
      }
      removeDownloadFromHistory(id);
      renderDownloadsList();
      updateDownloadsBadge();
      break;
  }
}

function archiveDownload(dl) {
  if (!Array.isArray(settings.downloadsHistory)) settings.downloadsHistory = [];
  const existingIdx = settings.downloadsHistory.findIndex((d) => d.id === dl.id);
  const record = {
    id: dl.id,
    filename: dl.filename,
    url: dl.url,
    savePath: dl.savePath,
    totalBytes: dl.totalBytes,
    receivedBytes: dl.receivedBytes,
    state: dl.state,
    startedAt: dl.startedAt,
    completedAt: dl.completedAt || Date.now()
  };
  if (existingIdx >= 0) {
    settings.downloadsHistory[existingIdx] = record;
  } else {
    settings.downloadsHistory.unshift(record);
    if (settings.downloadsHistory.length > 500) settings.downloadsHistory.length = 500;
  }
  saveSettings();
}

function removeDownloadFromHistory(id) {
  if (!Array.isArray(settings.downloadsHistory)) return;
  settings.downloadsHistory = settings.downloadsHistory.filter((d) => d.id !== id);
  saveSettings();
}

function updateDownloadsBadge() {
  if (!downloadsBadge) return;
  const activeCount = activeDownloads.size;
  if (activeCount > 0) {
    downloadsBadge.textContent = activeCount > 9 ? '9+' : String(activeCount);
    downloadsBadge.style.display = 'flex';
  } else {
    downloadsBadge.style.display = 'none';
  }
}

function clearCompletedDownloads() {
  if (!Array.isArray(settings.downloadsHistory)) return;
  settings.downloadsHistory = settings.downloadsHistory.filter((d) => d.state !== 'completed');
  saveSettings();
  renderDownloadsList();
  updateDownloadsBadge();
}

if (window.electronAPI) {
  if (window.electronAPI.onDownloadStarted) {
    window.electronAPI.onDownloadStarted((data) => {
      const dl = {
        id: data.id,
        filename: data.filename || data.savePath?.split(/[\\/]/).pop() || 'Unknown',
        url: data.url || '',
        savePath: data.savePath || '',
        receivedBytes: 0,
        totalBytes: data.totalBytes || 0,
        state: 'progressing',
        startedAt: Date.now(),
        speed: 0
      };
      activeDownloads.set(data.id, dl);
      updateDownloadsBadge();
      if (downloadsModal && downloadsModal.classList.contains('open')) renderDownloadsList();
    });
  }

  if (window.electronAPI.onDownloadProgress) {
    window.electronAPI.onDownloadProgress((data) => {
      if (!activeDownloads.has(data.id)) return;
      const dl = activeDownloads.get(data.id);
      dl.receivedBytes = data.receivedBytes || dl.receivedBytes;
      dl.totalBytes = data.totalBytes || dl.totalBytes;
      dl.speed = data.speed || 0;
      if (downloadsModal && downloadsModal.classList.contains('open')) {
        const el = downloadsList.querySelector(`[data-dl-id="${data.id}"]`);
        if (el) {
          const percent = dl.totalBytes > 0 ? Math.round((dl.receivedBytes / dl.totalBytes) * 100) : 0;
          const fill = el.querySelector('.dl-progress-fill');
          if (fill) fill.style.width = `${percent}%`;
          const statusText = el.querySelector('.dl-status-text');
          if (statusText) {
            const received = formatBytes(dl.receivedBytes);
            const total = dl.totalBytes > 0 ? ` / ${formatBytes(dl.totalBytes)}` : '';
            const speed = dl.speed ? ` · ${formatDownloadSpeed(dl.speed)}` : '';
            statusText.textContent = `${percent}%  ${received}${total}${speed}`;
          }
        } else {
          renderDownloadsList();
        }
      }
    });
  }

  if (window.electronAPI.onDownloadCompleted) {
    window.electronAPI.onDownloadCompleted((data) => {
      const dl = activeDownloads.get(data.id) || {};
      const completed = {
        ...dl,
        id: data.id,
        savePath: data.savePath || dl.savePath || '',
        totalBytes: data.totalBytes || dl.totalBytes || 0,
        receivedBytes: data.totalBytes || dl.totalBytes || dl.receivedBytes || 0,
        state: 'completed',
        completedAt: Date.now()
      };
      activeDownloads.delete(data.id);
      archiveDownload(completed);
      updateDownloadsBadge();
      if (downloadsModal && downloadsModal.classList.contains('open')) renderDownloadsList();
    });
  }

  if (window.electronAPI.onDownloadFailed) {
    window.electronAPI.onDownloadFailed((data) => {
      const dl = activeDownloads.get(data.id) || {};
      const failed = {
        ...dl,
        id: data.id,
        state: data.state || 'interrupted',
        completedAt: Date.now()
      };
      activeDownloads.delete(data.id);
      archiveDownload(failed);
      updateDownloadsBadge();
      if (downloadsModal && downloadsModal.classList.contains('open')) renderDownloadsList();
    });
  }
}

let tabs = [];
const _tabDragState = {
  draggingId: null,
  startX: 0,
  startY: 0,
  hasMoved: false,
  mouseUpHandler: null,
  mouseMoveHandler: null,
  cursorHandler: null,
  pendingInsertBeforeId: null,
  pendingInsertAfterId: null,
  leftWindow: false,
};
let activeTabId = null;
let splitState = null;
let splitDivider = null;
let splitLeftPercent = 50;

function createSplitDivider() {
  if (splitDivider) return;
  splitDivider = document.createElement('div');
  splitDivider.className = 'split-divider';
  splitDivider.setAttribute('aria-label', 'Drag to resize split panes');
  splitDivider.setAttribute('role', 'separator');

  const grip = document.createElement('div');
  grip.className = 'split-divider-grip';
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('div');
    dot.className = 'split-divider-dot';
    grip.appendChild(dot);
  }
  splitDivider.appendChild(grip);

  const svgNS = 'http://www.w3.org/2000/svg';
  const W = 24, H = 12, R = 12;

  function makeCorner(isTop) {
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', W * 2);
    svg.setAttribute('height', H * 2);
    svg.setAttribute('viewBox', `0 0 ${W * 2} ${H * 2}`);
    svg.style.cssText = [
      'position:absolute',
      `${isTop ? 'top' : 'bottom'}:0`,
      'left:50%',
      'transform:translateX(-50%)',
      'pointer-events:none',
      'display:block',
      'overflow:visible',
    ].join(';');

    const defs = document.createElementNS(svgNS, 'defs');
    const grad = document.createElementNS(svgNS, 'linearGradient');
    grad.setAttribute('id', `scg-${isTop ? 'top' : 'bot'}`);
    grad.setAttribute('gradientUnits', 'userSpaceOnUse');
    grad.setAttribute('x1', '0');
    grad.setAttribute('y1', isTop ? '0' : String(H * 2));
    grad.setAttribute('x2', '0');
    grad.setAttribute('y2', isTop ? String(H * 2) : '0');

    const stop1 = document.createElementNS(svgNS, 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', 'var(--shell-bg-from, var(--surface))');
    const stop2 = document.createElementNS(svgNS, 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', 'var(--shell-bg-to, var(--surface))');

    grad.appendChild(stop1);
    grad.appendChild(stop2);
    defs.appendChild(grad);
    svg.appendChild(defs);

    const R = H;
    const tlPath = document.createElementNS(svgNS, 'path');
    const trPath = document.createElementNS(svgNS, 'path');

    if (isTop) {
      tlPath.setAttribute('d', `M${W-R-3},0 L${W-3},0 L${W-3},${R} Q${W-3},0 ${W-R-3},0 Z`);
      trPath.setAttribute('d', `M${W+3},0 L${W+R+3},0 Q${W+3},0 ${W+3},${R} Z`);
    } else {
      tlPath.setAttribute('d', `M${W-R-3},${H*2} L${W-3},${H*2} L${W-3},${H*2-R} Q${W-3},${H*2} ${W-R-3},${H*2} Z`);
      trPath.setAttribute('d', `M${W+3},${H*2} L${W+R+3},${H*2} Q${W+3},${H*2} ${W+3},${H*2-R} Z`);
    }

    [tlPath, trPath].forEach(p => {
      p.setAttribute('fill', `url(#scg-${isTop ? 'top' : 'bot'})`);
      svg.appendChild(p);
    });

    return svg;
  }
  splitDivider.appendChild(makeCorner(true));
  splitDivider.appendChild(makeCorner(false));

  setupDividerDrag(splitDivider);
  webviewContainer.appendChild(splitDivider);
}

function removeSplitDivider() {
  if (splitDivider) { splitDivider.remove(); splitDivider = null; }
  splitLeftPercent = 50;
  tabs.forEach((t) => { t.webview.style.flex = ''; t.webview.style.width = ''; });
}

function applySplitPaneWidths() {
  if (!isSplitActive()) return;
  const left = tabs.find((t) => t.id === splitState.leftId);
  const right = tabs.find((t) => t.id === splitState.rightId);
  if (left) {
    left.webview.style.flex = `0 0 ${splitLeftPercent}%`;
    left.webview.style.width = '';
  }
  if (right) {
    right.webview.style.flex = `1 1 auto`;
    right.webview.style.width = '';
  }
  if (splitDivider) splitDivider.style.left = `${splitLeftPercent}%`;
}

function setupDividerDrag(divider) {
  let dragging = false, startX = 0, startPercent = 50;
  function disableWebviewPointerEvents() { tabs.forEach((t) => { t.webview.style.pointerEvents = 'none'; }); }
  function enableWebviewPointerEvents() { tabs.forEach((t) => { t.webview.style.pointerEvents = ''; }); }
  divider.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    dragging = true; startX = e.clientX; startPercent = splitLeftPercent;
    divider.classList.add('dragging'); document.body.style.cursor = 'col-resize'; document.body.style.userSelect = 'none';
    disableWebviewPointerEvents(); e.preventDefault();
  });
  document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    const containerRect = webviewContainer.getBoundingClientRect();
    const containerWidth = containerRect.width;
    if (containerWidth <= 0) return;
    const deltaX = e.clientX - startX;
    const deltaPercent = (deltaX / containerWidth) * 100;
    splitLeftPercent = Math.min(85, Math.max(15, startPercent + deltaPercent));
    applySplitPaneWidths();
  });
  document.addEventListener('mouseup', (e) => {
    if (!dragging) return;
    dragging = false; divider.classList.remove('dragging'); document.body.style.cursor = ''; document.body.style.userSelect = '';
    enableWebviewPointerEvents();
  });
  divider.addEventListener('touchstart', (e) => {
    const touch = e.touches[0]; dragging = true; startX = touch.clientX; startPercent = splitLeftPercent;
    divider.classList.add('dragging'); disableWebviewPointerEvents(); e.preventDefault();
  }, { passive: false });
  document.addEventListener('touchmove', (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    const containerRect = webviewContainer.getBoundingClientRect();
    const containerWidth = containerRect.width;
    if (containerWidth <= 0) return;
    splitLeftPercent = Math.min(85, Math.max(15, startPercent + ((touch.clientX - startX) / containerWidth) * 100));
    applySplitPaneWidths();
  }, { passive: true });
  document.addEventListener('touchend', () => {
    if (!dragging) return; dragging = false; divider.classList.remove('dragging'); enableWebviewPointerEvents();
  });
}

(function injectSplitDividerStyles() {
  const style = document.createElement('style');
  style.textContent = `
      .split-divider {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 8px;
        transform: translateX(-50%);
        cursor: col-resize;
        z-index: 100;
        background: var(--shell-bg, var(--surface));
        border-radius: 0;
      }
      .split-divider::before { content: none; }
      .split-divider::after { content: none; }
      .split-divider-grip { display:none; }
      .split-divider-dot { display:none; }
      #webview-container.split { position:relative; }
    `;
    document.head.appendChild(style);
})();

function isSplitActive() { return splitState && splitState.leftId && splitState.rightId; }

function enterSplit(leftId, rightId) {
  const left = tabs.find((t) => t.id === leftId); const right = tabs.find((t) => t.id === rightId);
  if (!left || !right) return;
  splitState = { leftId, rightId }; splitLeftPercent = 50;
  left.button.classList.add('split-left'); right.button.style.display = 'none';
  updateSplitTabLabels(); applySplitView();
}

function updateSplitTabLabels() {
  if (!splitState) return;
  const left = tabs.find((t) => t.id === splitState.leftId); const right = tabs.find((t) => t.id === splitState.rightId);
  if (left) left.tabLabel.textContent = `${left.title} | ${right ? right.title : ''}`;
}

function clearSplitTabLabels() {
  if (!splitState) return;
  const left = tabs.find((t) => t.id === splitState.leftId); const right = tabs.find((t) => t.id === splitState.rightId);
  if (left) { left.tabLabel.textContent = left.title; left.button.classList.remove('split-left'); }
  if (right) right.button.style.display = '';
}

function suspendSplitButtons() { if (!splitState) return; const right = tabs.find((t) => t.id === splitState.rightId); if (right) right.button.style.display = ''; }
function resumeSplitButtons() { if (!splitState) return; const right = tabs.find((t) => t.id === splitState.rightId); if (right) right.button.style.display = 'none'; }

function applySplitView() {
  if (!isSplitActive()) return;
  resumeSplitButtons();
  webviewContainer.classList.add('split');
  webviewContainer.style.gap = '0';
  tabs.forEach((t) => { t.webview.style.display = 'none'; t.webview.classList.remove('split-pane'); t.webview.style.flex = ''; t.webview.style.width = ''; });
  const left = tabs.find((t) => t.id === splitState.leftId); const right = tabs.find((t) => t.id === splitState.rightId);
  if (left) {
    left.webview.style.display = 'flex';
    left.webview.style.pointerEvents = 'auto';
    left.webview.classList.add('split-pane');
  }
  if (right) {
    right.webview.style.display = 'flex';
    right.webview.style.pointerEvents = 'auto';
    right.webview.classList.add('split-pane');
  }
 [left, right].forEach((pane) => {
    if (!pane) return;
    pane.webview.addEventListener('focus', () => { activeTabId = pane.id; addressBar.value = pane.url; updateNavigationState(); tabs.forEach((t) => t.button.classList.toggle('active', t.id === pane.id)); });
    pane.webview.addEventListener('mousedown', () => { activeTabId = pane.id; addressBar.value = pane.url; updateNavigationState(); });
  });
  [left, right].filter(Boolean).forEach((pane) => {
    pane.webview.removeEventListener('mousedown', pane._splitFocusHandler);
    pane._splitFocusHandler = () => { activeTabId = pane.id; addressBar.value = pane.url; updateNavigationState(); };
    pane.webview.addEventListener('mousedown', pane._splitFocusHandler);
  });
  createSplitDivider(); applySplitPaneWidths();
  const focusId = (activeTabId === splitState.leftId || activeTabId === splitState.rightId) ? activeTabId : splitState.leftId;
  activeTabId = focusId;
  tabs.forEach((t) => t.button.classList.toggle('active', t.id === focusId));
  const focusTab = tabs.find((t) => t.id === focusId);
  if (focusTab) addressBar.value = focusTab.url;
  updateNavigationState(); refreshVideoPopoutButtonState(); startVideoPopoutPolling();
}

function exitSplit() {
  if (!isSplitActive()) return;
  clearSplitTabLabels(); splitState = null; removeSplitDivider();
  webviewContainer.classList.remove('split');
  tabs.forEach((t) => { t.webview.classList.remove('split-pane'); t.webview.style.display = ''; t.webview.style.flex = ''; t.webview.style.width = ''; t.webview.style.pointerEvents = ''; });
  const idToRestore = tabs.find((t) => t.id === activeTabId) ? activeTabId : (tabs[0] && tabs[0].id);
  if (idToRestore) activateTab(idToRestore);
  webviewContainer.style.gap = '';
}

function splitCurrentWithNext() {
  if (!tabs.length) return;
  const idx = tabs.findIndex((t) => t.id === activeTabId);
  if (idx === -1) return;
  const next = tabs[idx + 1];
  if (!next) return;
  if (isSplitActive()) { exitSplit(); return; }
  enterSplit(activeTabId, next.id);
}

function normalizeUrl(input) {
  const raw = input.trim();
  if (!raw) return getDefaultHome();
  const hasScheme = /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(raw);
  const looksLikeHost = /\.[a-zA-Z]{2,}|localhost/.test(raw);
  const hasSpace = /\s/.test(raw);
  if (hasScheme) return raw;
  if (looksLikeHost && !hasSpace) return `https://${raw}`;
  return `${getSearchEngine().search}${encodeURIComponent(raw)}`;
}

function getHost(url) {
  try { return new URL(url).hostname; } catch { return ''; }
}

function createTab(url = getDefaultHome(), activate = true) {
  const id = `tab-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
  const tabButton = document.createElement('button');
  tabButton.className = 'tab'; tabButton.dataset.tabId = id;
  const label = document.createElement('span'); label.className = 'tab-label'; label.textContent = 'New Tab';
  tabButton.appendChild(label);
  const closeButton = document.createElement('span'); closeButton.className = 'tab-close'; closeButton.title = 'Close tab';
  closeButton.innerHTML = '<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 1l7 7M8 1L1 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
  closeButton.addEventListener('click', (event) => { event.stopPropagation(); closeTab(id); });
  tabButton.appendChild(closeButton);

  // ===================== TAB DRAG: REORDER + TEAR-OFF + CROSS-WINDOW =====================
  tabButton.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    if (e.target.closest('.tab-close')) return;

    _tabDragState.draggingId = id;
    _tabDragState.startX = e.clientX;
    _tabDragState.startY = e.clientY;
    _tabDragState.hasMoved = false;
    _tabDragState.leftWindow = false;
    _tabDragState.pendingInsertBeforeId = null;
    _tabDragState.pendingInsertAfterId = null;

    // Clean up any stale handlers
    if (_tabDragState.mouseMoveHandler) window.removeEventListener('mousemove', _tabDragState.mouseMoveHandler);
    if (_tabDragState.mouseUpHandler)   window.removeEventListener('mouseup',   _tabDragState.mouseUpHandler);
    if (_tabDragState.cursorHandler)    window.removeEventListener('tab-drag-cursor', _tabDragState.cursorHandler);

    // ── MOUSEMOVE: reorder indicators while inside window ────────────────
    _tabDragState.mouseMoveHandler = (moveEvt) => {
      const dx = moveEvt.clientX - _tabDragState.startX;
      const dy = moveEvt.clientY - _tabDragState.startY;
      if (!_tabDragState.hasMoved && Math.hypot(dx, dy) < 6) return;

      if (!_tabDragState.hasMoved) {
        _tabDragState.hasMoved = true;
        // Start main-process cursor polling so we can detect leaving the window
        window.electronAPI.startTabDrag();
      }

      tabButton.classList.add('tab-dragging');

      // Clear all indicators
      const allTabBtns = Array.from(tabStrip.querySelectorAll('.tab:not(.new-tab)'));
      allTabBtns.forEach(btn => btn.classList.remove('tab-drag-over-left', 'tab-drag-over-right'));
      _tabDragState.pendingInsertBeforeId = null;
      _tabDragState.pendingInsertAfterId = null;

      for (const btn of allTabBtns) {
        if (btn === tabButton) continue;
        const rect = btn.getBoundingClientRect();
        if (moveEvt.clientX >= rect.left && moveEvt.clientX <= rect.right
            && moveEvt.clientY >= rect.top - 20 && moveEvt.clientY <= rect.bottom + 20) {
          const insertBefore = moveEvt.clientX < rect.left + rect.width / 2;
          btn.classList.add(insertBefore ? 'tab-drag-over-left' : 'tab-drag-over-right');
          if (insertBefore) {
            _tabDragState.pendingInsertBeforeId = btn.dataset.tabId;
          } else {
            _tabDragState.pendingInsertAfterId = btn.dataset.tabId;
          }
          break;
        }
      }
    };

    // ── OS CURSOR POLL: fires every 16ms from main process ──────────────
    // This fires even when the mouse is outside the window (unlike mousemove)
    _tabDragState.cursorHandler = async (cursorEvt) => {
      if (!_tabDragState.hasMoved) return;
      const { point, bounds } = cursorEvt.detail;

      const insideWindow =
        point.x >= bounds.x && point.x <= bounds.x + bounds.width &&
        point.y >= bounds.y && point.y <= bounds.y + bounds.height;

      if (!insideWindow) {
        _tabDragState.leftWindow = true;

        // Clear reorder indicators — we're outside the window now
        document.querySelectorAll('.tab').forEach(t =>
          t.classList.remove('tab-drag-over-left', 'tab-drag-over-right')
        );
        _tabDragState.pendingInsertBeforeId = null;
        _tabDragState.pendingInsertAfterId = null;
      }
    };

    // ── MOUSEUP: commit action ───────────────────────────────────────────
    // NOTE: when mouse is released outside the window, the browser won't fire
    // mouseup on `window`. We also listen via the cursor poll detecting a
    // button-up by checking if the cursor stopped moving with button released.
    // Simplest fix: also listen on `document` with capture, plus use a
    // visibility/blur-based fallback. But most reliably: once leftWindow is
    // true we watch for the NEXT mousemove inside to mean the button is up.
    // Actually the cleanest approach: use a global mouseup on `document` with
    // `capture: true` which fires before the webview swallows it, AND listen
    // for a synthetic mouseup dispatched when main detects button release.

    _tabDragState.mouseUpHandler = async (upEvt) => {
      // Stop the OS cursor poll
      await window.electronAPI.endTabDrag();

      window.removeEventListener('mousemove', _tabDragState.mouseMoveHandler);
      window.removeEventListener('mouseup',   _tabDragState.mouseUpHandler, { capture: true });
      window.removeEventListener('tab-drag-cursor', _tabDragState.cursorHandler);
      _tabDragState.mouseMoveHandler = null;
      _tabDragState.mouseUpHandler   = null;
      _tabDragState.cursorHandler    = null;

      tabButton.classList.remove('tab-dragging');
      document.querySelectorAll('.tab').forEach(t =>
        t.classList.remove('tab-drag-over-left', 'tab-drag-over-right')
      );

      if (!_tabDragState.hasMoved) {
        _tabDragState.draggingId = null;
        return;
      }

      const draggedId = _tabDragState.draggingId;
      _tabDragState.draggingId = null;
      const didLeaveWindow = _tabDragState.leftWindow;
      _tabDragState.leftWindow = false;

      // ── Commit reorder (only if released inside the window) ───────────
      const insertBeforeId = _tabDragState.pendingInsertBeforeId;
      const insertAfterId  = _tabDragState.pendingInsertAfterId;
      _tabDragState.pendingInsertBeforeId = null;
      _tabDragState.pendingInsertAfterId  = null;

      const targetId = insertBeforeId || insertAfterId;
      if (targetId && !didLeaveWindow) {
        const draggedIdx = tabs.findIndex(t => t.id === draggedId);
        const targetIdx  = tabs.findIndex(t => t.id === targetId);
        if (draggedIdx !== -1 && targetIdx !== -1) {
          const [draggedTab] = tabs.splice(draggedIdx, 1);
          const newTargetIdx = tabs.findIndex(t => t.id === targetId);
          const insertAt = insertBeforeId ? newTargetIdx : newTargetIdx + 1;
          tabs.splice(insertAt, 0, draggedTab);

          const targetBtn = tabStrip.querySelector(`.tab[data-tab-id="${targetId}"]`);
          if (targetBtn) {
            if (insertBeforeId) {
              tabStrip.insertBefore(tabButton, targetBtn);
            } else {
              tabStrip.insertBefore(tabButton, targetBtn.nextSibling);
            }
          }
        }
        return;
      }

      if (!didLeaveWindow) return; // Released inside, no reorder target — just a click/accidental drag

      // ── Released outside: check if over another app window or desktop ──
      const { point, bounds } = await window.electronAPI.getCursorScreenPosition();
      const otherWindows = await window.electronAPI.getAllWindows();

      const targetWindow = otherWindows.find(w =>
        point.x >= w.bounds.x && point.x <= w.bounds.x + w.bounds.width &&
        point.y >= w.bounds.y && point.y <= w.bounds.y + w.bounds.height
      );

      const tab = tabs.find(t => t.id === draggedId);
      if (!tab) return;

      if (targetWindow) {
        await window.electronAPI.moveTabToWindow({
          url: tab.url,
          title: tab.title,
          targetWindowId: targetWindow.id
        });
        if (tabs.length <= 1) {
          window.electronAPI.closeApp();
        } else {
          closeTab(draggedId);
        }
      } else {
        _tearOffTab(draggedId);
      }
    };

    window.addEventListener('mousemove', _tabDragState.mouseMoveHandler);
    // capture:true so this fires even if a child (webview) tries to swallow it
    window.addEventListener('mouseup', _tabDragState.mouseUpHandler, { capture: true });
    window.addEventListener('tab-drag-cursor', _tabDragState.cursorHandler);
  });
  // ===========================================================================

  tabButton.addEventListener('click', (event) => {
    if (event.target.closest('.tab-close')) return;
    if (_tabDragState.hasMoved) return;
    activateTab(id);
  });

  tabStrip.appendChild(tabButton);

  const webview = document.createElement('webview');
  webview.className = 'tab-webview'; webview.dataset.tabId = id;
  webview.setAttribute('src', url);
  webview.setAttribute('webpreferences', 'contextIsolation=yes,nodeIntegration=no,sandbox=yes,webSecurity=yes');
  webview.setAttribute('allowfullscreen', ''); webview.setAttribute('allowpopups', '');
  webview.style.display = 'none';
  webview.style.pointerEvents = 'none';
  webviewContainer.appendChild(webview);
  webview.addEventListener("new-window", (e) => {
    if (!e.url || e.url === 'about:blank') return;
    if (e.disposition === "background-tab") {
      createTab(e.url, false);
    } else if (e.disposition === "current-tab") {
      webview.loadURL(e.url);
    } else {
      createTab(e.url, true);
    }
  });
  try {
    webview.addEventListener('pointerenter', () => { lastPointerOverTabId = id; });
    webview.addEventListener('pointerleave', () => { if (lastPointerOverTabId === id) lastPointerOverTabId = null; });
  } catch (e) {}

  const tab = { id, url, title: 'New Tab', button: tabButton, tabLabel: label, webview };
  tabs.push(tab);

  webview.addEventListener('did-start-loading', () => { if (navReloadIcon) navReloadIcon.classList.add('spin'); });
  webview.addEventListener('did-stop-loading', () => {
    if (navReloadIcon) navReloadIcon.classList.remove('spin');
    if (tab.webview && tab.webview.getURL) { tab.url = tab.webview.getURL(); if (id === activeTabId) addressBar.value = tab.url; }
    updateNavigationState(); refreshVideoPopoutButtonState(); setupCredentialHandling(tab);
  });
  webview.addEventListener('page-title-updated', (event) => {
    tab.title = event.title || 'New Tab';
    if (Array.isArray(settings.navigationHistory)) {
      const match = settings.navigationHistory.find(h => h.url === tab.url);
      if (match) { match.title = event.title || match.url; }
    }
    if (isSplitActive() && (id === splitState.leftId || id === splitState.rightId)) { updateSplitTabLabels(); } else { tab.tabLabel.textContent = tab.title; }
  });
  webview.addEventListener('did-navigate', (event) => {
    tab.url = event.url; if (id === activeTabId) addressBar.value = tab.url;
    if (event.url && !event.url.startsWith('about:') && event.url !== getDefaultHome()) {
      if (!Array.isArray(settings.navigationHistory)) settings.navigationHistory = [];
      const entry = { url: event.url, title: tab.title || event.url, visitedAt: Date.now() };
      const last = settings.navigationHistory[0];
      if (!last || last.url !== event.url) {
        settings.navigationHistory.unshift(entry);
        if (settings.navigationHistory.length > 1000) settings.navigationHistory.length = 1000;
        saveSettings();
      }
    }
    updateNavigationState(); refreshVideoPopoutButtonState();
  });
  webview.addEventListener('did-navigate-in-page', (event) => {
    tab.url = event.url; if (id === activeTabId) addressBar.value = tab.url;
    if (event.url && !event.url.startsWith('about:') && event.url !== getDefaultHome()) {
      if (!Array.isArray(settings.navigationHistory)) settings.navigationHistory = [];
      const entry = { url: event.url, title: tab.title || event.url, visitedAt: Date.now() };
      const last = settings.navigationHistory[0];
      if (!last || last.url !== event.url) {
        settings.navigationHistory.unshift(entry);
        if (settings.navigationHistory.length > 1000) settings.navigationHistory.length = 1000;
        saveSettings();
      }
    }
    updateNavigationState(); refreshVideoPopoutButtonState();
  });
  webview.addEventListener('context-menu', (event) => {
    event.preventDefault();
    window.electronAPI.showContextMenu({ mediaType: event.params.mediaType, linkURL: event.params.linkURL, srcURL: event.params.srcURL, selectionText: event.params.selectionText, x: event.params.x, y: event.params.y });
  });
  webview.addEventListener('enter-html-full-screen', () => { document.documentElement.classList.add('in-webview-fullscreen'); });
  webview.addEventListener('leave-html-full-screen', () => { document.documentElement.classList.remove('in-webview-fullscreen'); });
  tabButton.addEventListener('auxclick', (event) => {
    if (event.button === 1) { event.preventDefault(); if (settings.keybinds.tabMiddleClick === 'close') closeTab(id); }
  });
  if (activate) activateTab(id);
  return tab;
}

function _tearOffTab(id) {
  const tab = tabs.find(t => t.id === id);
  if (!tab) return;
  const url = tab.url;
  if (window.electronAPI && window.electronAPI.openNewWindow) {
    window.electronAPI.openNewWindow(url);
  }
  if (tabs.length <= 1) {
    window.electronAPI.closeApp();
    return;
  }
  closeTab(id);
}

function activateTab(id) {
  const tab = tabs.find((candidate) => candidate.id === id);
  if (!tab) return;
  activeTabId = id;
  if (tab.webview) tab.webview.focus();
  if (isSplitActive()) {
    const isSplitPane = id === splitState.leftId || id === splitState.rightId;
    if (isSplitPane) {
      applySplitView();
    } else {
      webviewContainer.classList.remove('split'); removeSplitDivider();
      tabs.forEach((candidate) => {
        if (candidate.id === splitState.rightId) return;
          candidate.button.classList.toggle('active', candidate.id === id);
          candidate.webview.classList.remove('split-pane');
          candidate.webview.style.display = (candidate.id === id) ? 'flex' : 'none';
          candidate.webview.style.pointerEvents = (candidate.id === id) ? 'auto' : 'none';
          candidate.webview.style.flex = ''; candidate.webview.style.width = '';
        });
      const leftPane = tabs.find((t) => t.id === splitState.leftId);
      if (leftPane && leftPane.id !== id) { leftPane.button.classList.remove('active'); leftPane.webview.classList.remove('split-pane'); leftPane.webview.style.display = 'none'; }
      addressBar.value = tab.url; updateNavigationState(); refreshVideoPopoutButtonState(); startVideoPopoutPolling();
    }
  } else {
    tabs.forEach((candidate) => {
      const isActive = candidate.id === id;
      candidate.button.classList.toggle('active', isActive);
      candidate.webview.style.display = isActive ? 'flex' : 'none';
      candidate.webview.style.pointerEvents = isActive ? 'auto' : 'none';
    });
    addressBar.value = tab.url; updateNavigationState(); refreshVideoPopoutButtonState(); startVideoPopoutPolling();
  }
}

function closeTab(id) {
  const index = tabs.findIndex((tab) => tab.id === id);
  if (index === -1) return;
  if (splitState && (id === splitState.leftId || id === splitState.rightId)) { try { exitSplit(); } catch (e) {} }
  const [removedTab] = tabs.splice(index, 1);
  try {
    closedTabs.push({ url: removedTab.url, title: removedTab.title });
    if (closedTabs.length > 50) closedTabs.shift();
    settings.closedTabsHistory = closedTabs.slice(); saveSettings();
  } catch (e) {}
  removedTab.button.remove(); removedTab.webview.remove();
  if (activeTabId === id) {
    const nextTab = tabs[index] || tabs[index - 1] || createTab(getDefaultHome(), true);
    activateTab(nextTab.id);
  }
}

function reopenLastClosedTab() {
  if (!closedTabs.length) return;
  const last = closedTabs.pop();
  if (!last || !last.url) return;
  createTab(last.url, true);
  try { settings.closedTabsHistory = closedTabs.slice(); saveSettings(); } catch (e) {}
}

function updateNavigationState() {
  const tab = tabs.find((item) => item.id === activeTabId);
  if (!tab || !tab.webview) { navBack.disabled = true; navForward.disabled = true; return; }
  navBack.disabled = !tab.webview.canGoBack();
  navForward.disabled = !tab.webview.canGoForward();
}

function updateSidebarWidth() {
  try {
    if (settings && settings.theme && ['left','right'].includes(settings.theme.tabPosition) && Number.isFinite(settings.theme.verticalTabWidth)) {
      document.documentElement.style.setProperty('--sidebar-width', `${settings.theme.verticalTabWidth}vw`); return;
    }
  } catch (e) {}
  const w = window.innerWidth;
  const fraction = (w - 1080) / (1440 - 1080);
  const vwPercent = 15 - 7 * Math.min(1, Math.max(0, fraction));
  const px = (vwPercent / 100) * w;
  document.documentElement.style.setProperty('--sidebar-width', `${px}px`);
}

updateSidebarWidth();
window.addEventListener('resize', updateSidebarWidth);

newTabBtn.addEventListener('click', () => createTab(getDefaultHome(), true));
navBack.addEventListener('click', () => { const tab = tabs.find((item) => item.id === activeTabId); if (tab && typeof tab.webview.canGoBack === 'function' && tab.webview.canGoBack()) tab.webview.goBack(); });
navForward.addEventListener('click', () => { const tab = tabs.find((item) => item.id === activeTabId); if (tab && typeof tab.webview.canGoForward === 'function' && tab.webview.canGoForward()) tab.webview.goForward(); });
navReload.addEventListener('click', () => { const tab = tabs.find((item) => item.id === activeTabId); if (tab) tab.webview.reload(); });
navHome.addEventListener('click', () => { const tab = tabs.find((item) => item.id === activeTabId); if (tab) tab.webview.loadURL(getDefaultHome()); });

if (window.electronAPI?.onOpenNewTab) {
  window.electronAPI.onOpenNewTab(({ url, activate }) => {
    if (!url || url === 'about:blank') return;
    createTab(url, activate !== false);
  });
}

window.electronAPI.onContextMenuCommand((data) => {
  if (!data || !data.command) return;
  if (data.command === 'open-link' && data.url) createTab(data.url, true);
});

function triggerShortcut(shortcut) {
  if (!shortcut) return;
  const norm = normalizeShortcut(shortcut);
  if (!norm) return;
  if (normalizeShortcut(settings.keybinds.openSearch) === norm) { openSearchOverlay(); return true; }
  if (normalizeShortcut(settings.keybinds.muteTab) === norm) { toggleMuteActiveTab(); return true; }
  if (normalizeShortcut(settings.keybinds.refreshTab) === norm) { refreshActiveTab(); return true; }
  for (const shortcutItem of settings.keybinds.websites || []) {
    if (shortcutItem.key && shortcutItem.url && normalizeShortcut(shortcutItem.key) === norm) { loadWebsiteShortcut(shortcutItem); return true; }
  }
  if (normalizeShortcut(settings.keybinds.switchForward) === norm) { switchToNextTab(); return true; }
  if (normalizeShortcut(settings.keybinds.switchBack) === norm) { switchToPrevTab(); return true; }
  if (normalizeShortcut(settings.keybinds.newTab) === norm) { createTab(getDefaultHome(), true); return true; }
  if (normalizeShortcut(settings.keybinds.toggleTabs) === norm) { toggleTabBarVisibility(); return true; }
  if (normalizeShortcut(settings.keybinds.splitScreen) === norm) { splitCurrentWithNext(); return true; }
  if (normalizeShortcut(settings.keybinds.reopenClosed) === norm) { reopenLastClosedTab(); return true; }
  if (normalizeShortcut(settings.keybinds.undoTab) === norm) { const tab = getFocusedTab(); if (tab && tab.webview && tab.webview.canGoBack()) tab.webview.goBack(); return true; }
  if (normalizeShortcut(settings.keybinds.redoTab) === norm) { const tab = getFocusedTab(); if (tab && tab.webview && tab.webview.canGoForward()) tab.webview.goForward(); return true; }
  if (normalizeShortcut(settings.keybinds.findInPage || 'Control+F') === norm) {
    if (findBar && findBar.classList.contains('open')) {
      findInput && findInput.focus();
    } else {
      openFindBar();
    }
    return true;
  }
  return false;
}

function switchToNextTab() {
  if (!tabs.length) return;
  const idx = tabs.findIndex((t) => t.id === activeTabId);
  let next = tabs[(idx + 1) % tabs.length];
  if (splitState && next && next.id === splitState.rightId) next = tabs[(idx + 2) % tabs.length];
  if (next) activateTab(next.id);
}

function switchToPrevTab() {
  if (!tabs.length) return;
  const idx = tabs.findIndex((t) => t.id === activeTabId);
  let prev = tabs[(idx - 1 + tabs.length) % tabs.length];
  if (splitState && prev && prev.id === splitState.rightId) prev = tabs[(idx - 2 + tabs.length) % tabs.length];
  if (prev) activateTab(prev.id);
}

function applyTabBarVisibility() {
  const shell = document.querySelector('.browser-shell');
  if (!shell) return;
  if (settings.ui && settings.ui.tabBarHidden) { shell.classList.add('tabs-hidden'); } else { shell.classList.remove('tabs-hidden'); }
}

function toggleTabBarVisibility() {
  const shell = document.querySelector('.browser-shell');
  if (!shell) return;

  const isVertical = shell.classList.contains('vertical-tabs');
  const currentlyHidden = shell.classList.contains('tabs-hidden');

  if (isVertical && !currentlyHidden) {
    const toolbar = document.querySelector('.toolbar');
    const currentVw = settings.theme.verticalTabWidth || 10;
    if (toolbar) {
      toolbar.style.transition = 'width 280ms cubic-bezier(0.4, 0, 0.2, 1), min-width 280ms cubic-bezier(0.4, 0, 0.2, 1), max-width 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 260ms cubic-bezier(0.4, 0, 0.2, 1), transform 280ms cubic-bezier(0.4, 0, 0.2, 1)';
      toolbar.style.width = '0';
      toolbar.style.minWidth = '0';
      toolbar.style.maxWidth = '0';
      toolbar.style.opacity = '0';
      toolbar.style.transform = 'translateX(-100%) scaleX(0.85)';
    }
    setTimeout(() => {
      shell.classList.add('tabs-hidden');
      if (toolbar) {
        toolbar.style.transition = '';
        toolbar.style.width = '';
        toolbar.style.minWidth = '';
        toolbar.style.maxWidth = '';
        toolbar.style.opacity = '';
        toolbar.style.transform = '';
      }
      settings.ui = settings.ui || {};
      settings.ui.tabBarHidden = true;
      saveSettings();
    }, 290);
  } else if (isVertical && currentlyHidden) {
    const toolbar = document.querySelector('.toolbar');
    shell.classList.remove('tabs-hidden');
    const targetVw = settings.theme.verticalTabWidth || 10;
    if (toolbar) {
      toolbar.style.transition = 'none';
      toolbar.style.width = '0';
      toolbar.style.minWidth = '0';
      toolbar.style.maxWidth = '0';
      toolbar.style.opacity = '0';
      toolbar.style.transform = 'translateX(-100%) scaleX(0.85)';
      toolbar.getBoundingClientRect();
      toolbar.style.transition = 'width 300ms cubic-bezier(0.4, 0, 0.2, 1), min-width 300ms cubic-bezier(0.4, 0, 0.2, 1), max-width 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 300ms cubic-bezier(0.4, 0, 0.2, 1)';
      toolbar.style.width = `var(--sidebar-width)`;
      toolbar.style.minWidth = '180px';
      toolbar.style.maxWidth = `var(--sidebar-width)`;
      toolbar.style.opacity = '1';
      toolbar.style.transform = 'translateX(0) scaleX(1)';
      setTimeout(() => {
        toolbar.style.transition = '';
        toolbar.style.width = '';
        toolbar.style.minWidth = '';
        toolbar.style.maxWidth = '';
        toolbar.style.opacity = '';
        toolbar.style.transform = '';
      }, 310);
    }
    settings.ui = settings.ui || {};
    settings.ui.tabBarHidden = false;
    saveSettings();
  } else {
    const hidden = shell.classList.toggle('tabs-hidden');
    settings.ui = settings.ui || {};
    settings.ui.tabBarHidden = hidden;
    saveSettings();
  }
}

if (window.electronAPI && window.electronAPI.onGlobalShortcut) {
  window.electronAPI.onGlobalShortcut((data) => { try { if (data && data.shortcut) handleIncomingShortcut(data.shortcut); } catch (e) {} });
}
window.addEventListener('electron-global-shortcut', (e) => { try { const data = e.detail; if (data && data.shortcut) handleIncomingShortcut(data.shortcut); } catch (e) {} });

let _lastShortcut = null, _lastShortcutAt = 0;
function handleIncomingShortcut(shortcut) {
  if (!shortcut) return;
  const now = Date.now();
  if (shortcut === _lastShortcut && now - _lastShortcutAt < 350) return;
  _lastShortcut = shortcut; _lastShortcutAt = now;
  try { triggerShortcut(shortcut); } catch (e) {}
}

if (settingsBtn) settingsBtn.addEventListener('click', openSettings);
if (settingsClose) settingsClose.addEventListener('click', closeSettings);
if (settingsModal) settingsModal.addEventListener('click', (event) => { if (event.target === settingsModal) closeSettings(); });
settingsTabs.forEach((button) => { button.addEventListener('click', () => setSettingsTab(button.dataset.tab)); });
if (keybindAction) keybindAction.addEventListener('change', (event) => { settings.keybinds.tabMiddleClick = event.target.value; saveSettings(); });
if (shortcutFindInPage) shortcutFindInPage.addEventListener('change', (e) => {
  settings.keybinds.findInPage = e.target.value.trim(); saveSettings();
});
if (searchEngineSelect) searchEngineSelect.addEventListener('change', (e) => {
  settings.privacy.searchEngine = e.target.value;
  saveSettings();
});
if (cookieEnabled) cookieEnabled.addEventListener('change', (event) => { settings.privacy.cookiesEnabled = event.target.checked; saveSettings(); applyCookiePolicy(settings.privacy); });
if (cookieLevel) cookieLevel.addEventListener('change', (event) => { settings.privacy.cookieLevel = event.target.value; saveSettings(); applyCookiePolicy(settings.privacy); });
if (downloadsBtn) downloadsBtn.addEventListener('click', openDownloadsModal);
if (downloadsModalClose) downloadsModalClose.addEventListener('click', closeDownloadsModal);
if (downloadsModal) downloadsModal.addEventListener('click', (event) => { if (event.target === downloadsModal) closeDownloadsModal(); });
if (downloadsClearCompletedBtn) downloadsClearCompletedBtn.addEventListener('click', clearCompletedDownloads);
document.querySelectorAll('.dl-filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => setDownloadsFilter(btn.dataset.filter));
});
const adblockToggle = document.getElementById('adblock-enabled');
if (adblockToggle) adblockToggle.addEventListener('change', async (e) => {
  settings.privacy.adBlockEnabled = e.target.checked;
  saveSettings();
  await applyAdBlockSetting(e.target.checked);
  updateAdBlockStatus();
});

const checkUpdateBtn = document.getElementById('check-update-btn');
const updateStatus = document.getElementById('update-status');

async function checkForUpdates() {
  if (!checkUpdateBtn || !updateStatus) return;
  checkUpdateBtn.textContent = 'Checking…';
  checkUpdateBtn.disabled = true;
  updateStatus.textContent = '';

  try {
    const REPO = 'YOUR_GITHUB_USERNAME/YOUR_REPO_NAME'; // ← change this
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`);
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    const data = await res.json();

    const latestTag = (data.tag_name || '').replace(/^v/, '');
    const currentVersion = await window.electronAPI?.getAppVersion?.() || '0.0.0';

    if (latestTag && latestTag !== currentVersion) {
      updateStatus.textContent = `v${latestTag} available (you have v${currentVersion})`;
      updateStatus.style.color = 'var(--accent)';
      checkUpdateBtn.textContent = 'Download update';
      checkUpdateBtn.disabled = false;
      checkUpdateBtn.addEventListener('click', () => {
        window.electronAPI?.openExternal?.(data.html_url);
      }, { once: true });
    } else {
      updateStatus.textContent = `You're up to date (v${currentVersion})`;
      updateStatus.style.color = 'var(--muted)';
      checkUpdateBtn.textContent = 'Check for updates';
      checkUpdateBtn.disabled = false;
    }
  } catch (e) {
    updateStatus.textContent = 'Could not check for updates.';
    updateStatus.style.color = 'rgba(239,68,68,0.85)';
    checkUpdateBtn.textContent = 'Check for updates';
    checkUpdateBtn.disabled = false;
  }
}

if (checkUpdateBtn) checkUpdateBtn.addEventListener('click', checkForUpdates);

const adblockReloadBtn = document.getElementById('adblock-reload-btn');
if (adblockReloadBtn) adblockReloadBtn.addEventListener('click', async () => {
  adblockReloadBtn.textContent = 'Reloading…';
  adblockReloadBtn.disabled = true;
  await window.electronAPI.reloadAdblockLists();
  await updateAdBlockStatus();
  adblockReloadBtn.textContent = 'Reload block lists';
  adblockReloadBtn.disabled = false;
});
if (videoPopoutBtn) videoPopoutBtn.addEventListener('click', () => popoutActiveVideo());
if (bookmarksBtn) bookmarksBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleBookmarksDropdown(); });
if (closeAppBtn) closeAppBtn.addEventListener('click', () => window.electronAPI?.closeApp?.());
if (credentialSaveConfirm) credentialSaveConfirm.addEventListener('click', savePendingCredential);
if (credentialSaveDismiss) credentialSaveDismiss.addEventListener('click', hideCredentialSavePrompt);
const masterPwSetBtn = document.getElementById('master-pw-set-btn');
if (masterPwSetBtn) masterPwSetBtn.addEventListener('click', async () => {
  const pw = document.getElementById('master-pw-input').value;
  const confirm = document.getElementById('master-pw-confirm').value;
  const error = document.getElementById('master-pw-error');
  if (!pw || pw.length < 6) { error.textContent = 'Password must be at least 6 characters.'; return; }
  if (pw !== confirm) { error.textContent = 'Passwords do not match.'; return; }
  error.textContent = '';
  settings.masterPasswordHash = await hashMasterPassword(pw);
  setUnlockedMasterPw(pw);
  saveSettings();
  closeMasterPasswordSetup();
  if (pendingCredential) {
    const { host, username, password } = pendingCredential;
    pendingCredential = null;
    showCredentialSavePrompt(host, username, password);
  }
});

['master-pw-input', 'master-pw-confirm'].forEach(id => {
  document.getElementById(id)?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('master-pw-set-btn')?.click();
  });
});

const vaultUnlockBtn = document.getElementById('vault-unlock-btn');
if (vaultUnlockBtn) vaultUnlockBtn.addEventListener('click', async () => {
  const pw = document.getElementById('vault-unlock-input').value;
  const error = document.getElementById('vault-unlock-error');
  if (!pw) { error.textContent = 'Enter your master password.'; return; }
  const ok = await verifyMasterPassword(pw);
  if (ok) setUnlockedMasterPw(pw);
  if (!ok) { error.textContent = 'Incorrect master password.'; return; }
  error.textContent = '';
  document.getElementById('vault-locked').style.display = 'none';
  const unlocked = document.getElementById('vault-unlocked');
  unlocked.style.display = 'flex';
  renderVaultList();
});

document.getElementById('vault-unlock-input')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') document.getElementById('vault-unlock-btn')?.click();
});

const vaultModalClose = document.getElementById('vault-modal-close');
if (vaultModalClose) vaultModalClose.addEventListener('click', closeVaultModal);
document.getElementById('vault-modal')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('vault-modal')) closeVaultModal();
});

const openVaultBtn = document.getElementById('open-vault-btn');
if (openVaultBtn) openVaultBtn.addEventListener('click', () => {
  closeSettings();
  if (!settings.masterPasswordHash) { openMasterPasswordSetup(); return; }
  openVaultModal();
});

document.getElementById('master-password-modal')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('master-password-modal')) closeMasterPasswordSetup();
});
[themeAccent, themeSurface, themeBackground, themeBorderColor, themeBorderWidth, themeTabActiveBg, themeTabInactiveBg, themeTabActiveText, themeTabInactiveText, themeSettingsFontColor, themeGradient, themeGradientAccent, themeGradientSurface, themeGradientTabActive, themeGradientTabInactive, tabPositionSelect, themeSurfacePattern, themeSurfacePatternColor, themeSurfacePatternOpacity,themeInput].forEach((input) => {
  if (!input) return;
  input.addEventListener('input', () => updateThemeFromUI());
  input.addEventListener('change', () => updateThemeFromUI());
});

if (verticalTabWidthInput) verticalTabWidthInput.addEventListener('input', (event) => {
  const v = Math.min(30, Math.max(5, parseInt(event.target.value, 10)));
  settings.theme.verticalTabWidth = v;
  const display = document.getElementById('vertical-tab-width-display');
  if (display) display.textContent = v;
  saveSettings();
  updateSidebarWidth();
});

if (themeGradient) themeGradient.addEventListener('change', () => { updateGradientControlsVisibility(); updateThemeFromUI(); });

if (clearCookiesBtn) clearCookiesBtn.addEventListener('click', () => clearBrowserData('cookies'));
if (clearStorageBtn) clearStorageBtn.addEventListener('click', () => clearBrowserData('storage'));
if (clearAllBtn) clearAllBtn.addEventListener('click', () => clearBrowserData('all'));
if (clearPasswordsBtn) clearPasswordsBtn.addEventListener('click', () => clearBrowserData('passwords'));
if (clearDownloadsHistoryBtn) clearDownloadsHistoryBtn.addEventListener('click', () => clearBrowserData('downloads-history'));
if (clearHistoryBtn) clearHistoryBtn.addEventListener('click', () => clearBrowserData('navigation-history'));
if (saveThemeBtn) saveThemeBtn.addEventListener('click', saveCurrentThemeAsPreset);
(function setupRandomiseSliderBtn() {
  const btn = document.getElementById('randomise-theme-btn');
  const fill = document.getElementById('randomise-slider-fill');
  const lbl  = document.getElementById('randomise-slider-label');
  if (!btn) return;

  let _brightness = 50;
  let _dragging   = false;
  let _didDrag    = false;
  let _startX     = 0;

  function _updateSlider(v) {
    _brightness = Math.round(Math.min(100, Math.max(0, v)));
    if (fill) {
      fill.style.width = _brightness + '%';
      fill.style.background = `hsl(0,0%,${_brightness}%)`;
      fill.style.opacity = '0.6';
    }
    if (lbl) lbl.textContent = 'Randomise';
  }

  function _getValFromEvent(clientX) {
    const rect = btn.getBoundingClientRect();
    return (clientX - rect.left) / rect.width * 100;
  }

  btn.addEventListener('mousedown', e => {
    _dragging = true; _didDrag = false; _startX = e.clientX; e.preventDefault();
  });
  document.addEventListener('mousemove', e => {
    if (!_dragging) return;
    if (Math.abs(e.clientX - _startX) > 4) _didDrag = true;
    _updateSlider(_getValFromEvent(e.clientX));
  });
  document.addEventListener('mouseup', () => {
    if (!_dragging) return;
    _dragging = false;
    if (!_didDrag) randomiseTheme();
  });
  btn.addEventListener('touchstart', e => {
    _dragging = true; _didDrag = false; _startX = e.touches[0].clientX; e.preventDefault();
  }, { passive: false });
  document.addEventListener('touchmove', e => {
    if (!_dragging) return;
    if (Math.abs(e.touches[0].clientX - _startX) > 4) _didDrag = true;
    _updateSlider(_getValFromEvent(e.touches[0].clientX));
  }, { passive: true });
  document.addEventListener('touchend', () => { if (_dragging) { _dragging = false; } });

  window._getRandomiseBrightness = () => _brightness;
  _updateSlider(50);
})();

function ensureBookmarksInitialized() { settings.bookmarks = Array.isArray(settings.bookmarks) ? settings.bookmarks : []; }
function renderBookmarksDropdown() {
  if (!bookmarksDropdown) return;
  ensureBookmarksInitialized();
  bookmarksDropdown.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'bm-header';
  const headerTitle = document.createElement('div');
  headerTitle.className = 'bm-header-title';
  headerTitle.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 3h14a1 1 0 0 1 1 1v17l-8-4-8 4V4a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg> Bookmarks`;
  header.appendChild(headerTitle);
  bookmarksDropdown.appendChild(header);

  const listWrap = document.createElement('div');
  listWrap.className = 'bm-list-wrap';

  if (!settings.bookmarks.length) {
    const empty = document.createElement('div');
    empty.className = 'bm-empty';
    empty.innerHTML = `<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M5 3h14a1 1 0 0 1 1 1v17l-8-4-8 4V4a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg><span>No bookmarks yet</span>`;
    listWrap.appendChild(empty);
  } else {
    const list = document.createElement('ul');
    list.className = 'bm-list';
    settings.bookmarks.forEach((bm, idx) => {
      const li = document.createElement('li');
      li.className = 'bm-item';

      const favicon = document.createElement('div');
      favicon.className = 'bm-favicon';
      try {
        const host = new URL(bm.url).hostname;
        favicon.textContent = host.replace('www.', '')[0]?.toUpperCase() || '?';
      } catch { favicon.textContent = '?'; }

      const info = document.createElement('div');
      info.className = 'bm-item-info';
      const titleEl = document.createElement('div');
      titleEl.className = 'bm-item-title';
      titleEl.textContent = bm.title || bm.url || '';
      const urlEl = document.createElement('div');
      urlEl.className = 'bm-item-url';
      try { urlEl.textContent = new URL(bm.url).hostname; } catch { urlEl.textContent = bm.url || ''; }
      info.appendChild(titleEl);
      info.appendChild(urlEl);

      const actions = document.createElement('div');
      actions.className = 'bm-actions';
      const del = document.createElement('button');
      del.className = 'bm-delete-btn';
      del.title = 'Delete bookmark';
      del.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      del.addEventListener('click', (e) => { e.stopPropagation(); deleteBookmarkAt(idx); });
      actions.appendChild(del);

      li.appendChild(favicon);
      li.appendChild(info);
      li.appendChild(actions);
      li.addEventListener('click', () => { openBookmark(bm.url); closeBookmarksDropdown(); });
      list.appendChild(li);
    });
    listWrap.appendChild(list);
  }
  bookmarksDropdown.appendChild(listWrap);

  const footer = document.createElement('div');
  footer.className = 'bm-footer';
  const addBtn = document.createElement('button');
  addBtn.className = 'bm-add-btn';
  addBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg> Bookmark this page`;
  addBtn.addEventListener('click', () => { addBookmarkForCurrentTab(); renderBookmarksDropdown(); });
  footer.appendChild(addBtn);
  bookmarksDropdown.appendChild(footer);
}
function openFindBar() {
  if (!findBar || !findInput) return;
 
  const tab = getFocusedTab();
  if (!tab || !tab.webview) return;
 
  if (_findActiveWebview && _findActiveWebview !== tab.webview) {
    _stopFind(_findActiveWebview);
  }
  _findActiveWebview = tab.webview;
 
  findBar.classList.add('open');
  findBar.setAttribute('aria-hidden', 'false');
 
  requestAnimationFrame(() => {
    findInput.select();
    findInput.focus();
  });
 
  if (_findQuery) _runFind(_findQuery, false);
}
 
function closeFindBar() {
  if (!findBar) return;
  findBar.classList.remove('open');
  findBar.setAttribute('aria-hidden', 'true');
 
  if (_findActiveWebview) {
    _stopFind(_findActiveWebview);
    _findActiveWebview = null;
  }
 
  _findQuery        = '';
  _findResultCount  = 0;
  _findActiveIndex  = 0;
  if (findInput)  findInput.value = '';
  if (findCount)  findCount.textContent = '';
  findInput && findInput.classList.remove('find-no-results');
}
 
function _stopFind(webview) {
  if (!webview) return;
  try { webview.stopFindInPage('clearSelection'); } catch (e) {}
}
 
function _runFind(text, forward = true) {
  if (!_findActiveWebview) return;
 
  if (!text) {
    _stopFind(_findActiveWebview);
    _updateFindCount(0, 0);
    findInput && findInput.classList.remove('find-no-results');
    return;
  }
 
  _findActiveWebview.findInPage(text, {
    forward,
    findNext: text === _findQuery,
    matchCase: false
  });
 
  _findQuery = text;
}
 
function findNext() {
  if (!_findActiveWebview || !_findQuery) return;
  _findActiveWebview.findInPage(_findQuery, { forward: true, findNext: true, matchCase: false });
}
 
function findPrev() {
  if (!_findActiveWebview || !_findQuery) return;
  _findActiveWebview.findInPage(_findQuery, { forward: false, findNext: true, matchCase: false });
}
 
function _updateFindCount(activeMatchOrdinal, matches) {
  if (!findCount || !findInput) return;
 
  _findResultCount  = matches;
  _findActiveIndex  = activeMatchOrdinal;
 
  if (!_findQuery) {
    findCount.textContent = '';
    findInput.classList.remove('find-no-results');
    return;
  }
 
  if (matches === 0) {
    findCount.textContent  = 'No results';
    findInput.classList.add('find-no-results');
  } else {
    findCount.textContent  = `${activeMatchOrdinal} / ${matches}`;
    findInput.classList.remove('find-no-results');
  }
}
 
const _findListenerAttached = new WeakSet();
 
function _ensureFindListener(webview) {
  if (!webview || _findListenerAttached.has(webview)) return;
  _findListenerAttached.add(webview);
 
  webview.addEventListener('found-in-page', (event) => {
    if (webview !== _findActiveWebview) return;
    const { activeMatchOrdinal, matches } = event.result;
    _updateFindCount(activeMatchOrdinal ?? 0, matches ?? 0);
  });
}
 
const _originalCreateTab = createTab;
 
(function patchCreateTab() {
  const original = window._originalCreateTabRef = createTab;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.tagName && node.tagName.toLowerCase() === 'webview') {
          _ensureFindListener(node);
        }
      });
    });
  });
  const container = document.getElementById('webview-container');
  if (container) observer.observe(container, { childList: true });
})();
requestAnimationFrame(() => {
  document.querySelectorAll('webview').forEach(_ensureFindListener);
});

function openBookmark(url) {
  if (!url) return;
  const tab = tabs.find((item) => item.id === activeTabId);
  if (tab && tab.webview) { tab.webview.loadURL(url); } else { createTab(url, true); }
}

function addBookmarkForCurrentTab() {
  ensureBookmarksInitialized();
  const tab = tabs.find((item) => item.id === activeTabId);
  if (!tab || !tab.url) return;
  const exists = settings.bookmarks.some((b) => b.url === tab.url);
  if (exists) return;
  settings.bookmarks.push({ title: tab.title || tab.url, url: tab.url });
  saveSettings();
}

function deleteBookmarkAt(index) {
  ensureBookmarksInitialized();
  if (index < 0 || index >= settings.bookmarks.length) return;
  settings.bookmarks.splice(index, 1); saveSettings(); renderBookmarksDropdown();
}

function closeBookmarksDropdown() {
  if (!bookmarksModal) return;
  bookmarksModal.classList.remove('open');
  bookmarksModal.setAttribute('aria-hidden', 'true');
}

function toggleBookmarksDropdown() {
  if (!bookmarksModal) return;
  const isOpen = bookmarksModal.classList.contains('open');
  if (isOpen) { closeBookmarksDropdown(); return; }
  renderBookmarksDropdown();
  bookmarksModal.classList.add('open');
  bookmarksModal.setAttribute('aria-hidden', 'false');
}

if (bookmarksModal) {
  bookmarksModal.addEventListener('click', (event) => {
    if (event.target === bookmarksModal) closeBookmarksDropdown();
  });
}
if (findInput) {
  findInput.addEventListener('input', (e) => {
    _runFind(e.target.value.trim(), true);
  });
 
  findInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); closeFindBar(); return; }
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.shiftKey) { findPrev(); } else { findNext(); }
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.browser-shell')
      ?.classList.remove('address-expanded');

    addressBar.blur();
  }
});
addressBar.addEventListener('mouseenter', () => {
  shell?.classList.add('address-expanded');
});

addressBar.addEventListener('focus', () => {
  shell?.classList.add('address-expanded');
});

addressBar.addEventListener('mouseleave', () => {
  if (document.activeElement !== addressBar) {
    shell?.classList.remove('address-expanded');
  }
});

document.addEventListener('mousedown', (e) => {
  if (!e.target.closest('#address-bar')) {
    document
      .querySelector('.browser-shell')
      ?.classList.remove('address-expanded');
  }
});

addressBar.addEventListener('blur', () => {
  shell?.classList.remove('address-expanded');
});

if (findPrevBtn)  findPrevBtn.addEventListener('click',  () => findPrev());
if (findNextBtn)  findNextBtn.addEventListener('click',  () => findNext());
if (findCloseBtn) findCloseBtn.addEventListener('click', () => closeFindBar());

if (shortcutOpenSearch) shortcutOpenSearch.addEventListener('change', (event) => { settings.keybinds.openSearch = event.target.value.trim(); saveSettings(); });
if (shortcutMuteTab) shortcutMuteTab.addEventListener('change', (event) => { settings.keybinds.muteTab = event.target.value.trim(); saveSettings(); });
if (shortcutRefreshTab) shortcutRefreshTab.addEventListener('change', (event) => { settings.keybinds.refreshTab = event.target.value.trim(); saveSettings(); });
if (shortcutUndoTab) shortcutUndoTab.addEventListener('change', (event) => { settings.keybinds.undoTab = event.target.value.trim(); saveSettings(); });
if (shortcutRedoTab) shortcutRedoTab.addEventListener('change', (event) => { settings.keybinds.redoTab = event.target.value.trim(); saveSettings(); });
if (shortcutReopenClosed) shortcutReopenClosed.addEventListener('change', (event) => { settings.keybinds.reopenClosed = event.target.value.trim(); saveSettings(); });
if (shortcutSwitchForward) shortcutSwitchForward.addEventListener('change', (event) => { settings.keybinds.switchForward = event.target.value.trim(); saveSettings(); });
if (shortcutSwitchBack) shortcutSwitchBack.addEventListener('change', (event) => { settings.keybinds.switchBack = event.target.value.trim(); saveSettings(); });
if (shortcutNewTab) shortcutNewTab.addEventListener('change', (event) => { settings.keybinds.newTab = event.target.value.trim(); saveSettings(); });
if (shortcutToggleTabs) shortcutToggleTabs.addEventListener('change', (event) => { settings.keybinds.toggleTabs = event.target.value.trim(); saveSettings(); });
if (shortcutSplitScreen) shortcutSplitScreen.addEventListener('change', (event) => { settings.keybinds.splitScreen = event.target.value.trim(); saveSettings(); });

if (toolbar) {
  toolbar.addEventListener('dblclick', (e) => {
    const interactive = e.target.closest(
      'button, input, select, a, .tab, .tab-close, #address-bar'
    );
    if (!interactive) {
      if (process.platform !== 'win32') {
        window.electronAPI?.toggleMaximise?.();
      }
    }
  });
}

if (searchOverlayInput) searchOverlayInput.addEventListener('keydown', handleSearchOverlayKeydown);
if (searchOverlay) searchOverlay.addEventListener('click', (event) => { if (event.target === searchOverlay) closeSearchOverlay(); });
window.addEventListener('keydown', handleGlobalKeydown);
window.addEventListener('keydown', (e) => {
  if (settingsModal && settingsModal.classList.contains('open')) return;
  if (searchOverlay && searchOverlay.classList.contains('open')) return;
  if (isEditableTarget(e.target)) return;
  if (e.target === findInput) return;
 
  const shortcut = getEventShortcut(e);
  const findShortcut = normalizeShortcut(
    (settings.keybinds && settings.keybinds.findInPage) || 'Control+F'
  );
 
  if (shortcut === findShortcut) {
    e.preventDefault();
    if (findBar && findBar.classList.contains('open')) {
      findInput && findInput.focus();
    } else {
      openFindBar();
    }
  }
}, true);  
 
document.addEventListener('click', (e) => {
  const tabBtn = e.target.closest('.tab:not(.new-tab)');
  if (!tabBtn) return;
  if (findBar && findBar.classList.contains('open')) {
    requestAnimationFrame(() => {
      const tab = getFocusedTab();
      if (tab && tab.webview && tab.webview !== _findActiveWebview) {
        if (_findActiveWebview) _stopFind(_findActiveWebview);
        _findActiveWebview = tab.webview;
        _ensureFindListener(_findActiveWebview);
        if (_findQuery) _runFind(_findQuery, true);
      }
    });
  }
}, true);

addressBar.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') return;
  event.preventDefault();
  const tab = tabs.find((item) => item.id === activeTabId);
  if (!tab) return;
  const value = addressBar.value.trim();
  const isBang = value.startsWith('!') || value.includes(' !');
  if (isBang) {
    tab.webview.loadURL(`https://duckduckgo.com/?q=${encodeURIComponent(value)}`);
  } else {
    tab.webview.loadURL(normalizeUrl(value));
  }
});

window.addEventListener('DOMContentLoaded', async () => {
  settings = await loadSettings();
  closedTabs = Array.isArray(settings.closedTabsHistory)
    ? settings.closedTabsHistory.slice()
    : [];

  applyTheme(settings.theme);
  applyTabPosition(settings.theme.tabPosition);
  applyTabBarVisibility();
  applyCookiePolicy(settings.privacy);

  setTimeout(() => {
    populateWebsiteShortcutsUI();
    populateCookieExceptionsUI();
    syncSettingsColorInputs();
  }, 0);

  createTab(getDefaultHome(), true);
  updateDownloadsBadge();
});