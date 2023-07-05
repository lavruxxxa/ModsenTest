import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from '../components/SearchPage/SearchPage';
import BookDetail from '../components/BookDetail/BookDetail';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/ModsenTest/" exact element={<SearchPage/>} />
          <Route path="/ModsenTest/books/:id" element={<BookDetail/>} />
        </Routes>
    </Router>
  );
};

export default App;

