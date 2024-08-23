import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteBookById, fetchBooks } from "../services/api.js";
import BookModal from "./BookModal.js";
import Header from "./layouts/Header.js";
import Footer from "./layouts/Footer.js";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooksList = async () => {
      try {
        const fetchBooksList = await fetchBooks();
        setBooks(fetchBooksList);
      } catch (error) {
        console.log("Error Occured while fetching book details  ", error);
      }
    };
    fetchBooksList();
  }, []);

  const deleteBook = async (book) => {
    try {
      await deleteBookById(book.id);
      setBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id));
    } catch (error) {
      console.log("Error Occured while deleting book", error);
    }
  };

  return (
    <>
      <Header />
      <div>
        <div className="container">
          <div className="row">
            <h1 className="h3 mt-3 mb-3">
              <strong>Books</strong> Dashboard
            </h1>
            <div className="row">
              <div className="col-12 col-lg-12 col-xxl-9 d-flex">
                <div className="card flex-fill">
                  <div className="card-header">
                    <h5 className="card-title text-center mb-0">
                      All Book Details
                    </h5>
                    <div className="float-right">
                      <button
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModalLong"
                      >
                        {" "}
                        Create{" "}
                      </button>
                    </div>
                  </div>

                  <table className="table table-hover my-0" style={{"height":"300px"}}>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th className="d-none d-xl-table-cell">Author</th>
                        <th className="d-none d-xl-table-cell">Price</th>
                        <th className="d-none d-md-table-cell">Action</th>
                      </tr>
                    </thead>
                    {books.map((book) => (
                      <tbody key={book.id}>
                        <tr>
                          <td>{book.title}</td>
                          <td className="d-none d-xl-table-cell">
                            {book.author}
                          </td>
                          <td className="d-none d-xl-table-cell">
                            {book.price}
                          </td>

                          <td className="d-none d-md-table-cell">
                            <span>
                              <Link
                                to={`/book/${book.id}`}
                                className="btn btn-primary"
                              >
                                View
                              </Link>
                            </span>
                            <span className="m-1">
                              <Link
                                className="btn btn-primary"
                                to={`/update/book/${book.id}`}
                              >
                                Update
                              </Link>
                            </span>
                            <button
                              className="btn btn-danger"
                              onClick={() => deleteBook(book)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
            <BookModal />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BooksList;
