import { RootState } from "../store";

export const selectRecommendedBooks = (state: RootState) =>
  state.books.recommended;
export const selectBooksLoading = (state: RootState) => state.books.isLoading;
export const selectLibrariesBooks = (state: RootState) => state.books.inLibrary;
export const selectCurrentBook = (state: RootState) => state.books.currentBook;
