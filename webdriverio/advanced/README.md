# Advanced Percy on Automate — appium-js (wdio driver)

Exercises the full applicable Percy on Automate feature surface for `@percy/appium-app` via the webdriverio driver. Symmetric to a planned `wd/advanced/`,
on a mobile-browser session (Chrome on a real Android device). Native apps use App Percy
instead — the CLI's Automate capture needs a browser (JavaScript) context.

8 mocha `it` blocks in `specs/advanced.test.js`: device_name + orientation, fullscreen + bars, ignore regions (xpath / custom bbox), consider regions via xpath, sync mode, test_case + labels.

Web-only options marked `N/A` in `matrix.yml`.

## Run locally

```bash
cd webdriverio/advanced
npm install
export BROWSERSTACK_USERNAME="<your username>"
export BROWSERSTACK_ACCESS_KEY="<your access key>"
export APPIUM_VERSION="2.19.0"   # optional; BrowserStack appiumVersion
export PERCY_TOKEN="<your project token>"
npm run test:percy
```

## CI note

`workflow_dispatch`-only — Percy on Automate CI requires a real BrowserStack Automate session.

## Coverage matrix

Source of truth: [`matrix.yml`](./matrix.yml).
