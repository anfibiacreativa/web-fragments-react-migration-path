import Layout from '../components/Layout';
import Banner from '../components/CountDownBanner';
// import ShoppingCart from '../components/ShoppingCart';
import { useCartToggle } from '../utils/cartState';

function App() {
  const { isCartOpen, toggleCart } = useCartToggle(); // Toggle the cart sidebar

  return (
    <Layout>
      <div className='container'>
        <div className={isCartOpen ? 'backdrop visible' : 'backdrop'}></div>
        <h1>Cart Standalone Fragment</h1>
        <p>Standalone fragments are not bound to the shell app "location.history", and do not interact with the browser URL bar.</p>
        <Banner />
        <button className='btn-toggle-cart' onClick={toggleCart}>
          <i className='fa-solid fa-cart-shopping'></i>
        </button>
        <div className='layout'>
          {/* <ProductGrid /> */}
                    {/*
// @ts-expect-error: Fragment outlet is not recognized by TypeScript */}
          <web-fragment fragment-id="cart" />
          {/* <ShoppingCart /> */}
        </div>
      </div>
    </Layout>
  );
}

export default App;
