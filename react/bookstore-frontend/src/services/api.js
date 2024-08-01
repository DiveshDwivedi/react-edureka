// services/api.js
import axios from 'axios';

export const fetchBooks = async () => {
  const response = await axios.get('http://localhost:3002/books');
  return response.data;
};

export const fetchBookById = async (id) => {
    const response = await axios.get(`http://localhost:3002/books/${id}`);
    return response.data;
  };

  export const deleteBookById = async (id) => {
     await axios.delete(`http://localhost:3002/books/${id}`);
    // return fetchBooks();
  };

  export const createBook = async (data) => {
    console.log('axios data : ', data);
    const response = await axios.post(`http://localhost:3002/books`, data);
    return response.data;
  };

