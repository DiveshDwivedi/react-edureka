import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Book from "./components/Book";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";
import LoginPage from "./components/Login/LoginPage";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookList />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/create/book" element={<AddBook />} />
          <Route path="/update/book/:id" element={<UpdateBook />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
    </Router>
  );
}

export default App;
