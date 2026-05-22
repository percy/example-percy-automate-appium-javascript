# example-percy-automate-appium-javascript

Example app used by the Percy JS wd tutorial and Percy JS WebdriverIO tutorial demonstrating Percy on Auomate JS wd and WebdriverIO integrations.

> **New:** This repo ships a [`webdriverio/advanced/`](./webdriverio/advanced) example covering the full applicable App Percy on Automate feature surface. A symmetric `wd/advanced/` is planned. See the [Percy SDK Feature Matrix](https://docs.percy.io/docs/sdk-feature-matrix) for cross-SDK coverage.

## Examples

| Driver | Example | Run command |
|---|---|---|
| webdriverio | `webdriverio/test/specs/test.js` (basic) | `cd webdriverio && npm run base` |
| webdriverio | [`webdriverio/advanced/`](./webdriverio/advanced) | `cd webdriverio/advanced && npm install && npx percy app:exec -- npm run test:advanced` |
| wd | `wd/test/specs/test.js` (basic) | `cd wd && npm run base` |
| wd | `wd/advanced/` (planned) | — |


# JS wd/WebdriverIO Tutorial
The tutorial assumes you're already familiar with JavaScript and the wd/webdriverio framework. You'll still be able to follow along if you're not familiar with Appium concepts, but we won't spend time introducing JS Appium concepts. Also we will be using basic test frameworks to write tests.

This tutorial also assumes you have Node version 17 >= with npm and git installed.

Depending on which framework you use for testing, please follow the tutorial in either wd directory or webdriverio directory.

By the end of this tutorial you will be able to use Percy on Automate.
