import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Product.css';
function Product(props) {
  return (
    <div className='product'>
      <div className='img_wrapper'>
        <img className='product_img' src={props.image} alt={props.name} />
      </div>
      <p className='product_price'>{props.price} $</p>
      <Link to={`/productsList/${props.id}`} className='product_title'>
        {props.title}
      </Link>
    </div>
  );
}

export default Product;
