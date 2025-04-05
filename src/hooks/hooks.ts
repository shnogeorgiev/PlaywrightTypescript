// tests/hooks.ts
import { test as baseTest } from '@playwright/test';

// Optionally extend test here with custom fixtures if needed
export const test = baseTest;

// Global setup/teardown
test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Starting test: ${testInfo.title}`);
  await page.goto('https://anupdamoda.github.io/AceOnlineShoePortal/index.html');
});

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshot = await page.screenshot();
  
      // Attach screenshot to the report
      await testInfo.attach('screenshot', {
        body: screenshot,
        contentType: 'image/png',
      });
    }
  });
