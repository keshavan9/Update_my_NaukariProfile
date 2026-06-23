# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logintc.spec.ts >> login to naukari
- Location: tests\logintc.spec.ts:6:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://www.naukri.com/", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect} from "@playwright/test"
  2  | import { naukariLogin } from "../pages/naukariLogin"
  3  | import data from '../testdata/login.json'
  4  | 
  5  | 
  6  | test("login to naukari", async ({page}) =>{
  7  |     test.setTimeout(120000);
  8  |     const lp=new naukariLogin(page)
> 9  |     await page.goto(data.URL);
     |                ^ Error: page.goto: Test ended.
  10 |     const title = await page.title();
  11 |     await expect(title).toContain(data.title);
  12 |     await lp.loginbutton();
  13 |     await lp.enteremail(data.Username);
  14 |     await lp.enterpassword(data.Password);
  15 |     await lp.Loginbuttonclick();
  16 |     await page.waitForTimeout(4000);
  17 |     await lp.userProfile();
  18 |     await page.waitForTimeout(4000);
  19 |     await lp.clickoneditLink();
  20 |     await lp.clickonSaveButton();
  21 |     console.log("successfully executed");
  22 | });
  23 | 
  24 | 
```