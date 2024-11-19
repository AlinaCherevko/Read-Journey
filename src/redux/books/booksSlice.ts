import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  addToLibrary,
  deleteFromLibrary,
  getRecommendedBooks,
  getUsersBooks,
  getCurrentBook,
  startReadBook,
  stopReadBook,
  deleteSession,
  addOwnBook,
} from "./booksOperations";
import { IBooksState } from "./types";
//import { RootState, store } from "../store";

const initialState: IBooksState = {
  recommended: {
    results: [],
    totalPages: 0,
  },
  currentBook: null,
  inLibrary: [],
  error: "",
  isLoading: false,
  isRefreshing: false,
};

const isPending = (state: IBooksState) => {
  state.isLoading = true;
  state.error = "";
};

const isRejected = (
  state: IBooksState,
  action: PayloadAction<string | undefined>
) => {
  //const authState = store.getState() as RootState;
  //const isRefreshingToken = authState.auth.isRefreshing;

  // state.error = isRefreshingToken === true ? "" : action.payload;
  state.error = action.payload;
  state.isLoading = false;
};

export const booksSlice = createSlice({
  name: "books",
  initialState,

  reducers: {},
  extraReducers(builder) {
    //getRecommendedBooks
    builder.addCase(getRecommendedBooks.pending, isPending);
    builder.addCase(getRecommendedBooks.rejected, isRejected);
    builder.addCase(getRecommendedBooks.fulfilled, (state, { payload }) => {
      state.recommended.results = payload.results;
      state.recommended.totalPages = payload.totalPages;
      state.error = "";
      state.isLoading = false;
    });
    //addBookToLibrary
    builder.addCase(addToLibrary.pending, isPending);
    builder.addCase(addToLibrary.rejected, isRejected);
    builder.addCase(addToLibrary.fulfilled, (state, { payload }) => {
      state.inLibrary.push(payload);
      state.error = "";
      state.isLoading = false;
    });

    //removeFromLibrary
    builder.addCase(deleteFromLibrary.pending, isPending);
    builder.addCase(deleteFromLibrary.rejected, isRejected);
    builder.addCase(deleteFromLibrary.fulfilled, (state, { payload }) => {
      state.inLibrary = state.inLibrary.filter(
        (item) => item._id !== payload.id
      );
      state.error = "";
      state.isLoading = false;
    });

    //getUsersBooks
    builder.addCase(getUsersBooks.pending, isPending);
    builder.addCase(getUsersBooks.rejected, isRejected);
    builder.addCase(getUsersBooks.fulfilled, (state, { payload }) => {
      state.inLibrary = payload;
      state.error = "";
      state.isLoading = false;
    });

    //getCurrentBook
    builder.addCase(getCurrentBook.pending, isPending);
    builder.addCase(getCurrentBook.rejected, isRejected);
    builder.addCase(getCurrentBook.fulfilled, (state, { payload }) => {
      state.currentBook = payload;
      state.error = "";
      state.isLoading = false;
    });

    //start reading book
    builder.addCase(startReadBook.pending, isPending);
    builder.addCase(startReadBook.rejected, isRejected);
    builder.addCase(startReadBook.fulfilled, (state, { payload }) => {
      state.currentBook = payload;
      state.error = "";
      state.isLoading = false;
    });

    //stop reading book
    builder.addCase(stopReadBook.pending, isPending);
    builder.addCase(stopReadBook.rejected, isRejected);
    builder.addCase(stopReadBook.fulfilled, (state, { payload }) => {
      state.currentBook = payload;
      state.isLoading = false;
      state.error = "";
    });

    //delete reading session
    builder.addCase(deleteSession.pending, isPending);
    builder.addCase(deleteSession.rejected, isRejected);
    builder.addCase(deleteSession.fulfilled, (state, { payload }) => {
      state.currentBook = payload;
      state.isLoading = false;
      state.error = "";
    });

    //addOwnBook
    builder.addCase(addOwnBook.pending, isPending);
    builder.addCase(addOwnBook.rejected, isRejected);
    builder.addCase(addOwnBook.fulfilled, (state, { payload }) => {
      state.inLibrary.push(payload);
      state.error = "";
      state.isLoading = false;
    });
  },
});

export const booksReducer = booksSlice.reducer;
