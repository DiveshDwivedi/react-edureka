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
    console.log('axios create data : ', data);
    const response = await axios.post(`http://localhost:3002/books`, data);
    return response.data;
  };


  export const updateBook = async (id, data) => {
    console.log('axios update data : ', data);
    const response = await axios.put(`http://localhost:3002/books/${id}`, data);
    return response.data;
  };

  export const registerUser = async (data) => {
    console.log('axios register user : ', data);
    const response = await axios.post(`http://localhost:3002/users`, data);
    return response.data;
  };