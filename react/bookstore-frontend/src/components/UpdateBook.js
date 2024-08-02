import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBookById, updateBook } from "../services/api.js";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UpdateBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

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


  const handleChange = (e) => {
    const {name, value} = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name]:value,
        }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Book Updated:", book);
    updateBook(id, book);
    toast.success('Your record is updated');
    setTimeout(() => {
      navigate('/book');
    }, 2000)
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="container">
        <Toaster />
        <div className="form-container">
          <div className="form-header text-center">
            <h2>Edit Book</h2>
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              className="form-control"
              placeholder="Enter your title"
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={book.author}
              onChange={handleChange}
              placeholder="Enter your author"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              id="description"
              value={book.description}
              onChange={handleChange}
              placeholder="Enter the description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={book.price}
              onChange={handleChange}
              placeholder="Enter the book price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="isbn">Isbn</label>
            <input
              type="number"
              className="form-control"
              name="isbn"
              value={book.isbn}
              onChange={handleChange}
              placeholder="Enter the book isbn"
            />
          </div>
          <div className="form-group">
            <label htmlFor="isbn">Stock</label>
            <input
              type="number"
              className="form-control"
              name="stock"
              value={book.stock}
              onChange={handleChange}
              placeholder="Enter the book stock"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-2">
            Update Book
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateBook;
