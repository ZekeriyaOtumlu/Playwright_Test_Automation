import {test, expect, type Browser, type BrowserContext, type Page, type Locator} from '@playwright/test';
import { chromium, webkit } from '@playwright/test';

test('Drag and Drop Test', async () => {
     const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    //maximize window
    const context: BrowserContext = await browser.newContext({
        viewport: { width: 1920, height: 1080 }
    });
    const page: Page = await context.newPage();
    await page.goto('https://jqueryui.com/droppable/');
    await page.waitForTimeout(5000);
    const frameLocator = page.frameLocator('.demo-frame');
    // Drag and drop inside iframe
    await frameLocator.locator('#draggable').dragTo(frameLocator.locator('#droppable'));
  
});