import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Blog from '../pages/Blog';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';
import Footer from './Footer';
import Login from '../pages/Login';
import '../styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <header>
          <Header />
        </header>
        <main>
          <aside className='navigation'>
            <Nav />
          </aside>
          <section className='page'>
            <Routes>
              <Route path='/' Component={Blog} />
              <Route path='/products' Component={Products} />
              <Route path='/contact' Component={Contact} />
              <Route path='/admin' Component={Admin} />
              <Route path='/login' Component={Login} />
            </Routes>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
