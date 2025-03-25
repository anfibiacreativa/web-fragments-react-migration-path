import React, { useState } from 'react';
import { useCart, updateQuantity, removeFromCart, clearCart } from '../utils/cartState';
import { processPayment, PaymentRequest } from '../utils/paymentService';
import styles from '../styles/ShoppingCart.module.css';
import { useCartToggle } from '../utils/cartState';

const ShoppingCart: React.FC = () => {
  const cart = useCart();
  const { isCartOpen, toggleCart } = useCartToggle();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handleProceedToPayment = async () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items to proceed.');
      return;
    }

    try {
      setIsProcessingPayment(true);
      setMessage('Processing your payment... Please wait.');
      setProgress(0);

      const paymentData: PaymentRequest = {
        amount: cart.reduce((total, item) => total + item.price * item.quantity, 0),
        currency: 'EUR',
        userId: 'someUserId12345',
      };

      console.log('Attempting payment with total:', paymentData.amount);
      const response = await processPayment(paymentData);
      console.log('Payment successful:', response);

      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const nextProgress = prevProgress + 10;
          if (nextProgress >= 100) {
            clearInterval(interval);
            setProgress(0);
            setMessage('');
            clearCart();
            setIsProcessingPayment(false);
          }
          return nextProgress;
        });
      }, 500);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        setIsError(true);
        setIsProcessingPayment(false);
        showErrorNotification(error.message);
      }
    }
  };

  const showErrorNotification = (error: string) => {
    alert(`Payment failed: ${error}`);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <aside className={isCartOpen ? 'cartSidebar open' : 'cartSidebar'}>
      <button className="btn-toggle-cart close" onClick={toggleCart}>
        <i className="fa-solid fa-circle-xmark"></i>
      </button>
      <div className={styles.cart}>
        <h3>Your Shopping Cart</h3>

        {message && <p className={styles.statusMessage}>{message}</p>}

        {isProcessingPayment && (
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: `${progress}%` }}></div>
          </div>
        )}

        {!isProcessingPayment && cart.length === 0 && progress === 0 && (
          <p className={styles.message}>Your cart is empty. Add some products to get started!</p>
        )}

        {!isProcessingPayment && cart.length > 0 && (
          <>
            <ul className={styles.cartItems}>
              {cart.map((item) => (
                <li key={item.id} className={styles.cartItem}>
                  <img src={item.image} className={styles.cartImage} alt={item.name} />
                  <div className={styles.itemDetails}>
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                  </div>
                  <div className={styles.cartItemsFooter}>
                    <div className={styles.quantityControls}>
                      <button className="btn" onClick={() => updateQuantity(item.id, -1)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button className="btn" onClick={() => updateQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>
                    <button className="btn remove-btn" onClick={() => removeFromCart(item.id)}>
                      x
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.cartSummary}>
              <p className={styles.total}>Total: ${total.toFixed(2)}</p>
            </div>
            <button className="btn btn-primary" onClick={handleProceedToPayment}>
              Proceed to Payment
            </button>
            {isError && <p className={styles.errorMessage}>{errorMessage}</p>}
          </>
        )}
      </div>
    </aside>
  );
};

export default ShoppingCart;
