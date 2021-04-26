import { createReducer, on,  } from '@ngrx/store';

import {listBooks, deleteBook, chooseBook} from "./books.actions";
import { Book } from './books.model';

export const booksFeatureKey = "books";

export interface BooksFeatureState {
    books: Array<Book>;
}

export const initialState: BooksFeatureState = {
    books: []
};

export const bookReducer = createReducer(
    initialState,
    on(listBooks, (state, books) => books),
    on(chooseBook, (state, {bookId}) => {
        return {
            books: state.books.filter(book => book.id === bookId)
        }
    }),
    on(deleteBook, (state, {bookId}) => {
        return {
            books: state.books.filter(book => book.id !== bookId)
        }
    })
)
