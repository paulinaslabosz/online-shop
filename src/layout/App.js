import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Blog from '../pages/Blog';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';
import Footer from './Footer';
import '../styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='page'>
        <Header />
        <div className='wrapper'>
          <Nav />
          <Routes>
            <Route path='/' Component={Blog} />
            <Route path='/products' Component={Products} />
            <Route path='/contact' Component={Contact} />
            <Route path='/admin' Component={Admin} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
