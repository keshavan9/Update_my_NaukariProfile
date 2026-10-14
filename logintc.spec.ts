import { test, expect } from '@playwright/test';
import { naukariLogin } from './pages/naukariLogin';

const naukariUrl = process.env.NAUKRI_URL ?? 'https://www.naukri.com/';
const username = process.env.NAUKRI_USERNAME ?? 'your-email@example.com';
const password = process.env.NAUKRI_PASSWORD ?? 'your-password';

test('login to naukari', async ({ page }) => {
  test.setTimeout(120000);
  const lp = new naukariLogin(page);

  await page.goto(naukariUrl);
  let title = await page.title();

  if (title.includes('Access Denied')) {
    await page.goto('https://login.naukri.com/nLogin/Login.php');
    title = await page.title();
  }

  await expect(title).toContain('Naukri');
  await lp.loginbutton();
  await lp.enteremail(username);
  await lp.enterpassword(password);
  await lp.Loginbuttonclick();
  await page.waitForTimeout(4000);
  await lp.userProfile();
  await page.waitForTimeout(4000);
  await lp.clickoneditLink();
  await lp.clickonSaveButton();
  console.log('successfully executed');
});
