import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
});

test('navigates to checkout page', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart('sauce-labs-bike-light');
    const cartPage = new CartPage(page);
    await cartPage.goToCart();
    await cartPage.checkout();
    await expect(page).toHaveURL(/checkout-step-one/);
});

test('checkout form validation shows error', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart('sauce-labs-bike-light');
    const cartPage = new CartPage(page);
    await cartPage.goToCart();
    await cartPage.checkout();
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.continue();
    await expect(page.locator('.error-message-container')).toBeVisible();
});

test('full checkout', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart('sauce-labs-bike-light');
    const cartPage = new CartPage(page);
    await cartPage.goToCart();
    await cartPage.checkout();
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillCheckoutInfo('Jack', 'Willson', '50505');
    await checkoutPage.continue();
    await expect(page).toHaveURL(/checkout-step-two/);
    await checkoutPage.finish();
    await expect(await checkoutPage.getConfirmationMessage()).toBeVisible();
});