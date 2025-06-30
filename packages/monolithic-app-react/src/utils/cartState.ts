import { useState, useEffect } from 'react';

const CART_STORAGE_KEY = 'cart';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

const getInitialCart = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return []; // Return an empty cart during SSR
};

let cart: CartItem[] = getInitialCart();
const listeners: Set<() => void> = new Set();

const saveCart = () => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

// Functions to modify the cart
export const addToCart = (product: CartItem, e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  e.stopPropagation();
  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    cart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    cart = [...cart, { ...product, quantity: 1 }];
  }
  saveCart();
  notifyListeners();
};

export const removeFromCart = (id: number) => {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  notifyListeners();
};

export const clearCart = () => {
  cart = [];
  saveCart();
  notifyListeners();
};

export const updateQuantity = (id: number, delta: number) => {
  cart = cart
    .map((item) =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    )
    .filter((item) => item.quantity > 0);
  saveCart();
  notifyListeners();
};

export const getCart = () => cart;

// Notify all listeners to force re-render
const notifyListeners = () => {
  listeners.forEach((listener) => listener());
};

export const useCart = () => {
  const [state, setState] = useState<CartItem[]>([]); // Start with an empty cart

  useEffect(() => {
    const savedCart = getInitialCart(); // Load the cart after mount
    setState(savedCart);

    const listener = () => setState([...cart]);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  return state;
};

export const useCartToggle = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = (): void => {
    const cartSidebar = document.querySelector('.cartSidebar') as HTMLElement;
    const backdrop = document.querySelector('.backdrop') as HTMLElement;

    if (cartSidebar) {
      const isOpen = cartSidebar.classList.toggle('open');
      backdrop.classList.toggle('visible');
      setIsCartOpen(isOpen);
    }
  };

  useEffect(() => {
    function handleResize() {
      const viewportWidth = window.innerWidth;
      if (isCartOpen && viewportWidth >= 900) {
        toggleCart();
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isCartOpen]);

  return { isCartOpen, toggleCart };
};
