import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';


test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');
});

test('cart badge number', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart('sauce-labs-onesie');
    let cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
});

test('add to cart add item to the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart('sauce-labs-onesie');
    await page.click('#shopping_cart_container');
    await expect(page).toHaveURL(/cart/);
    let itemTitle = page.locator('.inventory_item_name');
    await expect(itemTitle).toHaveText('Sauce Labs Onesie');
});

test('remove item from the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart('sauce-labs-onesie');
    await page.click('#shopping_cart_container');
    await page.locator('[data-test="remove-sauce-labs-onesie"]').click();
    let cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveCount(0);
});

