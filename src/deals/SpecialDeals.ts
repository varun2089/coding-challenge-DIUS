import Checkout from '../checkout/Checkout';


class SpecialDeals implements IDeals {
    private checkout: Checkout;

    constructor(Checkout: Checkout) {
      this.checkout = Checkout;
    }

    bulkDiscount(itemSKU: string, discountQty: number, discountedUnitPrice: number) {
      const qty = this.checkout.getItemQuantity(itemSKU);
      if (qty > discountQty) {
        this.checkout.scannedItems[itemSKU].price = discountedUnitPrice;
      }
    }

    freeProduct(itemSKU: string, targetSKU: string) {
      const quantity = this.checkout.getItemQuantity(itemSKU);
      this.checkout.scannedItems[targetSKU].quantity = this.checkout.getItemQuantity(targetSKU) - quantity;
    }

    threeForTwoDeal(itemSKU: string, discountQty: number, discountQtyVolume: number) {
      const quantity = this.checkout.getItemQuantity(itemSKU);
      if (quantity >= discountQty) {
        this.checkout.scannedItems[itemSKU].quantity -= discountQtyVolume;
      }
    }
}

export default SpecialDeals;
