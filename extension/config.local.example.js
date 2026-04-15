window.TAB_DESK_CONFIG_LOCAL = {
  brand: {
    authorName: 'Ryan Lynch',
  },
  domainAliases: {
    'vercel.app': 'Vercel Preview',
  },
  landingPagePatterns: [
    // Example: treat a dashboard landing page as a cleanup homepage.
    // { hostname: 'app.todoist.com', pathExact: ['/app/today'] },
  ],
  customGroups: [
    // Example: merge a few related tools into one visible group.
    // { hostname: 'app.todoist.com', groupKey: 'planning', groupLabel: 'Planning' },
    // { hostname: 'calendar.google.com', groupKey: 'planning', groupLabel: 'Planning' },
  ],
  localDev: {
    portLabels: {
      // '4321': 'Slides Sandbox',
    },
  },
  titleCleanupRules: [
    // Example:
    // { hostname: 'app.todoist.com', match: /\s+\|\s+Todoist$/, replacement: '' },
  ],
};
