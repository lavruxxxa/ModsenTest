import React, { useState } from 'react';

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
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleChange}
      />
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="art">Art</option>
        <option value="biography">Biography</option>
        <option value="computers">Computers</option>
        <option value="history">History</option>
        <option value="medical">Medical</option>
        <option value="poetry">Poetry</option>
      </select>
      <select value={sort} onChange={handleSortChange}>
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
