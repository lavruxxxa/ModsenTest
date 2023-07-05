import React, { useState } from 'react';

import './SearchForm.css'

const SearchForm = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('relevance');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm, category, sort);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className='search-col'>
        <div className='search-row'>
          <h1>Google Books Search</h1>
        </div>
        <div className='search-row'>
          <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={handleChange}
          />
          <button type="submit">Search</button>
        </div>
        <div className='search-row'>
          <p>Category:</p>
          <select value={category} onChange={handleCategoryChange}>
            <option value="all">All</option>
            <option value="art">Art</option>
            <option value="biography">Biography</option>
            <option value="computers">Computers</option>
            <option value="history">History</option>
            <option value="medical">Medical</option>
            <option value="poetry">Poetry</option>
          </select>
          <p>Sorting by:</p>
          <select value={sort} onChange={handleSortChange}>
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
