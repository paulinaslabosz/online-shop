import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
function Products() {
  const [products, setProducts] = useState([]);
  const productAPI = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(productAPI)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  const productsList = products.map((product) => (
    <Product key={product.id} title={product.title} price={product.price} />
  ));
  return <div>{productsList}</div>;
}

export default Products;
