export class InventoryPage {
  constructor(page) {
    this.page = page;
  }

  async addToCart(itemName) {
    await this.page.click(`#add-to-cart-${itemName}`);
  }
}