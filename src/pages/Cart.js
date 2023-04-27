import React from 'react';
import ProductCart from '../components/ProductCart';
import { activeCart, cart } from '../recoil_state';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import '../styles/Cart.css';

function Cart() {
  const isActive = useRecoilValue(activeCart);
  const setActiveCart = useSetRecoilState(activeCart);
  const cartProd = useRecoilValue(cart);
  const onClick = () => {
    setActiveCart((oldIsActive) => !oldIsActive);
  };

  const cartList = cartProd.map((product) => (
    <ProductCart
      key={product.id + 'a'}
      id={product.id}
      title={product.title}
      price={product.price}
      img={product.img}
      quantity={product.quantity}
    />
  ));
  return (
    <>
      <button className='cart_icon' onClick={onClick}>
        {isActive ? 'X' : 'C'}
      </button>
      {isActive ? (
        <div className='cart'>
          <h2 className='cart_title'>Shopping cart</h2>
          <ul className='cart_list'>{cartList}</ul>
          <div className='cart_total'>
            <p>Discount: </p>
            <p>Total: </p>
            <button className='cart_checkout'>Checkout</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Cart;
