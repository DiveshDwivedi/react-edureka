import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"; 
import { deleteBookById, fetchBooks } from '../services/api.js';
import toast, { Toaster } from 'react-hot-toast';


const BooksList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooksList = async () => {
      try {
        const fetchBooksList = await fetchBooks();
        setBooks(fetchBooksList);
      } catch (error) {
        console.log('Error Occured while fetching book details  ', error);
      }
    }
    fetchBooksList();
  }, [])


  const deleteBook = async (book) => {
    try {
      await deleteBookById(book.id);
      setBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id));
      toast.success('Your record is deleted');
    } catch (error) {
      console.log('Error Occured while deleting book', error);
    }

  }


  return (
    <div className="container">
      <Toaster />
      <div className="row">
        {books.map((book) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mt-2">
            <Book book={book} />
            <div className='upd-btn'>
            <Link className="btn btn-primary" to={`/update/book/${book.id}`}>Update</Link>
              <button className="btn btn-danger" onClick={() => deleteBook(book)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;