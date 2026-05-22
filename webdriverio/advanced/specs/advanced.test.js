// PER-8195 Phase 3 — automate-appium-js wdio advanced example.
// Each `it` exercises one row of the App Percy on Automate matrix.

const percyScreenshot = require('@percy/appium-app')

describe('App Percy on Automate — Advanced (wdio)', () => {
  it('exercises baseline screenshot', async () => {
    await browser.pause(5000)
    await percyScreenshot('Wikipedia Home')
  })

  it('exercises device_name + orientation', async () => {
    await percyScreenshot('Wikipedia Home — landscape', {
      device_name: process.env.DEVICE || 'Samsung Galaxy S22 Ultra',
      orientation: 'landscape',
    })
  })

  it('exercises fullscreen + status_bar_height + nav_bar_height', async () => {
    await percyScreenshot('Wikipedia Home — fullscreen', {
      fullscreen: true,
      status_bar_height: 24,
      nav_bar_height: 0,
    })
  })

  it('exercises ignore_regions_xpaths', async () => {
    await percyScreenshot('Wikipedia Home — ignore via xpath', {
      ignore_regions_xpaths: ['//android.widget.TextView[@text="Search Wikipedia"]'],
    })
  })

  it('exercises custom_ignore_regions', async () => {
    await percyScreenshot('Wikipedia Home — custom ignore region', {
      custom_ignore_regions: [{ top: 0, bottom: 100, left: 0, right: 300 }],
    })
  })

  it('exercises consider_regions_xpaths', async () => {
    await percyScreenshot('Wikipedia Home — consider via xpath', {
      consider_regions_xpaths: ['//android.widget.TextView[@text="Search Wikipedia"]'],
    })
  })

  it('exercises sync mode', async () => {
    await percyScreenshot('Wikipedia Home — sync', { sync: true })
  })

  it('exercises test_case + labels', async () => {
    await percyScreenshot('Wikipedia Home — test_case + labels', {
      test_case: 'home-smoke',
      labels: 'smoke,automate-appium-js',
    })
  })
})
