import React, { useEffect } from 'react';

import { useSetRecoilState, useRecoilValue } from 'recoil';
import { products } from '../recoil_state';
import Product from '../components/Product';
import '../styles/ProductsList.css';

function ProductsList() {
  const productAPI = 'https://dummyjson.com/products?limit=100';

  const productsState = useSetRecoilState(products);
  const productsListRecoil = useRecoilValue(products);

  useEffect(() => {
    fetch(productAPI)
      .then((res) => res.json())
      .then((data) => productsState(() => data.products));
  }, [productsState]);

  const productsList = productsListRecoil.map((product) => (
    <Product
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.images[0]}
      description={product.description}
      category={product.category}
    />
  ));
  return <div className='products'>{productsList}</div>;
}

export default ProductsList;
