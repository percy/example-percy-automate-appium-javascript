// PER-8195 Phase 3 — automate-appium-js wdio advanced example.
// Each `it` exercises one row of the Percy on Automate matrix. percyScreenshot logs and
// swallows capture errors, so `npm run test:percy` fails the run when the Percy log
// reports one.

const percyScreenshot = require('@percy/appium-app')

const URL = process.env.URL || 'https://en.wikipedia.org/wiki/BrowserStack'
const HEADER_XPATH = '//h1'

describe('Percy on Automate — Advanced (wdio)', () => {
  before(async () => {
    await browser.url(URL)
    await browser.pause(5000)
  })

  it('exercises baseline screenshot', async () => {
    await percyScreenshot('Wikipedia Article')
  })

  it('exercises full_page', async () => {
    await percyScreenshot('Wikipedia Article — full page', { full_page: true })
  })

  it('exercises ignore_region_xpaths', async () => {
    await percyScreenshot('Wikipedia Article — ignore via xpath', {
      ignore_region_xpaths: [HEADER_XPATH],
    })
  })

  it('exercises ignore_region_selectors', async () => {
    await percyScreenshot('Wikipedia Article — ignore via selector', {
      ignore_region_selectors: ['h1'],
    })
  })

  it('exercises custom_ignore_regions', async () => {
    await percyScreenshot('Wikipedia Article — custom ignore region', {
      custom_ignore_regions: [{ top: 0, bottom: 100, left: 0, right: 300 }],
    })
  })

  it('exercises consider_region_xpaths', async () => {
    await percyScreenshot('Wikipedia Article — consider via xpath', {
      consider_region_xpaths: [HEADER_XPATH],
    })
  })

  it('exercises sync mode', async () => {
    await percyScreenshot('Wikipedia Article — sync', { sync: true })
  })

  it('exercises test_case + labels', async () => {
    await percyScreenshot('Wikipedia Article — test_case + labels', {
      test_case: 'home-smoke',
      labels: 'smoke,automate-appium-js',
    })
  })
})
