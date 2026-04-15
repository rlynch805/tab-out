# Tab Desk

**A personal fork of Tab Out for calmer tab cleanup.**

Tab Desk is my private Chrome extension fork of Tab Out. It replaces the new tab page with a dashboard of everything I have open, adds a config-first customization layer, and keeps the original lightweight no-build workflow intact.

No server. No account. No external API calls. Just an unpacked Chrome extension.

---

## What changed in this fork

- Rebranded as `Tab Desk`
- Added tracked defaults in `extension/config.defaults.js`
- Kept `extension/config.local.js` as an optional ignored override file
- Added config hooks for:
  - domain aliases
  - landing page rules
  - custom domain groups
  - title cleanup rules
  - localhost / local-dev grouping
- Preserved the no-build Chrome extension workflow for easy upstream syncing

---

## Features

- **See all your tabs at a glance** on a clean grid, grouped by domain
- **Configurable homepages group** pulls landing pages into one cleanup card
- **Close tabs with style** with swoosh sound + confetti burst
- **Duplicate detection** flags when you have the same page open twice, with one-click cleanup
- **Click any tab to jump to it** across windows, no new tab opened
- **Save for later** bookmark tabs to a checklist before closing them
- **Local dev grouping** keeps localhost and similar tabs together with port-aware labels
- **Expandable groups** show the first 8 tabs with a clickable "+N more"
- **100% local** your data never leaves your machine
- **Pure Chrome extension** no server, no Node.js, no npm, no setup beyond loading the extension

---

## Manual Setup

**1. Clone your fork**

```bash
git clone https://github.com/rlynch805/tab-out.git
```

**2. Optional: customize it**

- Edit `extension/config.defaults.js` for tracked fork defaults
- Copy `extension/config.local.example.js` to `extension/config.local.js` for machine-specific tweaks

**3. Load the Chrome extension**

1. Open Chrome and go to `chrome://extensions`
2. Enable **Developer mode** (top-right toggle)
3. Click **Load unpacked**
4. Navigate to the `extension/` folder inside the cloned repo and select it

**4. Open a new tab**

You'll see Tab Desk.

---

## How it works

```text
You open a new tab
  -> Tab Desk shows your open tabs grouped by domain
  -> Landing pages get their own group at the top
  -> Click any tab title to jump to it
  -> Close groups you're done with (swoosh + confetti)
  -> Save tabs for later before closing them
```

Everything runs inside the Chrome extension. No external server, no API calls, no data sent anywhere. Saved tabs are stored in `chrome.storage.local`.

---

## Config surface

- `extension/config.defaults.js`
  - tracked defaults for this fork
  - safe place for shared branding and grouping rules
- `extension/config.local.js`
  - ignored by git
  - use for machine-specific or experimental overrides
- `extension/config.local.example.js`
  - copy/paste starter template for local overrides

---

## Tech stack

| What | How |
|------|-----|
| Extension | Chrome Manifest V3 |
| Storage | chrome.storage.local |
| Sound | Web Audio API (synthesized, no files) |
| Animations | CSS transitions + JS confetti particles |

---

## License

MIT

---

Fork maintained by [Ryan Lynch](https://github.com/rlynch805), based on [Tab Out](https://github.com/zarazhangrui/tab-out)
