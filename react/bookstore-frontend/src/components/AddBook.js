import React from "react";
import { useState } from "react";
import { createBook } from "../services/api.js";
import toast, { Toaster } from 'react-hot-toast';


const AddBook = () => {
  const book_details = {
    title: '',
    author: '',
    description: '',
    price: '',
    isbn: '',
    stock: ''
  } 
  const [book, setBook] = useState(book_details);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Book created:", book);
    createBook(book);
    setBook(book_details);
    toast.success('Your record is created');
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <Toaster/>
      <div className="container">
        <div className="form-container">
          <div className="form-header text-center">
            <h2>Create Book</h2>
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
              Create Book
            </button>
        </div>
      </div>
    </form>
  );
};

export default AddBook;
