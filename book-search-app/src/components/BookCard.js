import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const { id } = book;
  return (
    <div className="book-card-item">
      <Link to={`/ModsenTest/books/${id}`}>
        {book.volumeInfo.imageLinks && (
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        )}
        <h3>{book.volumeInfo.title}</h3>
        <p>Category: {book.volumeInfo.categories ? book.volumeInfo.categories[0] : 'N/A'}</p>
        <p>Authors: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'}</p>
      </Link>
    </div>
  );
};

export default BookCard;
