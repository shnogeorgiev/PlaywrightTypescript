import { Page } from "@playwright/test";

export class BaseComponent {
  constructor(protected page: Page) {}
}