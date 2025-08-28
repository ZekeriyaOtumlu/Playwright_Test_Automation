import {test, expect, type Browser, type BrowserContext, type Page, type Locator} from '@playwright/test';
import { chromium, webkit } from '@playwright/test';

test('Locators Test', async () => {
    const browser: Browser = await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https:blazedemo.com/login');

    //create web elements(locators) and perform the actions
    // 1. ID locator:
    const emailId: Locator = page.locator('id=email'); //or page.locator('[id="email"]');
    const password: Locator = page.locator('id=password');

    await emailId.fill("otumluz2020@gmail.com");
    await password.fill("password123");

    //2. Class Name locator:
    const logo: Locator = page.locator('.navbar-brand'); //or page.locator('[class="navbar-brand"]');
    const logoExist = await logo.isEnabled(); //true or false
    page.waitForTimeout(2000);
    console.log(`Logo is enabled: ${logoExist}`);

    //3. Text locator:
    const header:Locator = page.locator('text= Remember Me '); //or page.locator('text=" Remember Me"');
    const headerExist = await header.isVisible(); //true or false
    console.log(`Header is visible: ${headerExist}`);

    //4. CSS locator:
    const emailAddress: Locator = page.locator('css=input#email'); //id
    const passwordField: Locator = page.locator('css=input[name="password"]');//name
    const rememberMeCheckbox: Locator = page.locator('css=input[type="checkbox"]'); //class

    await emailAddress.isVisible();
     console.log(`emailAddress is visible: ${emailAddress}`);
    await passwordField.isEditable();
    console.log(`passwordField is editable: ${passwordField}`);
    await rememberMeCheckbox.click();
    const isChecked = await rememberMeCheckbox.isChecked();
    console.log(`rememberMeCheckbox is checked: ${isChecked}`);

    //5. XPath locator:
    const emailField: Locator = page.locator('xpath=//input[@id="email"]'); //id
    const loginBtn: Locator = page.locator("xpath=//button[@type='submit' and @class='btn btn-primary' ]");

    await emailField.isEditable();
    console.log(`emailField is editable: ${emailField}`);
    await loginBtn.isEnabled();
    console.log(`loginBtn is enabled: ${loginBtn}`);

    await new Promise(f => setTimeout(f, 5000)); //static wait
});      