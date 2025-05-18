// Import the test fixture
const { test, expect } = require('./pages/test_fixture.js');

require('dotenv').config();

test.beforeEach('Select 2 Item', async ({ page, login, inventory }) => {
    await login.loginUser(process.env.USERNAME, process.env.PASSWORD);

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await expect(inventory.inventoryList).toBeVisible();
});

test.describe('Select Item', () => {
    
    [   
        {items : 2},
        {items : 3},
        {items : 4},

    ].forEach(({ items }) => {
        test(`Select ${items} items`, async ({ inventory }) => {
            await inventory.selectHowManyItems(items);
        });
    });

    [   
        {items : 2, itemsRemoved : 1},
        {items : 3, itemsRemoved : 2},
        {items : 4, itemsRemoved : 3},

    ].forEach(({ items, itemsRemoved }) => {
        test(`Select ${items} items and remove ${itemsRemoved} item`, async ({ inventory }) => {
            await inventory.selectHowManyItems(items);
            await inventory.removeItem(items, itemsRemoved);
        });
    });
});

