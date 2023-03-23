import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Blog from '../pages/Blog';
import Footer from './Footer';
import '../styles/App.css';

const App = () => {
  return (
    <div className='page'>
      <Header />
      <div className='wrapper'>
        <Nav />
        <Blog />
      </div>

      <Footer />
    </div>
  );
};

export default App;
