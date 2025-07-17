//cart page
const { test, expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
        this.url = 'https://www.saucedemo.com/cart.html';
        this.cartList = this.page.locator('.cart_list');
        this.checkoutButton = this.page.locator('button[name="checkout"]');
        this.cartLabel = this.page.locator('div.cart_item div.cart_item_label');
        this.cartLabelTitle = this.cartLabel.locator('div.inventory_item_name');
        this.cartLabelDescription = this.cartLabel.locator('div.inventory_item_desc');

    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = CartPage;