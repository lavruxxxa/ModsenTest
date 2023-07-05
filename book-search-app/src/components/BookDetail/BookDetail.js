import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {API_KEY, API_URL} from '../../constants/constants.js'

import './BookDetail.css'

const BookDetail = React.memo(() => {
  const [book, setBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  const fetchBookDetails = () => {
    const url = `${API_URL}/${id}?key=${API_KEY}`;

    axios
      .get(url)
      .then(response => {
        setBook(response.data.volumeInfo);
      })
      .catch(error => {
        setBook(null);
      });
  };

  if (!book) {
    return (<div className="loading-screen"><div className="loading-spinner"></div></div>);
  }

  return (
    <div className="book-detail">
      <a className="back" href="/ModsenTest">back</a>
      <div className='detail-row'> 
        <div className='detail-col'>
          <img src={book.imageLinks ? book.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt={book.title} />
        </div>
        <div className='detail-col'>
          <h2>{book.title}</h2>
          <p>Category: {book.categories ? book.categories.join(', ') : 'N/A'}</p>
          <p>Authors: {book.authors ? book.authors.join(', ') : 'N/A'}</p>
          <p>Description: {book.description ? book.description : 'none'}</p>
        </div>
      </div>
    </div>
  );
});

export default BookDetail;
