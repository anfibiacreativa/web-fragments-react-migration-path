import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Banner from "../components/CountDownBanner";
import { useCartToggle } from "../utils/cartState";
import "../index.css";

function App() {
  // const goTo = (url: string) => {
  //   window.history.pushState({}, "", url);
  // };
  const { isCartOpen, toggleCart } = useCartToggle();
  return (
    <Layout>
      <div className="container">
        <div className={isCartOpen ? "backdrop visible" : "backdrop"}></div>
        <h1>Ecommerce Micro-Frontend Application</h1>
        <Banner />
        <button className="btn-toggle-cart" onClick={toggleCart}>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
        <div className="layout_homepage">
          {/* <button
            onClick={() => {
              goTo("/store");
            }}
          >
            Change URL, but not UI (pushState to history)
          </button> */}
          <ul className="list">
            <li className="listItem">
              <Link to="/store/catalog">Go to Store (Bound Fragment)</Link>
            </li>
            <li className="listItem">
              <Link to="/cart">Go to Cart (Standalone fragment)</Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default App;
