import SpecialDeals from '../deals/SpecialDeals';

class Checkout implements ICheckout {
    public scannedItems: CheckoutCart;
    public pricingRules: Product[];

    constructor(pricingRules: Product[]) {
      this.pricingRules = pricingRules;
      this.scannedItems = {};
    }

    scan(itemSKU: string): void {
      const item: Product = this.pricingRules.find((rule: Product) => rule.sku === itemSKU) as Product;
        this.scannedItems[itemSKU] ? this.scannedItems[itemSKU].quantity ++ : this.scannedItems[itemSKU] = {quantity: 1, price: item.price};
    }

    getItemQuantity(sku: string): number {
      return this.scannedItems[sku].quantity;
    }

    total(): number {
      let totalCheckoutPrice = 0;
      const specialDeals = new SpecialDeals(this);
      Object.keys(this.scannedItems).forEach((itemSKU) => {
        const product: Product = this.pricingRules.find((pricingRule: Product) => pricingRule.sku === itemSKU) as Product;

        switch (product.deal?.type) {
          case 'BulkDiscount':
            specialDeals.bulkDiscount(itemSKU, product.deal.quantityRequired as number, product.deal.discountedPrice as number);
            break;
          case 'FreeProduct':
            specialDeals.freeProduct(itemSKU, product.deal.freeProductSKU as string);
            break;
          case '3for2Deal':
            specialDeals.threeForTwoDeal(itemSKU, product.deal.quantityRequired as number, product.deal.discountedVolume as number);
            break;
          default:
        }

        const itemQuantity = this.getItemQuantity(itemSKU);
        const checkoutPrice = this.scannedItems[itemSKU].price * itemQuantity;
        totalCheckoutPrice += checkoutPrice;
      });

      return totalCheckoutPrice;
    }
}

export default Checkout;
