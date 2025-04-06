import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './world';
import path from 'path';
import fs from 'fs';

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  await this.page.goto('http://localhost:4200/pages/iot-dashboard');
});

After(async function (this: CustomWorld, { result, pickle }) {
  if (result?.status !== 'PASSED') {
    // Create Date object from the current time
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    
    // Check if the directory exists, if not, create it
    const screenshotsDir = path.join(__dirname, '../screenshots');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }

    // Create screenshot
    const screenshotPath = path.join(__dirname, `../screenshots/${pickle.name}-${formattedDate}.png`);
    await this.page.screenshot({ path: screenshotPath });
    this.attach(screenshotPath, 'image/png');
  }

  await this.context?.close();
  await this.browser?.close();
});

BeforeAll(async function () {
  // runs once before everything
});

AfterAll(async function () {
  // runs once after everything
});