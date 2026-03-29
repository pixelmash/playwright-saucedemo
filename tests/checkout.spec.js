import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { testData } from '../testData';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(testData.users.standard.username, testData.users.standard.password);
});

test('navigates to checkout page', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart(testData.products.bikeLight.slug);
    const cartPage = new CartPage(page);
    await cartPage.goToCart();
    await cartPage.checkout();
    await expect(page).toHaveURL(new RegExp(testData.urls.checkoutOne));
});

test('checkout form validation shows error', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart(testData.products.bikeLight.slug);
    const cartPage = new CartPage(page);
    await cartPage.goToCart();
    await cartPage.checkout();
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.continue();
    await expect(page.locator('.error-message-container')).toBeVisible();
});

test('full checkout', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart(testData.products.bikeLight.slug);
    const cartPage = new CartPage(page);
    await cartPage.goToCart();
    await cartPage.checkout();
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillCheckoutInfo(testData.checkoutInfo.valid.firstName, testData.checkoutInfo.valid.lastName, testData.checkoutInfo.valid.zip);
    await checkoutPage.continue();
    await expect(page).toHaveURL(new RegExp(testData.urls.checkoutTwo));
    await checkoutPage.finish();
    await expect(await checkoutPage.getConfirmationMessage()).toBeVisible();
});