
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('title check', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await expect(page).toHaveTitle(/Swag Labs/);
});


test('login navigates to inventory', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});

test('failed login shows error message', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', crypto.randomUUID().substring(0,8));
  await page.fill('#password', crypto.randomUUID().substring(0,8));
  await page.click('#login-button');
  await expect(page.locator('.error-message-container')).toBeVisible();
});

