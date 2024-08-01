import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBookById } from "../services/api.js";

const BookModal = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async (id) => {
      try {
        const fetchBook = await fetchBookById(id);
        setBook(fetchBook);
      } catch (error) {
        console.log("Error Occured while fetching book details  ", error);
      }
    };
    fetchBook(id);
  }, [id]);

  
  if (!book) {
    return <div>Loading...</div>;
  }


  return (
    // <div className="modal fade" id={`book-modal-${book.id}`}>
    <div id={`book-modal-${book.id}`}>
      <h5 className="modal-title">{book.title}</h5>
      <p>ID: {book.id}</p>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
      <p>PublishedDate: {book.publishedDate}</p>
      <p>Genre: {book.genre}</p>
      <p>Description: {book.description}</p>
    </div>
  );
};

export default BookModal;
