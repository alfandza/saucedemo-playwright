// Import the test fixture
const { test, expect } = require('./pages/test_fixture.js');

require('dotenv').config();

test.describe('Login Test', () => {
    test('Correct Login', async ({ page, login }) => {
        await login.loginUser(process.env.USERNAME, process.env.PASSWORD);
    
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });
    
    test('Wrong Username/Password', async({ login }) => {
        await login.loginUser(process.env.USERNAME_WRONG, process.env.PASSWORD);
    
        await expect(login.loginErrorNotification).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });
    
    test('Locked Out Username', async({ login }) => {
        await login.loginUser(process.env.USERNAME_LOCKED, process.env.PASSWORD);
    
        await expect(login.loginErrorNotification).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
});