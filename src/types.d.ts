
declare type Product = {
     sku: string,
     name: string,
     price: number,
     deal?: Deal
}

declare type ScannedProduct = {
     quantity: number,
     price: number,
}

declare type Deal = {
     type: string,
     quantityRequired?: number,
     discountedPrice?: number,
     freeProductSKU?: string,
     discountedVolume?: number
}

declare interface IDeals {
     bulkDiscount(itemSKU: string, discountQty: number, discountedUnitPrice: number): void,
     freeProduct(itemSKU: string, targetSKU: string): void,
     threeForTwoDeal(itemSKU: string, discountQty: number, discountQtyVolume: number): void
}

declare interface ICheckout {
     scan(itemSKU: string): void,
     getItemQuantity(sku: string): number
     total(state: CheckoutCart): number
}

declare interface CheckoutCart {
     [key: string]: ScannedProduct;
}
