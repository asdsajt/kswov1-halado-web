import {createFeatureSelector, createSelector} from "@ngrx/store";
import {booksFeatureKey, BooksFeatureState} from "./books.reducer";
import { AppState } from '../../app.module';

export const selectFeature = createFeatureSelector<AppState, BooksFeatureState>(booksFeatureKey);

export const selectBooks = createSelector(
    selectFeature,
    (state: BooksFeatureState) => {
        return state.books;
    }
)
