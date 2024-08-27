
const { test, expect } = require('@playwright/test');

//Flow of login
async function loginFlow (page, username, password) {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle("Swag Labs");
    await page.waitForTimeout(5000);
    expect(page.url()).toBe('https://www.saucedemo.com/');
    await page.fill('#user-name', username)
    await page.fill('#password', password)
    await page.click('#login-button')
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

//Select how many items
async function selectHowManyItems(page, items) {
    const buttons = page.locator('.btn.btn_primary.btn_small.btn_inventory');

    for (let i=1; i<=items;i++) {
        await buttons.nth(0).click();
    }

    const cartChoose = await page.locator('[class="shopping_cart_badge"]')
    await expect(cartChoose).toBeVisible();
    await expect(cartChoose).toHaveText(items.toString());
}

//Select 2 item randomly
async function selectItemRandomly (page) {
    const buttons = page.locator('.btn.btn_primary.btn_small.btn_inventory');

    const randomIntOne = randomInt(0,2)

    const randomIntTwo = randomInt(0,2)

    await buttons.nth(randomIntOne).click();

    await buttons.nth(randomIntTwo).click();

    const cartChoose = await page.locator('[class="shopping_cart_badge"]')

    await expect(cartChoose).toBeVisible();

    await expect(cartChoose).toHaveText('2');
}

//Remove 1 item randomly
async function removeItemRandomly (page) {
    const cartChoose = await page.locator('[class="shopping_cart_badge"]')

    await expect(cartChoose).toBeVisible();

    const buttons = page.locator('.btn.btn_secondary.btn_small.btn_inventory');

    const randomIntOne = randomInt(0,1)

    await buttons.nth(randomIntOne).click();

    await expect(cartChoose).toBeVisible();

    await expect(cartChoose).toHaveText('1');
}

module.exports = { loginFlow, selectItemRandomly, removeItemRandomly, selectHowManyItems };