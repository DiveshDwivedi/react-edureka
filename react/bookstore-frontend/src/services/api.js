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
    return await axios.delete(`http://localhost:3002/books/${id}`);
  };

  export const createBook = async (data) => {
    const response = await axios.post(`http://localhost:3002/books`, data);
    return response.data;
  };


  export const updateBook = async (id, data) => {
    const response = await axios.put(`http://localhost:3002/books/${id}`, data);
    return response.data;
  };

  export const registerUser = async (data) => {
    const response = await axios.post(`http://localhost:3002/users`, data);
    return response.data;
  };

  export const username = async (username) => {
    const response = await axios.get(`http://localhost:3002/users?username=${username}`);
    return response.data;
  };