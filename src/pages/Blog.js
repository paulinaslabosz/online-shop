import React from 'react';
import Article from '../components/Article';
import '../styles/Blog.css';
const Blog = () => {
  return (
    <main className='content'>
      <h2>Tytuł strony głównej</h2>
      <Article />
    </main>
  );
};

export default Blog;
