import {test, expect} from "@playwright/test"
import { naukariLogin } from "../pages/naukariLogin"
import data from '../testdata/login.json'


test("login to naukari", async ({page}) =>{
    test.setTimeout(120000);
    const lp=new naukariLogin(page)
    await page.goto(data.URL);
    const title = await page.title();
    await expect(title).toContain(data.title);
    await lp.loginbutton();
    await lp.enteremail(data.Username);
    await lp.enterpassword(data.Password);
    await lp.Loginbuttonclick();
    await page.waitForTimeout(4000);
    await lp.userProfile();
    await page.waitForTimeout(4000);
    await lp.clickoneditLink();
    await lp.clickonSaveButton();
    console.log("successfully executed");
});

 