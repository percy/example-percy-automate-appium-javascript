# Advanced App Percy on Automate — appium-js (wdio driver)

Exercises the full applicable App Percy on Automate feature surface for `@percy/appium-app` via the webdriverio driver. Symmetric to a planned `wd/advanced/`.

8 mocha `it` blocks in `specs/advanced.test.js`: device_name + orientation, fullscreen + bars, ignore regions (xpath / custom bbox), consider regions via xpath, sync mode, test_case + labels.

Web-only options marked `N/A` in `matrix.yml`.

## Run locally

```bash
cd webdriverio/advanced
npm install
export BROWSERSTACK_USERNAME="<your username>"
export BROWSERSTACK_ACCESS_KEY="<your access key>"
export APP="bs://<your hashed app id>"
export PERCY_TOKEN="<your project token>"
npx percy app:exec -- npm run test:advanced
```

## CI note

`workflow_dispatch`-only — App Percy on Automate CI requires a real BrowserStack App Automate session.

## Coverage matrix

Source of truth: [`matrix.yml`](./matrix.yml).
