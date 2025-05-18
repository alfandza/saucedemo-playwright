const base = require('@playwright/test').test;
const LoginPage = require('./login.js');
const InventoryPage = require('./inventory.js');
const CartPage = require('./cart.js');
const CheckoutPage = require('./checkout.js');


const test = base.extend({
    login: async ({ page }, use) => {
        const login = new LoginPage(page);
        await use(login);
    },
    inventory: async ({ page }, use) => {
        const inventory = new InventoryPage(page);
        await use(inventory);
    },
    cart: async ({ page }, use) => {
        const cart = new CartPage(page);
        await use(cart);
    },
    checkout: async ({ page }, use) => {
        const checkout = new CheckoutPage(page);
        await use(checkout);
    },
});

module.exports = { test, expect: base.expect };