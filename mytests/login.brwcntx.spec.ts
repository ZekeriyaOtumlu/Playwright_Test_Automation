import {test, expect, type Locator, type BrowserContext, type Browser, type Page} from '@playwright/test';
import { webkit, chromium, firefox } from '@playwright/test';

test('Login Test', async () => {
    const browser: Browser = await chromium.launch({headless: false});

    //browsercontext1:
    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();

    //browsercontext2:
    const context2: BrowserContext = await browser.newContext();
    const page2: Page = await context2.newPage();
    
    //browser1
    await page1.goto('https://blazedemo.com/login');
    const emailId1: Locator = page1.locator('[name="email"]');
    const password1: Locator = page1.locator('[name="password"]');
    const loginButton1: Locator = page1.locator('a.navbar-brand');

    await emailId1.fill("otumluz2020@gmail.com");
    await password1.fill("password123");
    await loginButton1.click();

    //browser2:
    await page2.goto('https://blazedemo.com/login');
    const emailId2: Locator = page2.locator('[name="email"]');
    const password2: Locator = page2.locator('[name="password"]');
    const loginButton2: Locator = page2.locator('a.navbar-brand');

    await emailId2.fill("zekotumlu@gmail.com");
    await password2.fill("newpassword");
    await loginButton2.click();

    await context1.close();
    await context2.close();


});