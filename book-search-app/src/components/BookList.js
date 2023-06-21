import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, handleLoadMore, hasMoreBooks }) => {
  return (
    <div>
      <div className="book-card">
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
