import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Article from '../components/Article';
import '../styles/PaginateBlog.css';

function PaginateBlog() {
  const postsAPI = 'https://jsonplaceholder.typicode.com/posts';
  //   const usersAPI = 'https://jsonplaceholder.typicode.com/users';

  const [articles, setArticles] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // fetch(usersAPI)
    //   .then((response) => response.json())
    //   .then((data) => setUsers(() => data));
    fetch(postsAPI)
      .then((response) => response.json())
      .then((data) => setArticles(() => data));
  });

  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentArticles = articles.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(articles.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % articles.length;
    setItemOffset(newOffset);
  };

  const currentPageData = currentArticles.map((article) => (
    <Article
      key={article.id}
      userId={article.userId}
      title={article.title}
      content={article.body}
    />
  ));

  return (
    <>
      {currentPageData}
      <ReactPaginate
        breakLabel='...'
        nextLabel='next ⇨'
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel='⇦ previous'
        renderOnZeroPageCount={null}
        className='pagination'
        activeClassName='pagination_activeClass'
        breakLinkClassName='pagination_link'
        pageLinkClassName='pagination_link'
        previousLinkClassName='pagination_button'
        nextLinkClassName='pagination_button'
      />
    </>
  );
}

export default PaginateBlog;
