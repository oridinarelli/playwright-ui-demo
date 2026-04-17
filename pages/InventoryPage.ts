import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;
  readonly inventoryItems: Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
  }

  addToCartButton(productName: string): Locator {
    return this.page.locator(
      `[data-test="add-to-cart-${productName.toLowerCase().replaceAll(' ', '-')}"]`
    );
  }

  removeButton(productName: string): Locator {
    return this.page.locator(
      `[data-test="remove-${productName.toLowerCase().replaceAll(' ', '-')}"]`
    );
  }

  async validateInventoryLoaded() {
    await expect(this.title).toHaveText('Products');
    await expect(this.inventoryItems).toHaveCount(6);
  }

  async addProductToCart(productName: string) {
    await this.addToCartButton(productName).click();
  }

  async removeProductFromCart(productName: string) {
    await this.removeButton(productName).click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async sortBy(optionValue: string) {
    await this.sortDropdown.selectOption(optionValue);
  }
}