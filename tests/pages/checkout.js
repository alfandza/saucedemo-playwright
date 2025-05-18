//Checkout page
const { test, expect } = require('@playwright/test');

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.urlOne = 'https://www.saucedemo.com/checkout-step-one.html';
        this.firstName = this.page.locator('input[name="firstName"]');
        this.lastName = this.page.locator('input[name="lastName"]');
        this.zipCode = this.page.locator('input[name="postalCode"]');
        this.continueButton = this.page.locator('input[name="continue"]');

        this.urlTwo = 'https://www.saucedemo.com/checkout-step-two.html';
        this.finishButton = this.page.locator('button[name="finish"]');

        this.urlThree = 'https://www.saucedemo.com/checkout-complete.html';
        this.backToProductsButton = this.page.locator('button[name="back-to-products"]');
    }

    async fillCheckoutForm(firstName, lastName, zipCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipCode.fill(zipCode);
        await this.continueButton.click();
    }
}

module.exports = CheckoutPage;