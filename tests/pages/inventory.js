//inventory class
const { test, expect } = require('@playwright/test');

class InventoryPage {
    constructor(page) {
        this.page = page;
        this.url = 'https://www.saucedemo.com/inventory.html';
        this.inventoryList = this.page.locator('.inventory_list');
        this.buttonSelect = this.page.locator('.btn.btn_primary.btn_small.btn_inventory');
        this.buttonRemove = this.page.locator('.btn.btn_secondary.btn_small.btn_inventory');
        this.cartChoose = this.page.locator('[class="shopping_cart_badge"]');
        this.shoppingCart = this.page.locator('a[class="shopping_cart_link"]');
    }

    async selectHowManyItems(items) {
        for (let i = 0; i < items; i++) {
            await this.buttonSelect.nth(0).click();
        }
        await expect(this.cartChoose).toBeVisible();
        await expect(this.cartChoose).toHaveText(items.toString());
    }

    async removeItem(items, itemsRemoved) {
        for (let i = 0; i < itemsRemoved; i++) {
            await this.buttonRemove.nth(0).click();
        }

        await expect(this.cartChoose).toBeVisible();
        await expect(this.cartChoose).toHaveText((items - itemsRemoved).toString());
    }
}

module.exports = InventoryPage;