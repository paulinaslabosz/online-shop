import React, { useRef, useEffect } from 'react';
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

  const ref = useRef(null);
  const buttonRef = useRef(null);

  const onClick = () => {
    setActiveCart((oldIsActive) => !oldIsActive);
  };

  // order value / total

  const CartProductsValue = cartState.map(
    (product) => product.price * product.quantity
  );

  const orderBeforeDiscount = CartProductsValue.reduce((a, b) => a + b, 0);
  const valueBeforeDiscount = orderBeforeDiscount.toFixed(2);

  const valueAfterDiscount =
    valueBeforeDiscount - valueBeforeDiscount * discountState;
  const totalAfterDiscount = valueAfterDiscount.toFixed(2);
  const handleCheckout = () => {
    alert(`Checkout - Total: $ ${totalAfterDiscount}`);
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

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        !ref.current?.contains(e.target) &&
        !buttonRef.current?.contains(e.target)
      ) {
        setActiveCart(false);
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, buttonRef]);
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
        <h2 className='cart_title'>
          <div className='cart_title--icon'>
            <img
              className='cart_title--img'
              src={icon}
              alt='shoping cart icon'
            />
            <span className='cart_title--amount'>{amountOfProducts}</span>
          </div>
          Shopping cart
        </h2>
        <ul className='cart_list'>
          {cartList.length > 0 ? (
            cartList
          ) : (
            <span className='cart_info'>Add product to the cart</span>
          )}
        </ul>
        <div className='cart_total'>
          <p>Discount: {discountState * 100}%</p>
          <p>
            Total: {totalAfterDiscount !== 0 ? `$ ${totalAfterDiscount}` : null}{' '}
            <span className='cart_beforeDiscount'>
              {valueBeforeDiscount !== 0 ? `$ ${valueBeforeDiscount}` : null}
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
