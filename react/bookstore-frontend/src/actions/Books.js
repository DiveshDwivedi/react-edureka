import  * as api from '../services/api'

// export const fetchBooks = () => async dispatch => {
//     try {
//         const books = await api.fetchBooks();
//         dispatch({
//             type: 'SET_BOOKS',
//             payload: books
//         })
//     } catch (error) {
//         console.log('Error occur while fetching books : ', error);
//     }
// }


export const fetchBooks = async () => {
    try {
        const books = await api.fetchBooks();
        dispatch({
            type: 'SET_BOOKS',
            payload: books
        })
    } catch (error) {
        console.log('Error occur while fetching books : ', error);
    }
}