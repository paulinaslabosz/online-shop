import React, { useEffect } from 'react';

import { useSetRecoilState, useRecoilValue } from 'recoil';
import { products } from '../recoil_state';
import Product from '../components/Product';
import '../styles/ProductsList.css';

function ProductsList() {
  const productAPI = 'https://fakestoreapi.com/products';

  const productsState = useSetRecoilState(products);
  const productsListRecoil = useRecoilValue(products);

  useEffect(() => {
    fetch(productAPI)
      .then((res) => res.json())
      .then((data) => productsState(() => data));
  });

  const productsList = productsListRecoil.map((product) => (
    <Product
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
      description={product.description}
      category={product.category}
    />
  ));
  return <div className='products'>{productsList}</div>;
}

export default ProductsList;
