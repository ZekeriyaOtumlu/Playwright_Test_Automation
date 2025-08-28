import {test, expect, type Browser, type BrowserContext, type Page, type Locator} from '@playwright/test';
import { chromium, webkit } from '@playwright/test';

test('DropDown Test', async () => { 
    const browser: Browser = await chromium.launch({headless: false});  
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();
    await page.goto('https://blazedemo.com/login');
    const emailId = page.locator('[name="email"]');
    const password = page.locator('[name="password"]');
    const loginButton = page.locator('a.navbar-brand');

    await emailId.fill("otumluz2020@gmail.com");
    await password.fill("password123");
    await page.waitForTimeout(5000);
    await loginButton.click();
    await page.waitForTimeout(2000);

    //dropdown
    const countryFrom = 'select[name="fromPort"]';
    await page.selectOption(countryFrom, { value: 'San Diego'}); //by value
    await page.waitForTimeout(3000);

    const countryTo = 'select[name="toPort"]';
    await page.selectOption(countryTo, { index: 2}); //by index
    await page.waitForTimeout(3000);

    // select[name="fromPort"] give me all options 
    const allOptions = await page.$$(countryFrom + ' > option')
    console.log(`Total options in FromPort dropdown: ${allOptions.length}`);
    for (const option of allOptions) {
        const text = await option.textContent();
        console
        if (text?.trim() === 'New York') {
            const value = await option.getAttribute('value');
            console.log(`Value of option New York is: ${value}`);
            await page.selectOption(countryFrom, { value: value!});
            break;
        }
        console.log(await option.textContent());
    }
});
