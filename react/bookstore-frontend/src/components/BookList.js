
// src/components/BooksList.js
import React, { useState } from 'react';
import Book from './Book';
import { deleteBookById, fetchBooks } from '../services/api.js';


const BooksList = ({ books}) => {
  // const [new_book, setbook] = useState(books);
  const deleteBook = (book) => {
    deleteBookById(book.id).then(() => {
    fetchBooks();
    })
  }
  return (
    <div className="container">
      <div className="row">
        {books.map((book) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Book book={book} />
            <button onClick={() => deleteBook(book)}>Delete</button>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default BooksList;