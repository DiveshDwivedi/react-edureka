import NavBar from "./NavBar.js";
import { useEffect, useState } from "react";
import { fetchBooks } from "../services/api.js";

const HomePage = () => {
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
  return (
    <>
      <header>
        <NavBar />
      </header>

      <div className="container mt-2">
        <div className="row">
          {books.map((book) => (
            <div className="col-3 mb-1">
              <div className="card">
                <img
                  src="https://m.media-amazon.com/images/I/41aL70yoloL._SX342_SY445_.jpg"
                  classNameName="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.author}</p>
                  <p className="card-text">
                  ₹ {book.price}
                    {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
