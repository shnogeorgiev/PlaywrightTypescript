import { expect, Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  public home: string = 'https://anupdamoda.github.io/AceOnlineShoePortal/index.html';

  async goHome() {
    await this.page.goto(this.home);
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async waitForSelector(selector: string) {
    await this.page.waitForSelector(selector);
  }

  async click(selector: string) {
    await this.page.click(selector);
  }

  async type(selector: string, text: string) {
    await this.page.fill(selector, text);
  }

  async assertUrlContains(expected: string) {
    await expect(this.page).toHaveURL(new RegExp(expected));
  }
}
