import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IBookLibrary,
  IBookRemove,
  IIdBook,
  IRecommendedBooks,
  IRecommendedReq,
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
