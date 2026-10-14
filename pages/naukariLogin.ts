import { Locator, Page, expect } from '@playwright/test';

export class naukariLogin {
  readonly page: Page;
  readonly loginID: Locator;
  readonly emailfield: Locator;
  readonly password: Locator;
  readonly Loginbutton: Locator;
  readonly viewProfile: Locator;
  readonly editlinkclick: Locator;
  readonly saveUserProfile: Locator;
  readonly finalverification: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginID = page.locator('#login_Layer');
    this.emailfield = page.getByPlaceholder('Enter your active Email ID / Username');
    this.password = page.getByPlaceholder('Enter your password');
    this.Loginbutton = page.getByRole('button', { name: 'Login', exact: true });
    this.viewProfile = page.locator("//div[@class='view-profile-wrapper']//a[text()='View']");
    this.editlinkclick = page.locator("//div[@class='hdn']//em[text()='editOneTheme']");
    this.saveUserProfile = page.locator('#saveBasicDetailsBtn');
    this.finalverification = page.locator("//span[@class='typ-14Medium mod-date-val']");
  }

  async loginbutton() {
    await this.loginID.click();
  }

  async enteremail(emailID: string) {
    await this.emailfield.fill(emailID);
  }

  async enterpassword(password: string) {
    await this.password.fill(password);
  }

  async Loginbuttonclick() {
    await this.Loginbutton.click();
  }

  async userProfile() {
    await this.viewProfile.click();
  }

  async clickoneditLink() {
    await this.editlinkclick.click();
  }

  async clickonSaveButton() {
    await this.saveUserProfile.waitFor({ state: 'visible', timeout: 15000 });
    await this.saveUserProfile.scrollIntoViewIfNeeded();
    await this.saveUserProfile.click({ force: true });
  }

  async finalmessage() {
    await this.page.waitForTimeout(4000);
    await expect(this.finalverification).toBeVisible();
  }
}
