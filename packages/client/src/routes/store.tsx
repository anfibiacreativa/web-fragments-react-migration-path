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
        <div className="hero">
          {/* <h1>Ecommerce Composable App with Web Fragments</h1> */}
          <Banner />
          <button className='btn-toggle-cart' onClick={toggleCart}>
            <i className='fa-solid fa-cart-shopping'></i>
          </button>
        </div>
        <div className='layout'>
          {/* <ProductGrid /> */}
          {/*
// @ts-expect-error: Fragment outlet is not recognized by TypeScript */}
          <web-fragment fragment-id="store" />
          {/* <ShoppingCart /> */}
          {/*
// @ts-expect-error: Fragment outlet is not recognized by TypeScript */}
          <web-fragment fragment-id="cart" src="/cart" />
        </div>
      </div>
    </Layout>
  );
}

export default App;
