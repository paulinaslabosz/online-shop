import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { products, categories } from '../recoil_state';
import '../styles/Nav.css';

function Nav() {
  const productsList = useRecoilValue(products);
  const categoriesState = useSetRecoilState(categories);

  // set unique categories' list
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

  categoriesState(uniqueCategories);

  const categoriesList = uniqueCategories.map((category) => (
    <NavLink
      to={`/category/${category.id}`}
      className='nav_category_item'
      key={category.id}
    >
      {category.category}
    </NavLink>
  ));

  // function: hide/display categories

  const [isVisible, setVisible] = useState(false);

  return (
    <nav className='nav'>
      <ul className='nav_list'>
        <NavLink
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          to='/productsList'
          className={({ isActive }) =>
            isActive ? 'nav_item activeNav' : 'nav_item'
          }
        >
          Products
        </NavLink>
        <NavLink
          to='/blog'
          className={({ isActive }) =>
            isActive ? 'nav_item activeNav' : 'nav_item'
          }
        >
          Blog
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? 'nav_item activeNav' : 'nav_item'
          }
        >
          Contact
        </NavLink>
      </ul>
      {isVisible ? (
        <ul
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className='nav_category'
        >
          {categoriesList}
        </ul>
      ) : null}
    </nav>
  );
}

export default Nav;
