import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { products } from '../recoil_state';
import '../styles/ProductPage.css';

function ProductPage() {
  const params = useParams();
  const paramsId = Number(params.id);
  const productsList = useRecoilValue(products);
  const product = productsList.find((product) => product.id === paramsId);

  return (
    <>
      <h3 className='productPage_title'>{product.title}</h3>
      <div className='productPage_wrapper'>
        <img
          className='productPage_img'
          src={product.images[0]}
          alt={product.title}
        />
        <div className='productPage_content'>
          <h5 className='productPage_category'>
            Category:{' '}
            <span className='productPage_category--bold'>
              {product.category}
            </span>
          </h5>
          <p className='productPage_description'>
            {' '}
            <strong>Description:</strong> {product.description}
          </p>
          <p className='productPage_price'>
            <strong>Price:</strong> {product.price} $
          </p>
        </div>
      </div>
      <Link className='back_to_list' to='/productsList'>
        Back to list
      </Link>
    </>
  );
}

export default ProductPage;
