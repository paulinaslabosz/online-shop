import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/Header.css';
import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';
function Header() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<img className='image' src={img1} alt='girl' />}
        ></Route>
        <Route
          path='/contact'
          element={<img className='image' src={img2} alt='sth' />}
        ></Route>
        <Route
          path='/products'
          element={<img className='image' src={img3} alt='sthsth' />}
        ></Route>
      </Routes>
    </>
  );
}

export default Header;
