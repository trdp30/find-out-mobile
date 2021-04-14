import React from 'react';
import ProductWrapper from '../../../contexts/item.context';
import ProductDetails from './product-details';

function Product(props) {
  return (
    <ProductWrapper {...props}>
      <ProductDetails {...props} />
    </ProductWrapper>
  );
}

export default Product;
