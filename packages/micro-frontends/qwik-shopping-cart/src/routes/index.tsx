import { component$ } from '@builder.io/qwik';
import { ShoppingCart } from '../components/shopping-cart/shopping-cart';

export default component$(() => {
  return (
    <div>
      <ShoppingCart />
    </div>
  );
});
