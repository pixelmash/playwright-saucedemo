import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { testData } from '../testData';


test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(testData.users.standard.username, testData.users.standard.password);
});

test('cart badge number', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart(testData.products.onesie.slug);
    let cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
});

test('add to cart add item to the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart(testData.products.onesie.slug);
    await page.click('#shopping_cart_container');
    await expect(page).toHaveURL(new RegExp(testData.urls.cart));
    let itemTitle = page.locator('.inventory_item_name');
    await expect(itemTitle).toHaveText(testData.products.onesie.displayName);
});

test('remove item from the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart(testData.products.onesie.slug);
    await page.click('#shopping_cart_container');
    await page.locator(`[data-test="remove-${testData.products.onesie.slug}"]`).click();
    let cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveCount(0);
});

