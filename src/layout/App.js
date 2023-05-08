import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './Header';
import Nav from './Nav';
import ProductsList from '../pages/Products/ProductsList';
import ProductPage from '../pages/Products/ProductPage';
import Contact from '../pages/Contact';
import Category from '../pages/Category';
import Footer from './Footer';
import ErrorPage from '../pages/ErrorPage';
import Homepage from '../pages/Homepage';
import Cart from '../pages/Cart';
import '../styles/App.css';
import Blog from '../pages/Blog/Blog';

function App() {
  return (
    <HashRouter>
      <RecoilRoot>
        <div className='app'>
          <header>
            <Header />
          </header>
          <Cart />
          <main>
            <section className='navigation'>
              <Nav />
            </section>
            <section className='page'>
              <Routes>
                <Route path='/' Component={Homepage} />
                <Route path='/blog' Component={Blog} />
                <Route path='/productsList' Component={ProductsList} />
                <Route path='/productsList/:id' Component={ProductPage} />
                <Route path='/category/:id' Component={Category} />
                <Route path='/contact' Component={Contact} />
                <Route path='/*' Component={ErrorPage} />
              </Routes>
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </RecoilRoot>
    </HashRouter>
  );
}

export default App;
