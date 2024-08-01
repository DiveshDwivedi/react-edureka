import React from 'react';
import Book from './Book';

import { useEffect, useState } from "react"; 


import { deleteBookById, fetchBooks } from '../services/api.js';


const BooksList = () => {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    const fetchBooksList = async () => {
      try {
        const fetchBooksList = await fetchBooks();
        setbooks(fetchBooksList);
      } catch (error) {
        console.log('Error Occured while fetching book details  ', error);
      }
    }
    fetchBooksList();
  }, [])


  const deleteBook = (book) => {
    deleteBookById(book.id).then(() => {
    fetchBooks();
    })
  }
  return (
    <div className="container">
      <div className="row">
        {books.map((book) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mt-2">
            <Book book={book} />
            <div className='upd-btn'>
              <button className="btn btn-info">Update</button>
              <button className="btn btn-danger" onClick={() => deleteBook(book)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;