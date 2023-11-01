const percyScreenshot = require('@percy/appium-app');
const wd = require('wd');

const desiredCaps = {
  // Set BStack options that would allow 
  'bstack:options': {
    "userName" : process.env.BROWSERSTACK_USERNAME,
    "accessKey" : process.env.BROWSERSTACK_ACCESS_KEY,
  },

  // Specify device and os_version for testing
  device: 'Samsung Galaxy S22 Ultra',
  os_version: '12',

  // Set other BrowserStack capabilities
  project: 'First Percy Automate wd Project',
  build: 'wd Android',
  name: 'first_visual_test'
};

// Initialize the remote Webdriver using BrowserStack remote URL
const driver = wd.promiseRemote('https://hub-cloud.browserstack.com/wd/hub');

(async () => {
  try {
    // Initialize device capabilities
    await driver.init(desiredCaps)
    await driver.get("https://bstackdemo.com/");
    await driver.title();

    const tabBtn = await driver.elementByXPath('//*[@id="__next"]/div/div/main/div[1]/div[2]/label/span')
    tabBtn.click()
    
    // [percy note: important step]
    // Percy Screenshot 1
    // take percyScreenshot using the following command
    await percyScreenshot(driver, 'screenshot_1');

    await driver.waitForElementByXPath('//*[@id="10"]/p', wd.asserters.isDisplayed);
    const productCard  = await driver.elementByXPath('//*[@id="10"]/p')
    await productCard.text()
    const addToCartBtn = await driver.elementByXPath('//*[@id="10"]/div[4]')
    addToCartBtn.click()
    await driver.waitForElementByClassName("float-cart__content", wd.asserters.isDisplayed);
    await driver.elementByClassName("float-cart__content");
    
    // [percy note: important step]
    // Percy Screenshot 1
    // take percyScreenshot using the following command
    await percyScreenshot(driver, 'screenshot_2'); 
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    // Quit the driver
    await driver.quit();
  }
})();