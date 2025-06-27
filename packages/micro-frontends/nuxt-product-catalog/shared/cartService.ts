import type { Product } from '@/types/types';

const bc = new BroadcastChannel('/cart');

export const CartService = {
  addToCart(product: Product) {
    try {
      const cleanProduct = JSON.parse(JSON.stringify(product));

      console.log('Broadcasting add_to_cart to /cart channel', cleanProduct);
      bc.postMessage({ type: 'add_to_cart', product: cleanProduct });
    } catch (error) {
      console.error('Failed to broadcast product:', error);
    }
  }
}
