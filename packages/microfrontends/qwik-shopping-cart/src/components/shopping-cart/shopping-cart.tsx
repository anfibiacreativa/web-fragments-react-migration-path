import { component$, useStore, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';
import { initialProducts } from '../../data/data';
import './shopping-cart.css';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Product {
  id: number;
  name: string; 
  description: string;
  price: number;
  color: string;
  size: string;
  imageUrl: string;
  rating: number;
}

export const ShoppingCart = component$(() => {
  const cart = useStore<{ items: CartItem[]; message: string }>({ items: [], message: '' });

  const saveCartToLocalStorage = $(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart.items));
  });

  const progress = useSignal(0);

  const clearCart = $(() => {
    cart.items = [];
    saveCartToLocalStorage();

    const bc = new BroadcastChannel('/cart');
    bc.postMessage({ type: 'cart_cleared' });
    bc.close();
  });


  // proceed to checkout
  const checkout = $(async () => {
    const userId = 'fake_user_id';
    const currency = 'EUR';
    const totalAmount = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const payment_endpoint = 'http://localhost:3000/create-payment';

    try {
      const response = await fetch(payment_endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalAmount,
          currency,
          userId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to create payment: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Payment intent created:', data);

      cart.message = 'Payment completed. Processing the order. You will get your swag soon!';
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 50;
        progress.value = currentProgress;

        if (currentProgress >= 100) {
          clearInterval(interval);
          clearCart();
          setTimeout(() => {
            cart.message = '';
          }, 1000);
        }
      }, 1000);
    } catch (error) {
      console.error('Checkout error:', error);
    }
  });


  // remove all instances of a product
  const removeItems = $((id: number) => {
    cart.items = cart.items.filter((item) => item.product.id !== id);
    saveCartToLocalStorage();
  });

  // remove one instance of a product
  const removeItem = $((id: number) => {
    const itemIndex = cart.items.findIndex((item) => item.product.id === id);
    if (itemIndex !== -1) {
      const item = cart.items[itemIndex];
      if (item.quantity > 1) {
        cart.items[itemIndex] = { ...item, quantity: item.quantity - 1 };
      } else {
        cart.items = cart.items.filter((item) => item.product.id !== id);
      }
    }
    saveCartToLocalStorage();
  });

  // add one more instance of a product
  const addItem = $((product: Product) => {
    const itemIndex = cart.items.findIndex((item) => item.product.id === product.id);
    if (itemIndex !== -1) {
      const item = cart.items[itemIndex];
      cart.items[itemIndex] = { ...item, quantity: item.quantity + 1 };
    } else {
      cart.items.push({ product, quantity: 1 });
    }
    saveCartToLocalStorage();
  });

  // update product quantity
  const updateQuantity = $((id: number, quantity: number) => {
    const itemIndex = cart.items.findIndex((item) => item.product.id === id);
    if (itemIndex !== -1) {
      if (quantity > 0) {
        cart.items[itemIndex] = { ...cart.items[itemIndex], quantity };
      } else {
        cart.items = cart.items.filter((item) => item.product.id !== id);
      }
    }
    saveCartToLocalStorage();
  });

  const total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // load cart from localStorage or fallback to initial products
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        cart.items = parsedCart;
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
        cart.items = [...initialProducts];
        saveCartToLocalStorage();
      }
    } else {
      cart.items = [...initialProducts];
      saveCartToLocalStorage();
    }

    const handleMessage = (event: MessageEvent) => {
      const { type, product } = event.data;
      if (type === 'add_to_cart') {
        addItem(product);
      }
    };
    const bc = new BroadcastChannel("/cart");
    bc.addEventListener('message', handleMessage);

    return () => {
      bc.removeEventListener('message', handleMessage);
    };
  });

  return (
    <>
      <div class="cart">
        <h3 class="subtitle">Your Shopping Cart</h3>

        {cart.message ? (
          <>
          <p class="success-message">{cart.message}</p>
          <div class="progress-bar">
            <div class="progress" style={{ width: `${progress.value}%` }}></div>
          </div>
         </>
        ) : cart.items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul class="cart-items">
              {cart.items.map((item) => (
                <li key={item.product.id} class="cart-item">
                  <img src={item.product.imageUrl} alt={item.product.name} width="80" height="80" />
                  <div class="item-details">
                    <h3 class="subtitle">{item.product.name}</h3>
                    <p>${item.product.price.toFixed(2)}</p>
                  </div>
                  <div class="cart-items-footer">
                    <div class="quantity-controls">
                      <button class="btn" onClick$={() => removeItem(item.product.id)}>-</button>
                      <input
                        class="quantity-input"
                        type="number"
                        value={item.quantity}
                        min="1"
                        onInput$={(e) =>
                          updateQuantity(item.product.id, parseInt((e.target as HTMLInputElement).value, 10))
                        }
                      />
                      <button class="btn" onClick$={() => addItem(item.product)}>+</button>
                      <button class="btn remove-btn" onClick$={() => removeItems(item.product.id)}>
                        x
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div class="cart-summary">
              <p class="total">Total: ${total.toFixed(2)}</p>
            </div>
            <button class="btn btn-primary" onClick$={checkout}>
              Proceed to checkout
            </button>
          </>
        )}
      </div>
    </>
  );
});
