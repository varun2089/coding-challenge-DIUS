import Checkout from '../checkout/Checkout';
import pricingRules from '../items/items';


const findTotalPrice = () => {
  const co = new Checkout(pricingRules);
  co.scan('atv');
  co.scan('atv');
  co.scan('atv');
  co.scan('vga');

  return co.total();
};


export default findTotalPrice;
