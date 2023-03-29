import React from 'react';
import '../styles/Article.css';

function Article(props) {
  const author = props.users.find((user) => user.id === props.userId);

  return (
    <div className='article'>
      <h3 className='article_title'>{props.title}</h3>
      <p className='article_author'>{author.name}</p>
      <p className='article_content'>{props.content}</p>
    </div>
  );
}

export default Article;
