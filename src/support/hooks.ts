import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  await this.page.goto('http://localhost:4200/pages/iot-dashboard');
});

After(async function (this: CustomWorld, { result }) {
  if (result?.status !== 'PASSED') {
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, 'image/png');
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