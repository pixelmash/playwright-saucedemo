
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../testData';

test('title check', async ({ page }) => {
  await page.goto(testData.urls.root);
  await expect(page).toHaveTitle(/Swag Labs/);
});

test.describe('Login tests', () => {
  test('login navigates to inventory', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(testData.users.standard.username, testData.users.standard.password);
    await expect(page).toHaveURL(new RegExp(testData.urls.inventory));

  });

  test('failed login shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(testData.users.locked_out.username, testData.users.locked_out.password);
    await expect(page.locator('.error-message-container')).toBeVisible();
  });

});