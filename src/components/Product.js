import React from 'react';
import '../styles/Product.css';
function Product(props) {
  return (
    <div className='product'>
      <div className='img_wrapper'>
        <img className='product_img' src={props.image} alt={props.name} />
      </div>
      <p className='product_price'>{props.price} $</p>
      <h3 className='product_title'>{props.title}</h3>
    </div>
  );
}

export default Product;
