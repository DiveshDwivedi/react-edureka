import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./components/layouts/HomePage";
import Book from "./components/books/Book";
import BookList from "./components/books/BookList";
import AddBook from "./components/books/AddBook";
import UpdateBook from "./components/books/UpdateBook";
import LoginPage from "./components/login/LoginPage";
import Register from "./components/register/Register";
import Signup from "./components/register/Signup";
import Error from './components/auth/Error';
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} errorElement={<Error />}/>
          <Route path="/book" element={<BookList />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/create/book" element={<AddBook />} />
          <Route path="/update/book/:id" element={<UpdateBook />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
