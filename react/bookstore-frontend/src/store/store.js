import { configureStore } from "@reduxjs/toolkit"
import { booksReducers } from "../reducers/books.js"

export const Store = configureStore({
    reducer: booksReducers,
})