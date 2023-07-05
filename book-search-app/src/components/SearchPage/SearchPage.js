import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from '../SearchForm/SearchForm';
import BookList from '../BookList/BookList';
import {API_KEY, API_URL} from '../../constants/constants.js'

import './SearchPage.css'


const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sorting, setSorting] = useState('relevance');
  const [books, setBooks] = useState([]);
  const [hasMoreBooks, setHasMoreBooks] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [booksFound, setBooksFound] = useState(true);

  const handleSearch = (searchTerm, category, sorting) => {
    setSearchTerm(searchTerm);
    setCategory(category);
    setSorting(sorting);
    searchBooks(searchTerm, category, sorting);
  };

  const searchBooks = (searchTerm, category, sorting) => {
    setIsLoading(true);
    const url = `${API_URL}?q=${encodeURIComponent(searchTerm)}${category !== 'all' ? `+subject:${category}` : ''}&maxResults=30&orderBy=${sorting}&key=${API_KEY}`;
    
    axios
      .get(url)
      .then(response => {
        setBooks(response.data.items || []);
        setBooksFound(response.data.items === [] ? false : true);
        setHasMoreBooks(response.data.items.length === 30 ? true : false);
        setIsLoading(false);
      })
      .catch(error => {
        if(error.name === 'AxiosError'){
          alert(error);
        }
        setBooks([]);
        setBooksFound(false);
        setHasMoreBooks(false);
        setIsLoading(false);
      });
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    const startIndex = books.length;
    const url = `${API_URL}?q=${encodeURIComponent(searchTerm)}${category !== 'all' ? `+subject:${category}` : ''}&startIndex=${startIndex}&maxResults=30&&orderBy=${sorting}&key=${API_KEY}`;

    
    axios
      .get(url)
      .then(response => {
        const newBooks = response.data.items || [];
        setBooks(prevBooks => [...prevBooks, ...newBooks]);
        setHasMoreBooks(newBooks.length === 30 ? true : false);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
      });
  };

  return (
    <div className="search-page">
      <SearchForm handleSearch={handleSearch} />
      <BookList 
      books={books} 
      handleLoadMore={handleLoadMore} 
      hasMoreBooks={hasMoreBooks} 
      isLoading={isLoading} 
      booksFound={booksFound}
      />
    </div>
  );
};

export default SearchPage;
