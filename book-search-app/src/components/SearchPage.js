import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import BookList from './BookList';

const API_KEY = 'AIzaSyDquY2lHBEfuy1aI_UKPww5THnhwDl5HyI';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sorting, setSorting] = useState('relevance');
  const [books, setBooks] = useState([]);
  const [hasMoreBooks, setHasMoreBooks] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (searchTerm, category, sort) => {
    setSearchTerm(searchTerm);
    setCategory(category);
    setSorting(sort);
    searchBooks(searchTerm);
  };

  const searchBooks = (searchTerm) => {
    setIsLoading(true);
    setTimeout(function(){}, 1000);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      searchTerm
    )}&key=${API_KEY}&maxResults=30${category !== 'all' ? `&subject=${category}` : ''}&orderBy=${sorting}`;
    
    axios
      .get(url)
      .then(response => {
        setBooks(response.data.items || []);
        setHasMoreBooks(true);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setBooks([]);
        setHasMoreBooks(false);
        setIsLoading(false);
      });
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(function(){}, 1000);
    const startIndex = books.length;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      searchTerm
    )}&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`;

    
    axios
      .get(url)
      .then(response => {
        const newBooks = response.data.items || [];
        setBooks(prevBooks => [...prevBooks, ...newBooks]);
        setHasMoreBooks(newBooks.length > 0);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div className="search-page">
      <h1>Google Books Search</h1>
      <SearchForm handleSearch={handleSearch} />
      {
        books.length == 0 ? <p>Enter request</p> 
        : isLoading ? <div className="loading-screen"><div className="loading-spinner"></div></div>
        : <p>Found {books.length} books</p>
      }
      <BookList books={books} handleLoadMore={handleLoadMore} hasMoreBooks={hasMoreBooks} />
    </div>
  );
};

export default SearchPage;
