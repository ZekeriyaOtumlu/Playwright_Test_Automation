import {test, expect, type Browser, type BrowserContext, type Page, type Locator} from '@playwright/test';
import { chromium, webkit } from '@playwright/test';

test('Auth Test', async () => { 
    const browser: Browser = await chromium.launch({headless: false});
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();
    // await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    // OR - we can use below approach
    const username = 'admin';
    const password = 'admin';
    const authHeader = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
    // const authHeader = 'Basic ' + btoa(username + ':' + password); -- same as above
    // await page.setExtraHTTPHeaders({ 'Authorization': authHeader });
    //Using with method
    await page.setExtraHTTPHeaders({ 'Authorization': createAuthHeader(username, password) });



    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    // const heading: Locator = page.locator('h2');
    // await expect(heading).toHaveText('Basic Auth');
    // await page.screenshot({ path: 'auth-screenshot.png' });
    // await context.close();
    // await browser.close();
    });

    function createAuthHeader(username:any, password: any) {
        return 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
        //OR
        // return 'Basic ' + btoa(username + ':' + password);
    }
   