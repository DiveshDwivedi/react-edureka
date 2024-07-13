// src/components/BookModal.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchBookById } from '../services/api.js';

const BookModal = () => {
  const {id} = useParams();
  const [book, setbook] = useState([]);

  useEffect(() => {
    const fetchBook = async (id) => {
      try {
        const fetchBook = await fetchBookById(id);
        setbook(fetchBook);
      } catch (error) {
        console.log('Error Occured while fetching book details  ', error);
      }
    }

    fetchBook(id);
  }, [id])

  return (
    <div className="modal fade" id={`book-modal-${book.id}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{book.title}</h5>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">
            <p>{book.longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;