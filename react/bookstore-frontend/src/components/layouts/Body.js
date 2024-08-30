import { useEffect, useState } from "react";
import { fetchBooks } from "../../services/api.js";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";
import SearchText from "../books/Search.js";
import Index from "./Index.js";

const Body = () => {
  const [books, setBooks] = useState([]);

  const usenavigate = useNavigate();

  useEffect(() => {
    // let username = sessionStorage.getItem("username");

    // if (username === "" || username === null) {
    //   usenavigate("/login");
    // }

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
      {" "}
      {books.length === 0 ? (
        <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
      ) : (
        <div className="container mt-2">
          <SearchText books={books} setBooks={setBooks} />
          <div className="row">
            {books.map((book) => (
              <Index key={book.id} books={book} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
