import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';
const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav_list'>
        <NavLink to='/' className='nav_item'>
          Start
        </NavLink>
        <NavLink to='/products' className='nav_item'>
          Produkty
        </NavLink>
        <NavLink to='/contact' className='nav_item'>
          Kontakt
        </NavLink>
        <NavLink to='/admin' className='nav_item'>
          Panel Admina
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
