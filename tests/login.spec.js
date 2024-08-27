const { test, expect } = require('@playwright/test');
const { loginFlow } = require('./function/function.js');

const loginUser = [
    'standard_user',
    'wronguser',
    'locked_out_user'
]
const passwordUser = 'secret_sauce'

test('Correct Login', async ({ page }) => {
    await loginFlow(page, loginUser[0], passwordUser);

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Wrong Username/Password', async({ page }) => {
    await loginFlow(page, loginUser[1], passwordUser);

    const notification = await page.locator('[data-test="error"]');
    
    await expect(notification).toBeVisible();

    await expect(notification).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Locked Out Username', async({ page }) => {
    await loginFlow(page, loginUser[2], passwordUser);

    const notification = await page.locator('[data-test="error"]');
    
    await expect(notification).toBeVisible();

    await expect(notification).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});