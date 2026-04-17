import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly title: Locator;
  readonly checkoutButton: Locator;
  readonly cartItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.cartItems = page.locator('[data-test="inventory-item"]');
  }

  cartItemName(productName: string): Locator {
    return this.page.locator('[data-test="inventory-item-name"]', {
      hasText: productName,
    });
  }

  async validateCartLoaded() {
    await expect(this.title).toHaveText('Your Cart');
    await expect(this.cartItems).toHaveCount(1);
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}