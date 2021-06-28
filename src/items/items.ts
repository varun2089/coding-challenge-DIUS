
const pricingRules: Product[] = [
  {
    sku: 'ipd',
    name: 'Super iPad',
    price: 549.99,
    deal: {
      type: 'BulkDiscount',
      quantityRequired: 4,
      discountedPrice: 499.99,
    },
  },
  {
    sku: 'mbp',
    name: 'MacBook Pro',
    price: 1399.99,
    deal: {
      type: 'FreeProduct',
      freeProductSKU: 'vga',
    },
  },
  {
    sku: 'atv',
    name: 'Apple TV',
    price: 109.50,
    deal: {
      type: '3for2Deal',
      quantityRequired: 3,
      discountedVolume: 1,
    },
  },
  {
    sku: 'vga',
    name: 'VGA adapter',
    price: 30.00,
  },
];

export default pricingRules;
