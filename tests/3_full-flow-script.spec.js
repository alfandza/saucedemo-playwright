// Import the test fixture
const { test, expect } = require('./pages/test_fixture.js');

require('dotenv').config();

test.beforeEach(async ({ page, login, inventory }) => {
    await login.loginUser(process.env.USERNAME, process.env.PASSWORD);
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await expect(inventory.inventoryList).toBeVisible();
});

test('Full Flow', async ({ page, inventory, cart, checkout }) => {

    //Select 3 items
    const items = 3;
    const itemsRemoved = 1;

    await inventory.selectHowManyItems(items);

    await inventory.removeItem(items, itemsRemoved);

    //Click shopping cart
    await inventory.shoppingCart.click();

    await expect(page).toHaveURL(cart.url);

    await expect(cart.cartList).toBeVisible();

    //Click Checkout
    await cart.checkoutButton.click();

    await expect(page).toHaveURL(checkout.urlOne);

    //Fill Forms
    await checkout.fillCheckoutForm('Ekananda', 'Fajar', '50517');

    await expect(page).toHaveURL(checkout.urlTwo);

    //Finishing checkout
    await checkout.finishButton.click();

    await expect(page).toHaveURL(checkout.urlThree);

    //Back to page
    await checkout.backToProductsButton.click();

    await expect(page).toHaveURL(inventory.url);
});