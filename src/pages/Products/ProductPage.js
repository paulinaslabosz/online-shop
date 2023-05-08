import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { products, cart } from '../../recoil_state';
import Carousel from 'nuka-carousel';

import '../../styles/ProductPage.css';

function ProductPage() {
  const params = useParams();
  const paramsId = Number(params.id);
  const productsList = useRecoilValue(products);
  const product = productsList.find((product) => product.id === paramsId);
  const setCart = useSetRecoilState(cart);
  const cartState = useRecoilValue(cart);
  const images = product.images;

  // add to cart feature
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
  };

  const paramsCarousel = {
    wrapAround: true,
    animation: 'zoom',
  };

  return (
    <>
      <Link className='back_to_list' to='/productsList'>
        Back to list
      </Link>
      <h3 className='productPage_title'>{product?.title}</h3>
      <div className='productPage_wrapper'>
        <Carousel {...paramsCarousel} className='carousel'>
          {images.map((image) => (
            <img
              className='productPage_img'
              key={image}
              src={image}
              alt='Product'
            />
          ))}
        </Carousel>

        <div className='productPage_content'>
          <h5 className='productPage_category'>
            Category:{' '}
            <span className='productPage_category--bold'>
              {product?.category}
            </span>
          </h5>
          <p className='productPage_description'>
            {' '}
            <strong>Description:</strong> {product?.description}
          </p>
          <p className='productPage_price'>
            <strong>Price:</strong> {product?.price} $
          </p>
          <button
            onClick={() => addToCart(product?.id)}
            className='add_To_Cart'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
