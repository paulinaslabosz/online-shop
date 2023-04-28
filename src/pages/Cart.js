import React from 'react';
import ProductCart from '../components/ProductCart';
import { activeCart, cart, discount } from '../recoil_state';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import icon from '../images/icon-cart.png';
import '../styles/Cart.css';

function Cart() {
  const isActive = useRecoilValue(activeCart);
  const cartState = useRecoilValue(cart);
  const discountState = useRecoilValue(discount);
  const setActiveCart = useSetRecoilState(activeCart);

  const onClick = () => {
    setActiveCart((oldIsActive) => !oldIsActive);
  };

  // order value / total

  const CartProductsValue = cartState.map(
    (product) => product.price * product.quantity
  );

  const orderValue = CartProductsValue.reduce((a, b) => a + b, 0);

  const total = orderValue - orderValue * discountState;
  const handleCheckout = () => {
    alert(`Checkout - Total: $ ${total}`);
  };

  // amount of products

  const amountOfProducts = cartState.length;

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
    <div className={isActive ? 'cart_wrapper--active' : 'cart_wrapper'}>
      <button className='cart_shoppingCart' onClick={onClick}>
        {isActive ? (
          'X'
        ) : (
          <div className='cart_icon'>
            <img className='cart_img' src={icon} alt='shoping cart icon' />
            <span className='cart_amount'>{amountOfProducts}</span>
          </div>
        )}
      </button>

      <div className='cart'>
        <h2 className='cart_title'>Shopping cart</h2>
        <ul className='cart_list'>{cartList}</ul>
        <div className='cart_total'>
          <p>Discount: {discountState * 100}%</p>
          <p>
            Total: {total !== 0 ? `$ ${total}` : null}{' '}
            <span className='cart_beforeDiscount'>
              {orderValue !== 0 ? `$ ${orderValue}` : null}
            </span>
          </p>
          <button onClick={handleCheckout} className='cart_checkout'>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
