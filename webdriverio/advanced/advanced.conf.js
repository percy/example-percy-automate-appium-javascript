// PER-8195 Phase 3 — advanced wdio config for @percy/appium-app on Automate.
// Percy on Automate captures a mobile *browser* session (Chrome on a real Android device),
// the same flow as ../wdio.conf.js; native apps belong to App Percy.

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  hostname: 'hub-cloud.browserstack.com',
  updateJob: false,
  specs: ['./specs/advanced.test.js'],
  exclude: [],
  capabilities: [
    {
      platformName: 'Android',
      browserName: 'chrome',
      'bstack:options': {
        deviceName: process.env.DEVICE || 'Samsung Galaxy S22 Ultra',
        osVersion: process.env.OS_VERSION || '12.0',
        appiumVersion: process.env.APPIUM_VERSION || '2.19.0',
        projectName: process.env.PERCY_PROJECT || 'Percy Automate Appium-JS (wdio) Advanced',
        buildName: process.env.PERCY_BUILD || 'Advanced Automate Appium wdio',
        sessionName: 'advanced_visual_test',
      },
    },
  ],
  logLevel: 'warn',
  bail: 0,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: { ui: 'bdd', timeout: 120000 },
}
