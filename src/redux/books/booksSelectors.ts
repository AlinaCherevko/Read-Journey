import { RootState } from "../store";

export const selectRecommendedBooks = (state: RootState) =>
  state.books.recommended;
