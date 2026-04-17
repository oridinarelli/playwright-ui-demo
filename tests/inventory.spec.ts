import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { users } from '../fixtures/users';

test.describe('Inventory', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
  });

  test('inventory page loads successfully', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await expect(page).toHaveURL(/inventory\.html/);
    await inventoryPage.validateInventoryLoaded();
  });

  test('user can add a product to the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const productName = 'Sauce Labs Backpack';

    await inventoryPage.addProductToCart(productName);

    await expect(inventoryPage.cartBadge).toBeVisible();
    await expect(inventoryPage.cartBadge).toHaveText('1');
    await expect(inventoryPage.removeButton(productName)).toBeVisible();
  });

  test('user can remove a product from the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const productName = 'Sauce Labs Backpack';

    await inventoryPage.addProductToCart(productName);
    await expect(inventoryPage.cartBadge).toHaveText('1');

    await inventoryPage.removeProductFromCart(productName);

    await expect(inventoryPage.cartBadge).toHaveCount(0);
    await expect(inventoryPage.addToCartButton(productName)).toBeVisible();
  });

  test('user can sort products by name A to Z', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.sortBy('az');

    const itemNames = page.locator('[data-test="inventory-item-name"]');

    await expect(itemNames.first()).toHaveText('Sauce Labs Backpack');
    await expect(itemNames.last()).toHaveText('Test.allTheThings() T-Shirt (Red)');
  });
});