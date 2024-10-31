import { createSlice } from "@reduxjs/toolkit";

import { getRecommendedBooks } from "./booksOperations";
import { IBooksState } from "./types";

const initialState: IBooksState = {
  recommended: {
    results: [],
    totalPages: 0,
  },
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
      console.log(payload);
      state.recommended.results = payload.results;
      state.recommended.totalPages = payload.totalPages;
      state.isError = false;
      state.isLoading = false;
    });
  },
});

export const booksReducer = booksSlice.reducer;
