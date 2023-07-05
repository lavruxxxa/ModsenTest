import React from 'react';
import { Link } from 'react-router-dom';

import './BookCard.css'

const BookCard = React.memo(({ book }) => {
  const { id } = book;
  return (
    <div className="book-list-item">
      <Link to={`/ModsenTest/books/${id}`}>
        <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt={book.volumeInfo.title} />
        <h3>{book.volumeInfo.title.length >= 50 ? book.volumeInfo.title.substring(0,49) + '...' : book.volumeInfo.title}</h3>
        <p>Category: {book.volumeInfo.categories ? book.volumeInfo.categories[0] : 'N/A'}</p>
        <p>Authors: {book.volumeInfo.authors ? book.volumeInfo.authors : 'N/A'}</p>
      </Link>
    </div>
  );
});

export default BookCard;
