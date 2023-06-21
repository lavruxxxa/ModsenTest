import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import BookDetail from './components/BookDetail';
import './styles.css';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/ModsenTest/" exact element={<SearchPage/>} />
          <Route path="/ModsenTest/books/:id" element={<BookDetail/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

