<img width="1389" height="454" alt="image" src="https://github.com/user-attachments/assets/8c54c4e6-e888-4b65-98e2-bd907277e2c8" />

<div align="center">

# Reach Browser

**A fast, private, and deeply customisable browser built on Electron.**

[![Version](https://img.shields.io/github/v/release/lildaveeee/Reach-Browser?style=flat-square&color=a855f7)](https://github.com/lildaveeee/Reach-Browser/releases/latest)
[![Platform](https://img.shields.io/badge/platform-Linux%20%7C%20Windows-blue?style=flat-square)](https://github.com/lildaveeee/Reach-Browser/releases)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

[Download](#-installation) · [Features](#-features) · [Customisation](#-customisation)

</div>

---

## ✨ Features

### 🗂️ Tabs
- Fully featured tab bar with **drag-to-reorder** support
- **Tear off tabs** into new windows by dragging outside the browser
- **Move tabs between windows** by dragging onto another Reach Browser instance
- Middle-click to close (configurable)
- Reopen closed tabs with a shortcut
- **Split screen** — view two tabs side by side with a draggable divider
- Toggle the tab bar visibility to go full-focus mode

### 🔒 Privacy
- **Built-in ad blocker** using EasyList + EasyPrivacy + uBlock filters — blocks 100,000+ domains
- Granular **cookie control**: allow all, block third-party, block cross-site, or block all
- Per-domain cookie **exceptions** — whitelist sites that need cookies (e.g. Google, YouTube)
- Cookie viewer — browse, filter, and inspect every cookie by domain
- One-click clear for cookies, storage, cache, passwords, and history
- **Search engine choice**: Startpage, DuckDuckGo, Brave, Kagi, Google, Bing, Ecosia, and more

### 🔑 Password Manager
- Built-in encrypted **password vault** protected by a master password
- AES-GCM 256-bit encryption with PBKDF2 key derivation
- Auto-detects login forms and prompts to save credentials
- Auto-fills saved credentials on matching sites
- View, copy, and delete saved passwords from the vault

### 📥 Downloads
- Live download progress with speed and size tracking
- Download history with file open and show-in-folder actions
- Active download badge on the toolbar button

### 🌐 Navigation
- Full browsing history with date grouping and per-entry deletion
- Bang search support (`!g cats` → Google, works with any DuckDuckGo bang)
- Picture-in-picture video popout button (auto-detects video on page)
- Bookmarks panel with quick add and delete

---

## 🎨 Customisation

Reach Browser has one of the most extensive theming systems of any Electron browser.

### Theme Engine
Every colour in the UI is customisable from the settings panel:

| Setting | Description |
|---|---|
| Accent colour | Primary highlight colour used throughout the UI |
| Surface | Main background of the browser shell |
| Background | Outer/page background |
| Tab active / inactive | Individual colours for active and inactive tabs |
| Text colours | Active tab text, inactive tab text, settings panel text |
| Border colour & width | Control the border style across all UI elements |
| Input background | Background colour for address bar and inputs |

### Gradient Mode
Enable gradient mode to add a second colour to any surface — the gradient direction adjusts automatically based on your tab position (horizontal or vertical).

### Surface Patterns
Add a subtle texture to the browser shell background:

- **Dots** — regular dot grid
- **Lines** — diagonal line hatching  
- **Grid** — crosshatch grid
- **None** — flat surface

Pattern colour and opacity are independently controllable.

### Tab Positions
Tabs can be placed on any side of the browser:

| Position | Description |
|---|---|
| `top` | Classic horizontal tab bar |
| `left` | Vertical sidebar on the left |
| `right` | Vertical sidebar on the right |
| `bottom` | Tab bar below the content area |

Vertical tab width is adjustable from 5–30vw.

### Theme Presets
Save any theme configuration as a named preset and reload it instantly. Build a library of themes and switch between them with one click.

### Randomise
The **Randomise** button generates a complete harmonious theme from scratch. Drag the slider left for darker themes, right for lighter ones before randomising.

---

## ⌨️ Keyboard Shortcuts

All shortcuts are fully remappable from Settings → General.

| Action | Default |
|---|---|
| Open search overlay | `Ctrl+Space` |
| New tab | `Ctrl+N` |
| Switch tab forward | `Ctrl+Tab` |
| Switch tab back | `Ctrl+Shift+Tab` |
| Reopen closed tab | `Ctrl+Shift+T` |
| Toggle tab bar | `Ctrl+B` |
| Split screen | `Ctrl+S` |
| Find in page | `Ctrl+F` |
| Mute tab | `Ctrl+M` |
| Refresh tab | `F5` |
| Navigate back | `Alt+←` |
| Navigate forward | `Alt+→` |

---

## 📦 Installation

### Download a release

Head to the [Releases](https://github.com/lildaveeee/Reach-Browser/releases/latest) page and download:

- **Linux**: `Reach-Browser.AppImage`
- **Windows**: `Reach-Browser.exe`

**Linux:**
```bash
chmod +x Reach-Browser.AppImage
./Reach-Browser.AppImage
```

**Windows:** Run the installer and follow the prompts.

### Build from source

```bash
git clone https://github.com/lildaveeee/Reach-Browser.git
cd Reach-Browser
npm install

# Run in development
npm start

# Build for Linux
npm run build:linux

# Build for Windows
npm run build:win
```

Requirements: **Node.js 18+**, **npm**

---

## 🛠️ Tech Stack

| | |
|---|---|
| Runtime | [Electron](https://www.electronjs.org/) v26 |
| Ad blocking | Custom domain blocklist parser (EasyList, EasyPrivacy, uBlock) |
| Encryption | Web Crypto API — AES-GCM 256 + PBKDF2 |
| Build | [electron-builder](https://www.electron.build/) |

---

## 📄 License

Mozilla — see [LICENSE](LICENSE) for details.

