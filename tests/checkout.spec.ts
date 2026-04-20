import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { users } from '../fixtures/users';
import { checkoutData } from '../fixtures/checkoutData';

test.describe('Checkout', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();
  });

  test('user can complete checkout successfully @smoke @regression', async ({ page }) => {
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await cartPage.validateCartLoaded();
    await expect(cartPage.cartItemName('Sauce Labs Backpack')).toBeVisible();

    await cartPage.clickCheckout();
    await checkoutPage.validateCheckoutStepOneLoaded();

    await checkoutPage.fillCheckoutInformation(
      checkoutData.validUserInfo.firstName,
      checkoutData.validUserInfo.lastName,
      checkoutData.validUserInfo.postalCode
    );

    await checkoutPage.continueCheckout();
    await checkoutPage.validateCheckoutOverviewLoaded();

    await checkoutPage.finishCheckout();
    await checkoutPage.validateCheckoutComplete();
  });

  test('user sees error when required checkout data is missing @regression', async ({
    page,
  }) => {
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await cartPage.clickCheckout();
    await checkoutPage.validateCheckoutStepOneLoaded();

    await checkoutPage.continueCheckout();

    await expect(checkoutPage.errorMessage).toBeVisible();
    await expect(checkoutPage.errorMessage).toContainText('First Name is required');
  });
});