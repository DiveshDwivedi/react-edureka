import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookModal from './components/BookModal';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
// import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookList />} />
        <Route path="/book/:id" element={<BookModal />} />
        <Route path="/create/book" element={<AddBook />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;