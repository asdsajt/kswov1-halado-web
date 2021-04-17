import { createAction, props } from "@ngrx/store";

export const listBooks = createAction(
  "[Books] List Books",
  props<{ books: Book[] }>()
);

export const chooseBook = createAction(
  "[Books] Choose a Book",
  props<{ bookId }>()
);

export const deleteBook = createAction(
  "[Books] Delete Book",
  props<{ bookId }>()
);
