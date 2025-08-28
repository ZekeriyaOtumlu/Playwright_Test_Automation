import {test, expect, type Browser, type BrowserContext, type Page, type Locator} from '@playwright/test';
import { chromium, webkit } from '@playwright/test';

test('Mouse Hower Test', async () => {
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    //maximize window
    const context: BrowserContext = await browser.newContext({
        viewport: { width: 1920, height: 1080 }
    });
    const page: Page = await context.newPage();

    // First website
    // await page.goto('https://www.spicejet.com/');
    // await page.waitForTimeout(5000);

    // //Mouse Hower
    // await page.getByText('Add-ons').first().hover(); // getting first element text=Add-ons
    // await page.waitForTimeout(3000);
    // await page.getByText('Visa Services').first().click();
    // //OR
    // // await page.getByText('Visa Services').nth(2).click();
    // await page.waitForTimeout(5000);
    

    //Second website - with different website:
    await page.goto('https://www.bigbasket.com/');
    await page.locator("//div[contains(., 'Shop by') and contains(., 'Category')]").last().click();
    // await page.getByText('Category').click();
    await page.waitForTimeout(4000);
    // await page.getByText('Beverages').hover();
    await page.locator("//a[text()='Beverages']").last().hover();
    await page.waitForTimeout(3000);
    // await page.getByText('Coffee').hover();
    await page.locator("//a[text()='Coffee']").last().hover();
    await page.waitForTimeout(3000);
    // await page.getByText('Ground Coffee').click();
    await page.locator("//a[text()='Ground Coffee']").click();
    await page.waitForTimeout(5000);
    await context.close();
    await browser.close();

   
});