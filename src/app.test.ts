import Checkout from '../src/checkout/Checkout';
import catalogue from '../src/items/items';
import {handler} from './app';

describe('Test app', () => {
  it('should test 3 for 2 deal', () => {
    expect(handler()).toBe(249);
  });

  it('should test bulk discount', () => {
    const checkout = new Checkout(catalogue);
    checkout.scan('atv');
    checkout.scan('ipd');
    checkout.scan('ipd');
    checkout.scan('atv');
    checkout.scan('ipd');
    checkout.scan('ipd');
    checkout.scan('ipd');

    const total = checkout.total();

    expect(total).toBe(2718.95);
  });

  it('should test free VGA adapter scenario', () => {
    const checkout = new Checkout(catalogue);
    checkout.scan('mbp');
    checkout.scan('vga');
    checkout.scan('ipd');

    const total = checkout.total();

    expect(total).toBe(1949.98);
  });
});
