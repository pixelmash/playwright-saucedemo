import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');
});

test('number of items in the inventory', async ({ page }) => {
    await expect(page.locator('.inventory_item')).toHaveCount(6);
});

test('default sort order of items in the inventory', async ({ page }) => {
    let itemTitle = page.locator('.inventory_item_name').first();
    await expect(itemTitle).toHaveText('Sauce Labs Backpack');
});

test('sorting order for Price (low to high)', async ({ page }) => {
    await page.selectOption('.product_sort_container', 'lohi');
    let itemTitle = page.locator('.inventory_item_name').first();
    await expect(itemTitle).toHaveText('Sauce Labs Onesie');
});


