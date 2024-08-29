import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Book from "./components/Books/Book";
import BookList from "./components/Books/BookList";
import AddBook from "./components/Books/AddBook";
import UpdateBook from "./components/Books/UpdateBook";
import LoginPage from "./components/Login/LoginPage";
import Register from "./components/Register/Register";
import Signup from "./components/Register/Signup";
import Error from '../src/components/Error';
import Footer from "./components/layouts/Footer";

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
