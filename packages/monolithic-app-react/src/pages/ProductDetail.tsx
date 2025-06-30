import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Product } from '../types.d';
import { addToCart } from '../utils/cartState';
import Layout from '../components/Layout';
import styles from '../styles/ProductDetail.module.css';
import ShoppingCart from '../components/ShoppingCart';

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Retrieve the product data from localStorage
    const storedProduct = localStorage.getItem('selectedProduct');
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
  }, []);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Replacing Next.js Head with react-helmet */}
      <Helmet>
        <title>React Monolithic App</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Layout>
        <div className="container">
          <div className="backdrop"></div>

          {/* Using Link instead of <a> for better routing */}
          <Link to="/" className={styles.breadcrumb}>← Back to Catalog</Link>

          <div className="layout">
            <div className={styles.productDetail}>
              <div className={styles.productImageContainer}>
                <img
                  src={`/images/product${product.id}.png`}
                  alt={product.name}
                  className={styles.productImage}
                />
              </div>

              <div className={styles.productInfo}>
                <h1>{product.name}</h1>
                <p className={styles.price}>${product.price}</p>
                <div className="productMeta">
                  <p>Color: </p>
                  <p>Size: </p>
                </div>
                <p>{product.description}</p>

                <button
                  className="btn btn-primary"
                  onClick={(event) => addToCart({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    image: `/images/product${product.id}.png`,
                    quantity: 1,
                  }, event)}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <ShoppingCart />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetail;
