export class CheckoutPage {
    constructor(page) {
        this.page = page;
    }

    async cancel() {
        await this.page.click('#cancel');
    }

    async continue() {
        await this.page.click('#continue');
    }

    async fillCheckoutInfo(firstname, lastname, zip) {
        await this.page.fill('#first-name', firstname);
        await this.page.fill('#last-name', lastname);
        await this.page.fill('#postal-code', zip);
    }

    async finish() {
        await this.page.click('#finish');
    }

    async getConfirmationMessage() {
        return this.page.locator('#checkout_complete_container');
    }
}