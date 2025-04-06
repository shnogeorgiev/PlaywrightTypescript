import { Locator, Page } from '@playwright/test';
import { BaseComponent } from '../baseComponent';

export class Navigation extends BaseComponent {
  private hamburger: Locator;
  private sidebar: Locator;

  constructor(page: Page) {
    super(page);
    this.hamburger = page.locator('a.sidebar-toggle');
    this.sidebar = page.locator('nb-sidebar');
  }

  async toggle() {
    await this.hamburger.click();
  }

  async isToggle(): Promise<boolean> {
    const isOpen = await this.sidebar.evaluate((element) => {
      // Check if the sidebar has the 'menu-sidebar left expanded' class
      return element.classList.contains('menu-sidebar') &&
             element.classList.contains('left') &&
             element.classList.contains('expanded');
    });

    return isOpen;
  }

  async selectOption(option: string) {
    // Expand sidebar if needed
    if (!await this.isToggle()) { await this.toggle(); }

    await this.page.getByRole('link', { name: `${option}` }).click();
  }
}