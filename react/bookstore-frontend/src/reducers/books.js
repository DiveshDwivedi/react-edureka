const initialState = {
    books: [],
    book: null,
}


const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return {...state, books: action.payload}
        case 'SET_BOOKS':
            return {...state, books: action.payload}
        default:
            return state;
    }
}

export default booksReducer