//cart page
const { test, expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
        this.url = 'https://www.saucedemo.com/cart.html';
        this.cartList = this.page.locator('.cart_list');
        this.checkoutButton = this.page.locator('button[name="checkout"]');
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = CartPage;