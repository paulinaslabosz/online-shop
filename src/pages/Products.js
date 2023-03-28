import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import '../styles/Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const productAPI = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(productAPI)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  const productsList = products.map((product) => (
    <Product
      key={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
      description={product.description}
      category={product.category}
    />
  ));
  return <div className='products_wrapper'>{productsList}</div>;
}

export default Products;
