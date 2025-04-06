import { Locator, Page } from '@playwright/test';
import { BasePage } from '../support/basePage';
import { Navigation } from '../support/components/navigation';

export class homePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get navigationToggle(): Navigation {
    return new Navigation(this.page);
  }
}