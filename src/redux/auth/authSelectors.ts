import { RootState } from "../store";

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuth = (state: RootState) => state.auth.isLoggedIn;
export const selectError = (state: RootState) => state.auth.error;
export const selectToken = (state: RootState) => state.auth.token;
export const selectRefreshing = (state: RootState) => state.auth.isRefreshing;
export const selectIsRefreshingToken = (state: RootState) =>
  state.auth.isRefreshingToken;
export const selectIsAuthLoading = (state: RootState) =>
  state.auth.isAuthLoading;

// export const selectBooksInLibraryAuth = (state: RootState) =>
// state.auth.booksInLibrary;
