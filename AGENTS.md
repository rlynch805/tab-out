# AGENTS.md -- Tab Desk Setup Guide

This repo is a personal fork of Tab Out called **Tab Desk**.

When helping with setup or maintenance:

- Keep the extension lightweight.
- Do not add a server, build step, or dependency install unless explicitly asked.
- Prefer config-based customization over hardcoding personal rules into `extension/app.js`.
- Put shared fork defaults in `extension/config.defaults.js`.
- Put machine-specific overrides in `extension/config.local.js`.

## Install flow

```bash
git clone https://github.com/rlynch805/tab-out.git
cd tab-out
```

Load the unpacked extension from the `extension/` folder in `chrome://extensions`.

## Product summary

Tab Desk replaces the Chrome new tab page with a dashboard that:

- groups open tabs by domain
- pulls landing pages into a cleanup card
- flags duplicate tabs
- lets you jump to an existing tab across windows
- saves tabs for later in `chrome.storage.local`

## Maintenance notes

- Use `extension/config.defaults.js` for tracked branding, groups, aliases, and title cleanup.
- Use `extension/config.local.example.js` as the template for local overrides.
- Keep changes additive so upstream syncs from `zarazhangrui/tab-out` stay manageable.
