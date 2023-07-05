import React from 'react';
import BookCard from '../BookCard/BookCard';

import './BookList.css'

const BookList = ({ books, handleLoadMore, hasMoreBooks, isLoading, booksFound }) => {
  return (
    <div>
      <div className='result'> {
        booksFound === false ? <p>Books not found</p>
        : books.length === 0 ? <p>Enter request</p> 
        : isLoading ? <div className="loading-screen"><div className="loading-spinner"></div></div>
        : <p>Found {books.length} books</p>
      } </div>
      <div className="book-list">
        {books.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
      {hasMoreBooks && (
        <div>
          <button className="load-more-button" onClick={handleLoadMore}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default BookList;
