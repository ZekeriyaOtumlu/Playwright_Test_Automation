import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
    await page.goto('https://blazedemo.com/login');
    const emailId = page.locator('[name="email"]');
    const password = page.locator('[name="password"]');
    const loginButton = page.locator('a.navbar-brand');

    await emailId.fill("otumluz2020@gmail.com");
    await password.fill("password123");
    await loginButton.click();
    await page.waitForTimeout(2000);

    const title = await page.title();
    console.log(`Page title is: ${title}`);
    await page.screenshot({ path: 'login-screenshot.png' });
    await page.waitForTimeout(2000);
    await expect(title).toBe('BlazeDemo');
    await expect(page).toHaveURL('https://blazedemo.com/');
    await expect(page.locator('h1')).toHaveText('Welcome to the Simple Travel Agency!');
});