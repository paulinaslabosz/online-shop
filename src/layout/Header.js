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
          element={
            <img className='image' src={img1} alt='Black and white girl' />
          }
        ></Route>
        <Route
          path='/contact'
          element={
            <img className='image' src={img2} alt='Back of girl s head' />
          }
        ></Route>
        <Route
          path='/productsList'
          element={<img className='image' src={img3} alt='Sitting man' />}
        ></Route>
        <Route
          path='/admin'
          element={
            <img className='image' src={img1} alt='Black and white girl' />
          }
        ></Route>
        <Route
          path='/login'
          element={
            <img className='image' src={img2} alt='Back of the girl s head' />
          }
        ></Route>
        <Route
          path='/*'
          element={
            <img className='image' src={img1} alt='Black and white girl' />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default Header;