import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './Header';
import Nav from './Nav';
import Blog from '../pages/Blog';
import ProductsList from '../pages/ProductsList';
import ProductPage from '../pages/ProductPage';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';
import Footer from './Footer';
import Login from '../pages/Login';
import ErrorPage from '../pages/ErrorPage';
import '../styles/App.css';

function App() {
  return (
    <HashRouter>
      <RecoilRoot>
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
                <Route path='/productsList' Component={ProductsList} />
                <Route path='/products/:id' Component={ProductPage} />
                <Route path='/contact' Component={Contact} />
                <Route path='/admin' Component={Admin} />
                <Route path='/login' Component={Login} />
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