import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../testData';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(testData.users.standard.username, testData.users.standard.password);
});

test('number of items in the inventory', async ({ page }) => {
    await expect(page.locator('.inventory_item')).toHaveCount(6);
});

test('default sort order of items in the inventory', async ({ page }) => {
    let itemTitle = page.locator('.inventory_item_name').first();
    await expect(itemTitle).toHaveText(testData.products.backpack.displayName);
});

test('sorting order for Price (low to high)', async ({ page }) => {
    await page.selectOption('.product_sort_container', 'lohi');
    let itemTitle = page.locator('.inventory_item_name').first();
    await expect(itemTitle).toHaveText(testData.products.onesie.displayName);
});


test('inventory page visual snapshot', async ({ page }) => {
  await expect(page).toHaveScreenshot('inventory.png');
});
