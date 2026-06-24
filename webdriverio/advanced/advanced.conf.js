// PER-8195 Phase 3 — advanced wdio config for @percy/appium-app on Automate.

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  updateJob: false,
  specs: ['./specs/advanced.test.js'],
  exclude: [],
  capabilities: [
    {
      project: process.env.PERCY_PROJECT || 'Percy Automate Appium-JS (wdio) Advanced',
      build: process.env.PERCY_BUILD || 'Advanced Automate Appium wdio',
      name: 'advanced_visual_test',
      device: process.env.DEVICE || 'Samsung Galaxy S22 Ultra',
      os_version: process.env.OS_VERSION || '12',
      app: process.env.APP || 'bs://<hashed app-id>',
    },
  ],
  logLevel: 'warn',
  bail: 0,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: { ui: 'bdd', timeout: 60000 },
}
