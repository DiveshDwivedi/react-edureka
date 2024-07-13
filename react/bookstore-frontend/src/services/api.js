// services/api.js
import axios from 'axios';

export const fetchBooks = async () => {
  const response = await axios.get('http://localhost:3001/books');
  return response.data;
};

export const fetchBookById = async (id) => {
    const response = await axios.get(`http://localhost:3001/books/${id}`);
    return response.data;
  };

