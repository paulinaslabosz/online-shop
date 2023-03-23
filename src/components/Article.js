import React from 'react';
import '../styles/Article.css';
const Article = () => {
  return (
    <section>
      <h3 className='article_title'>Tytuł artykułu</h3>
      <p className='article_author'>Autor</p>
      <p className='article_content'>Treść artykułu</p>
    </section>
  );
};

export default Article;
