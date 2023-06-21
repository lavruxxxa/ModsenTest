import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_KEY = 'AIzaSyDquY2lHBEfuy1aI_UKPww5THnhwDl5HyI';

const BookDetail = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  const fetchBookDetails = () => {
    const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`;

    axios
      .get(url)
      .then(response => {
        setBook(response.data.items[0]);
      })
      .catch(error => {
        console.log(error);
        setBook(null);
      });
  };

  if (!book) {
    return (<div>Loading...</div>);
  }

  return (
    <div>
      <p>hi</p>
      <h2>{book.volumeInfo.title}</h2>
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <p>Categories: {book.volumeInfo.categories?.join(', ')}</p>
      <p>Authors: {book.volumeInfo.authors?.join(', ')}</p>
      <p>Description: {book.volumeInfo.description}</p>
    </div>
  );
};

export default BookDetail;
