import React from 'react';
import '../styles/Nav.css';
const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav_list'>
        <li className='nav_item'>Start</li>
        <li className='nav_item'>Produkty</li>
        <li className='nav_item'>Kontakt</li>
        <li className='nav_item'>Panel Admina</li>
      </ul>
    </nav>
  );
};

export default Nav;
