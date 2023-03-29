import React, { useState, useEffect } from 'react';
import Article from '../components/Article';

import '../styles/Blog.css';

function Blog() {
  const [posts, setPosts] = useState({ content: [] });
  const [users, setUsers] = useState({ content: [] });
  const postsAPI = 'https://jsonplaceholder.typicode.com/posts';
  const usersAPI = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetch(postsAPI)
      .then((response) => response.json())
      .then((data) => setPosts({ content: data }));

    fetch(usersAPI)
      .then((response) => response.json())
      .then((data) => setUsers({ content: data }));
  }, []);

  const articles = posts.content.map((article) => (
    <Article
      key={article.id}
      userId={article.userId}
      title={article.title}
      content={article.body}
      users={users.content}
    />
  ));

  return (
    <div>
      <h2 className='blog_title'>Oto lista nowości!</h2>
      {articles.slice(1, 30)}
    </div>
  );
}

export default Blog;
