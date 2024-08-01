import React from "react";
import { useState } from "react";
import { createBook } from "../services/api.js";

 const AddBook = () => {
    const [book, setBook] = useState({
        title:'The Trust',
        author:'Divesh',
        price: '121',
        isbn: '9780142437247',
        publishedDate: '2024-10-18',
        genre: 'Adventure',
        description: 'it\'s all about book',
        stock: 0,
    });


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
       const res = await createBook(book);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={book.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Author:</label>
                <input
                    type="text"
                    name="author"
                    value={book.author}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    name="price"
                    value={book.price}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>isbn:</label>
                <input
                    type="number"
                    name="isbn"
                    value={book.isbn}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>stock:</label>
                <input
                    type="number"
                    name="stock"
                    value={book.stock}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Create Book</button>
        </form>
    );
}

export default AddBook

