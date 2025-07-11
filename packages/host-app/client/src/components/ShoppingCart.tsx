import React, { useState } from 'react';
import {
  useCart
} from '../utils/cartState';
import stylesCart from '../styles/ShoppingCart.module.css';
import { useCartToggle } from '../utils/cartState';

const ShoppingCart: React.FC = () => {
  const cart = useCart();
  const { isCartOpen, toggleCart } = useCartToggle();
  const [isError] = useState(false);
  const [errorMessage] = useState('');
  const [isProcessingPayment] = useState(false);


  return (
    <aside className={isCartOpen ? 'cartSidebar open' : 'cartSidebar'}>
      <button className="btn-toggle-cart close" onClick={toggleCart}>
        <i className="fa-solid fa-circle-xmark"></i>
      </button>
      <div className={stylesCart.cart}>
        {/* @ts-expect-error - web-fragment is a custom element */}   
        <web-fragment 
          fragment-id="slogan" 
          src="/button" 
        />
        

        {/* @ts-expect-error: Fragment outlet is not recognized by TypeScript */}
        <web-fragment fragment-id="cart" src="/cart" />
    
        {!isProcessingPayment && cart.length > 0 && (
          <>

            {isError && <p className={stylesCart.errorMessage}>{errorMessage}</p>}
          </>
        )}
      </div>
    </aside>
  );
};

export default ShoppingCart;
