import { Given, When, Then } from '@cucumber/cucumber';
import { homePage } from '../pages/homePage';
import { CustomWorld } from '../support/world';

let home: homePage;

Given('I am on the home page', async function(this: CustomWorld) {
    home = new homePage(this.page);
});

When('Expand the sidebar', async function(this: CustomWorld) {
  if (!await home.navigationToggle.isToggle) {
    await home.navigationToggle.toggle; 
  }
});

When("I click on {string}", async function (this: CustomWorld, option: string) {
  await home.navigationToggle.selectOption(`${option}`);
});

Then('I can click DatePicker', async function(this: CustomWorld) {
  await home.navigationToggle.selectOption(`Datepicker`)

  await home.assertUrlContains('http://localhost:4200/pages/forms/datepicker');
});
