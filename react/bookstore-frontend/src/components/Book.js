// src/components/Book.js
import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">{book.description}</p>
        </div>
        <Link to={`/book/${book.id}`} className="btn btn-primary">View</Link>
      </div>

  );
};

export default Book;
