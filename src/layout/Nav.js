import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav_list'>
        <NavLink to='/' className='nav_item'>
          Homepage
        </NavLink>
        <NavLink to='/productsList' className='nav_item'>
          Products
        </NavLink>
        <NavLink to='/contact' className='nav_item'>
          Contact
        </NavLink>
        <NavLink to='/admin' className='nav_item'>
          Admin Panel
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
