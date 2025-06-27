import { component$ } from '@builder.io/qwik';
import { ShoppingCart } from '../../components/shopping-cart/shopping-cart';

// TODO: this whole route should not exist
// we have it here just as a workaround for web-fragments inability to create non-routable fragments
//
// see: https://github.com/web-fragments/web-fragments/blob/81802e6e7f7058d3602765a60908ea355cc1a48d/packages/web-fragments/src/elements/fragment-host.ts#L23
export default component$(() => {
  return (
    <div>
      <ShoppingCart />
    </div>
  );
});
