import React from 'react';
import ProductCard from './ProductCard';
import products from  '/src/data/products.json'

const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
