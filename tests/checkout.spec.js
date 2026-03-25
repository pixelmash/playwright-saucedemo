import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
});

test('navigates to checkout page', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart('sauce-labs-bike-light');
    await page.click('#shopping_cart_container');
    await page.click('#checkout');
    await expect(page).toHaveURL(/checkout-step-one/);
});

test('checkout form validation shows error', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart('sauce-labs-bike-light');
    await page.click('#shopping_cart_container');
    await page.click('#checkout');
    await page.click('#continue');
    await expect(page.locator('.error-message-container')).toBeVisible();
});