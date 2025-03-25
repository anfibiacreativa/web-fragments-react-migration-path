import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../utils/cartState';
import { products } from '../data/product-catalog-mock';
import styles from '../styles/ProductGrid.module.css';
import { Product } from '../types';

const ProductGrid: React.FC = () => {
  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    // Save the product to localStorage before navigating
    localStorage.setItem('selectedProduct', JSON.stringify(product));

    // Navigate to the product detail page
    navigate(`/product/${product.id}`);
  };

  return (
    <div className={styles.products}>
      <div className={styles.grid}>
        {products.map((product) => (
          <div
            key={product.id}
            className={`${styles.card} ${styles.productCard}`}
            onClick={() => handleProductClick(product)}
          >
            <img
              src={`/images/product${product.id}.png`}
              alt={product.name}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className={styles.price}>${product.price}</p>
              <button
                className="btn btn-primary"
                onClick={(event) => {
                  event.stopPropagation(); // Prevent navigating when clicking "Add to Cart"
                  addToCart({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    image: `/images/product${product.id}.png`,
                    quantity: 1,
                  }, event);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
