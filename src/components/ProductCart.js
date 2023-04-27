import React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { cart } from '../recoil_state';
import '../styles/ProductCart.css';

const ProductCart = (props) => {
  const setCart = useSetRecoilState(cart);
  const cartState = useRecoilValue(cart);

  const deleteProduct = (id) => {
    const cartAfterDelete = cartState.filter((product) => product.id !== id);
    setCart(() => cartAfterDelete);
  };

  const handleQuantity = (id, type, quantity) => {
    if (type === 'increase') {
      const updatedCart = cartState.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(() => updatedCart);
    } else if (type === 'decrease' && quantity > 1) {
      const updatedCart = cartState.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCart(() => updatedCart);
    }
  };

  return (
    <li className='cart_item' key={props.id}>
      <div className='cart_product'>
        <div className='cart_img-wrapper'>
          <img className='cart_img' src={props.img} alt='' />
        </div>

        <div>
          {' '}
          <h4>{props.title}</h4>
          <p>Quantity: {props.quantity} </p>
        </div>
      </div>

      <div className='cart_buttons'>
        <button
          onClick={() => deleteProduct(props.id)}
          className='cart_btn-delete'
        >
          x
        </button>
        <p>$ {props.price}</p>
        <div>
          <button
            onClick={() => handleQuantity(props.id, 'decrease', props.quantity)}
            className={props.quantity === 1 ? 'cart-btn disabled' : 'cart-btn'}
          >
            -
          </button>
          <button
            onClick={() => handleQuantity(props.id, 'increase', props.quantity)}
            className='cart-btn'
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCart;
