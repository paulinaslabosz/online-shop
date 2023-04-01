import React, { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { users, posts } from '../recoil_state';
import Article from '../components/Article';

import '../styles/Blog.css';

function Blog() {
  const postsAPI = 'https://jsonplaceholder.typicode.com/posts';
  const usersAPI = 'https://jsonplaceholder.typicode.com/users';

  const usersList = useSetRecoilState(users);
  const postsList = useSetRecoilState(posts);

  const getUsers = () => {
    fetch(usersAPI)
      .then((response) => response.json())
      .then((data) => usersList(() => data));
  };

  const getPosts = () => {
    fetch(postsAPI)
      .then((response) => response.json())
      .then((data) => postsList(() => data));
  };
  useEffect(() => {
    getPosts();
    getUsers();
  });

  const postsState = useRecoilValue(posts);

  const articles = postsState.map((article) => (
    <Article
      key={article.id}
      userId={article.userId}
      title={article.title}
      content={article.body}
    />
  ));

  return (
    <div>
      <h2 className='blog_title'>Check out our news!</h2>
      {articles.slice(1, 10)}
    </div>
  );
}

export default Blog;
