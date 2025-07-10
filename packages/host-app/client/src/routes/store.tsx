import Layout from '../components/Layout';
// Import with explicit file extension to avoid resolution conflicts
import Banner from '../components/Banner';
import { useCartToggle } from '../utils/cartState';
import ShoppingCart from '../components/ShoppingCart';

function App() {
  const { isCartOpen, toggleCart } = useCartToggle(); // Toggle the cart sidebar

  return (
    <Layout>
      <div className="container">
        <div className={isCartOpen ? 'backdrop visible' : 'backdrop'}></div>
        <div className="hero">
          {/* <h1>Ecommerce Composable App with Web Fragments</h1> */}
          <Banner />
          <button className="btn-toggle-cart" onClick={toggleCart}>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>

        <div className="layout">
          {/* <ProductGrid /> */}
          {/* @ts-expect-error: web-fragment is a custom element */}
          <web-fragment fragment-id="store" />
          {/* <ShoppingCart /> */}

          <ShoppingCart />
        </div>
      </div>
      {/* @ts-ignore: web-fragment is a custom element */}

      <web-fragment fragment-id="solid-sierpinski-triangle" src="/solid-sierpinski-triangle" />
    </Layout>
  );
}

export default App;