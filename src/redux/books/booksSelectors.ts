import { RootState } from "../store";

export const selectRecommendedBooks = (state: RootState) =>
  state.books.recommended;
export const selectBooksLoading = (state: RootState) => state.books.isLoading;
