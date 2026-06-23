# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logintc.spec.ts >> login to naukari
- Location: tests\logintc.spec.ts:6:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Jobs - Recruitment - Job Search - Employment - Job Vacancies - Naukri.com"
Received string:    "Access Denied"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Access Denied" [level=1] [ref=e2]
  - text: You don't have permission to access "http://www.naukri.com/" on this server.
  - paragraph [ref=e3]: "Reference #18.1643c717.1782183121.521debda"
  - paragraph [ref=e4]: https://errors.edgesuite.net/18.1643c717.1782183121.521debda
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
  9  |     await page.goto(data.URL);
  10 |     const title = await page.title();
> 11 |     await expect(title).toContain(data.title);
     |                         ^ Error: expect(received).toContain(expected) // indexOf
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