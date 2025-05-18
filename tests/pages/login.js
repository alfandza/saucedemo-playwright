// Init Test Case
const { test, expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginUsername = this.page.locator('#user-name');
        this.loginPassword = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-button');
        this.loginErrorNotification = this.page.locator('[data-test="error"]');
    }

    async loginUser(username, password) {
        await this.page.goto('https://www.saucedemo.com/');
        await this.page.waitForLoadState('load')
        await expect(this.page).toHaveTitle("Swag Labs");
        await this.loginUsername.fill(username);
        await this.loginPassword.fill(password);
        await this.loginButton.click()
    }
}

module.exports = LoginPage;