import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRecommendedBooks, IRecommendedReq } from "./types";
import { AxiosError } from "axios";
import { RootState } from "../store";
import { axios, setAuthHeader } from "../auth/authOperations";

//getRecommendedBooks
export const getRecommendedBooks = createAsyncThunk<
  IRecommendedBooks,
  IRecommendedReq,
  { rejectValue: string }
>("books/getRecommended", async ({ page, title, author }, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;
  console.log(persistedToken);
  if (!persistedToken) {
    return thunkAPI.rejectWithValue("Token is missing");
  }

  try {
    setAuthHeader(persistedToken);
    const { data } = await axios.get(
      `books/recommend/?title=${title}&author=${author}&page=${page}`
    );
    console.log(data);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});
