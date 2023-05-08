import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homepage.css';
import img from '../images/SalePoster.png';
function Homepage() {
  const [isLoaded, setLoaded] = useState(false);
  return (
    <div className='homepage_poster'>
      <img
        onLoad={() => setLoaded(true)}
        className='homepage_img'
        src={img}
        alt='Sale Poster'
      />
      {isLoaded ? (
        <Link className='homepage_button' to='/productsList'>
          Shop now
        </Link>
      ) : null}
    </div>
  );
}

export default Homepage;
