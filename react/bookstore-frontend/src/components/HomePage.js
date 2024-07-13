import { useEffect, useState } from "react"; 
import BooksList from "./BookList";
import { fetchBooks } from "../services/api.js";
const HomePage = () => {
  const [books, setbooks] = useState([]);
  useEffect(() => {

    const fetchBooksList = async () => {
      try {
        const fetchBooksList = await fetchBooks();
        setbooks(fetchBooksList);
      } catch (error) {
        console.log('Error Occured while fetching book details  ', error);
      }
    }

    fetchBooksList();
  }, [books])

    return (
      <>
      <header>
        <h1>Home Page of Bookstore</h1>
      </header>
      <body>
      <BooksList books={books}></BooksList>
      </body>
      </>
      
    );
  };
  
  export default HomePage;