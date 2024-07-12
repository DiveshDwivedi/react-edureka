// src/components/Book.js
import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="card">
      {/* <img src={book.coverImage} className="card-img-top" alt={book.title} /> */}
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.description}</p>
      </div>
    </div>
  );
};

export default Book;