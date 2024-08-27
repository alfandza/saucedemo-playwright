const { test, expect } = require('@playwright/test');
const { loginFlow, selectHowManyItems } = require('./function/function.js');

const loginUser = 'standard_user'

const passwordUser = 'secret_sauce'

test.beforeEach('Select 2 Item', async ({ page }) => {
    await loginFlow(page, loginUser, passwordUser);

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Select 2 Item', async ({ page }) => {
    await page.waitForSelector('.inventory_list');

    await selectHowManyItems(page, 2)
});

test('Select 3 Item', async ({ page }) => {
    await page.waitForSelector('.inventory_list');

    await selectHowManyItems(page, 3)
});

test('Select 4 Item', async ({ page }) => {
    await page.waitForSelector('.inventory_list');

    await selectHowManyItems(page, 4)
});

