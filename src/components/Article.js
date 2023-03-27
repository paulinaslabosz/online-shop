import React from 'react';
import '../styles/Article.css';

function Article(props) {
  return (
    <section>
      <h3 className='article_title'>{props.title}</h3>
      <p className='article_author'>Autor</p>
      <p className='article_content'>{props.content}</p>
    </section>
  );
}

export default Article;
