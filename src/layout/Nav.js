import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { products } from '../recoil_state';
import '../styles/Nav.css';

function Nav() {
  const { pathname } = useLocation();
  const productsList = useRecoilValue(products);

  const allCategories = productsList.map((product) => ({
    category: product.category,
  }));
  const uniqueCategories = allCategories.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.category === value.category)
  );

  uniqueCategories.forEach((category, index) => {
    category.id = index + 1;
  });

  const categoriesList = uniqueCategories.map((category) => (
    <NavLink
      to={`/category/${category.id}`}
      className='nav_category_item'
      key={category.id}
    >
      {category.category}
    </NavLink>
  ));

  return (
    <nav className='nav'>
      <ul className='nav_list'>
        <NavLink to='/' className='nav_item'>
          Homepage
        </NavLink>
        <NavLink to='/productsList' className='nav_item'>
          Products
        </NavLink>
        {pathname === '/productsList' ? (
          <ul className='nav_category'>{categoriesList}</ul>
        ) : null}

        <NavLink to='/contact' className='nav_item'>
          Contact
        </NavLink>
        <NavLink to='/adminPage' className='nav_item'>
          Admin Panel
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
