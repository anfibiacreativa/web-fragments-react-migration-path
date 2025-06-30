import React from 'react';

type ProductDetailProps = {
  productId: string;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  return (
    <div>
      <p>Details for product {productId} go here</p>
    </div>
  );
};

export default ProductDetail;
