
// src/components/BooksList.js
import React from 'react';
import Book from './Book';

const BooksList = ({ books }) => {
  return (
    <div className="container">
      <div className="row">
        {books.map((book) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Book book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;