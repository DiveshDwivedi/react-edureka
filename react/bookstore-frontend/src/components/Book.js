
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBookById } from "../services/api.js";

const Book = () => {
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
    <div class="container mt-5">
        <div class="card">
            <div class="card-header text-center bg-light">
                <h2>{book.title}</h2>
                <h5>by {book.author}</h5>
            </div>
            <div class="card-body">
                <p class="card-text"><strong>ISBN:</strong> {book.isbn ?? '9780142437247'}</p>
                <p class="card-text"><strong>Published Date:</strong> {book.publishedDate ?? '2024-08-01'} </p>
                <p class="card-text"><strong>Genre:</strong> {book.genre ?? 'Story'}</p>
                <div class="mt-4">
                    <h5>Description:</h5>
                    <p>{book.description}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Book;