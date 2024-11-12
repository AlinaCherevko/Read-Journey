import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IBookLibrary,
  IBookRemove,
  IIdBook,
  IOwnBook,
  IRecommendedBooks,
  IRecommendedReq,
  ISessionReading,
  IStartRead,
} from "./types";
import { AxiosError } from "axios";
import { RootState } from "../store";
import { instance } from "../auth/authOperations";
import "../auth/authConfig";

//getRecommendedBooks
export const getRecommendedBooks = createAsyncThunk<
  IRecommendedBooks,
  IRecommendedReq,
  { rejectValue: string }
>("books/getRecommended", async ({ page, title, author }, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue("Token is missing");
  }
  try {
    const { data } = await instance.get(
      `books/recommend/?title=${title}&author=${author}&page=${page}`
    );
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

// add book from recommended to library
export const addToLibrary = createAsyncThunk<
  IBookLibrary,
  IIdBook,
  { rejectValue: string }
>("books/addToLibrary", async ({ id }, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue("Token is missing");
  }

  try {
    const { data } = await instance.post(`books/add/${id}`);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

// delete book from library
export const deleteFromLibrary = createAsyncThunk<
  IBookRemove,
  IIdBook,
  { rejectValue: string }
>("books/deleteFromLibrary", async ({ id }, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue("Token is missing");
  }

  try {
    const { data } = await instance.delete(`books/remove/${id}`);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

// get users books
export const getUsersBooks = createAsyncThunk<
  IBookLibrary[],
  undefined,
  { rejectValue: string }
>("books/getUsersBooks", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue("Token is missing");
  }

  try {
    const { data } = await instance.get("books/own");
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

// start reading
export const startReadBook = createAsyncThunk<
  IBookLibrary,
  IStartRead,
  { rejectValue: string }
>("books/startReadBook", async ({ id, page }, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue("Token is missing");
  }

  try {
    const { data } = await instance.post("books/reading/start", { id, page });
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//stop reading
export const stopReadBook = createAsyncThunk<
  IBookLibrary,
  IStartRead,
  { rejectValue: string }
>("books/stopReadBook", async ({ id, page }, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue("Token is missing");
  }

  try {
    const { data } = await instance.post("books/reading/finish", { id, page });
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

// get current book
export const getCurrentBook = createAsyncThunk<
  IBookLibrary,
  IIdBook,
  { rejectValue: string }
>("books/getCurrentBook", async ({ id }, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue("Token is missing");
  }

  try {
    const { data } = await instance.get(`books/${id}`);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//delete reading session
export const deleteSession = createAsyncThunk<
  IBookLibrary,
  ISessionReading,
  { rejectValue: string }
>("books/deleteSession", async ({ bookId, readingId }, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue("Token is missing");
  }

  try {
    const { data } = await instance.delete(
      `books/reading?bookId=${bookId}&readingId=${readingId}`
    );
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//add own book to library
export const addOwnBook = createAsyncThunk<
  IBookLibrary,
  IOwnBook,
  { rejectValue: string }
>("books/addOwnBook", async ({ title, author, totalPages }, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue("Token is missing");
  }
  try {
    const { data } = await instance.post("books/add", {
      title,
      author,
      totalPages,
    });
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});
