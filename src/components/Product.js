import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { products, cart, activeCart } from '../recoil_state';
import '../styles/Product.css';

function Product(props) {
  const productsList = useRecoilValue(products);
  const setCart = useSetRecoilState(cart);
  const cartState = useRecoilValue(cart);
  const setCartActive = useSetRecoilState(activeCart);

  const addToCart = (id) => {
    const productsForCart = productsList.map((product) => ({
      id: product.id,
      title: product.title,
      quantity: 1,
      price: product.price,
      img: product.images[0],
    }));

    const product = productsForCart.find((product) => product.id === id);

    if (cartState.find((item) => item.id === product.id)) {
      const updatedCart = cartState.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(() => updatedCart);
    } else {
      setCart((oldCart) => [...oldCart, product]);
    }
    setCartActive(true);
  };

  return (
    <div className='product'>
      <div className='img_wrapper'>
        <Link to={`/productsList/${props.id}`} className='product_title'>
          <img className='product_img' src={props.image} alt={props.name} />
        </Link>
      </div>
      <Link to={`/productsList/${props.id}`} className='product_title'>
        {props.title}
      </Link>
      <p className='product_price'>{props.price} $</p>

      <button onClick={() => addToCart(props.id)} className='add_To_Cart'>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
