import React from 'react';
import ProductCart from '../components/ProductCart';
import { activeCart, cart, discount, total } from '../recoil_state';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import '../styles/Cart.css';

function Cart() {
  const isActive = useRecoilValue(activeCart);
  const cartState = useRecoilValue(cart);
  const discountState = useRecoilValue(discount);
  const totalState = useRecoilValue(total);
  const setTotal = useSetRecoilState(total);
  const setActiveCart = useSetRecoilState(activeCart);
  const onClick = () => {
    setActiveCart((oldIsActive) => !oldIsActive);
  };

  const totalArr = cartState.map((product) => product.price * product.quantity);

  const finishPrice = totalArr.reduce((a, b) => a + b, 0);
  console.log(finishPrice);
  const cartList = cartState.map((product) => (
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
            <p>Discount: {discountState * 100}%</p>
            <p>
              Total:{' '}
              {finishPrice !== 0
                ? `$ ${finishPrice - finishPrice * discountState}`
                : null}{' '}
              <span className='cart_beforeDiscount'>
                {finishPrice !== 0 ? `$ ${finishPrice}` : null}
              </span>
            </p>
            <button className='cart_checkout'>Checkout</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Cart;
