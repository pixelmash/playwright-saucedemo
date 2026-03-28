export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async goToCart() {
  await this.page.click('#shopping_cart_container');
}
  async continueShopping() {
    await this.page.click('#continue-shopping');
  }

   async checkout() {
    await this.page.click('#checkout');
  }
  
  async cartItemCardCount() {
    return await this.page.locator('.cart_item').count();
}
}