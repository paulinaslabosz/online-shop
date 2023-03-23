import React, { Component } from 'react';
import Article from '../components/Article';
import '../styles/Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    users: [],
  };

  posts = 'https://jsonplaceholder.typicode.com/posts';
  users = 'https://jsonplaceholder.typicode.com/users';

  componentDidMount() {
    fetch(this.posts)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          posts: data,
        });
      });
  }
  render() {
    const articles = this.state.posts.map((article) => (
      <Article key={article.id} title={article.title} content={article.body} />
    ));
    return (
      <main className='content'>
        <h2 className='blog_title'>Oto lista nowości!</h2>
        {articles.slice(1, 7)}
      </main>
    );
  }
}

export default Blog;
