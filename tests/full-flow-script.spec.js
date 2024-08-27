const { test, expect } = require('@playwright/test');
const { loginFlow, selectItemRandomly, removeItemRandomly } = require('./function/function.js');

const loginUser = 'standard_user'

const passwordUser = 'secret_sauce'

test.beforeEach('Select 2 Item', async ({ page }) => {
    await loginFlow(page, loginUser, passwordUser);

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Full Flow', async ({ page }) => {
    await page.waitForSelector('.inventory_list');

    await selectItemRandomly(page);

    await removeItemRandomly(page);

    //Click shopping cart
    await page.click('a[class="shopping_cart_link"]');

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    //Click Checkout
    await page.click('button[name="checkout"]');

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

    //Fill Forms
    await page.fill('input[name="firstName"]','Ekananda')

    await page.fill('input[name="lastName"]','Fajar')

    await page.fill('input[name="postalCode"]','50517')

    await page.click('input[name="continue"]')

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

    //Finishing checkout
    await page.click('button[name="finish"]')

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

    //Back to page
    await page.click('button[name="back-to-products"]')

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});