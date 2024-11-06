import { createSlice } from "@reduxjs/toolkit";

import {
  addToLibrary,
  deleteFromLibrary,
  getRecommendedBooks,
} from "./booksOperations";
import { IBooksState } from "./types";

const initialState: IBooksState = {
  recommended: {
    results: [],
    totalPages: 0,
  },
  inLibrary: [],
  isError: false,
  isLoading: false,
};

const isPending = (state: IBooksState) => {
  state.isLoading = true;
  state.isError = false;
};

const isRejected = (state: IBooksState) => {
  state.isError = true;
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
      state.isError = false;
      state.isLoading = false;
    });
    //addBookToLibrary
    builder.addCase(addToLibrary.pending, isPending);
    builder.addCase(addToLibrary.rejected, isRejected);
    builder.addCase(addToLibrary.fulfilled, (state, { payload }) => {
      state.inLibrary.push(payload);
      state.isError = false;
      state.isLoading = false;
    });

    //removeFromLibrary
    builder.addCase(deleteFromLibrary.pending, isPending);
    builder.addCase(deleteFromLibrary.rejected, isRejected);
    builder.addCase(deleteFromLibrary.fulfilled, (state, { payload }) => {
      state.inLibrary = state.inLibrary.filter(
        (item) => item._id !== payload.id
      );
      state.isError = false;
      state.isLoading = false;
    });
  },
});

export const booksReducer = booksSlice.reducer;
