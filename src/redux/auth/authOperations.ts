import { createAsyncThunk } from "@reduxjs/toolkit";
import axios1, { AxiosError } from "axios";
import { RootState } from "../store";
import {
  ISignUpData,
  ISignUpRes,
  ILoginData,
  ICurrentUserRes,
  IRefreshRes,
} from "./types";

export const axios = axios1.create({
  baseURL: "https://readjourney.b.goit.study/api",
});

export const setAuthHeader = (token: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return;
  }
  axios.defaults.headers.common["Authorization"] = "";
};

// axios.interceptors.request.use(
//   function (config) {
//
//     // Зробіть що-небудь перед надсиланням запиту
//     return config;
//   },
//   function (error) {
//     // Зробіть щось із помилкою запиту
//     return Promise.reject(error);
//   }
// );

//signup
export const signup = createAsyncThunk<
  ISignUpRes,
  ISignUpData,
  { rejectValue: string }
>("auth/register", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//login
export const logIn = createAsyncThunk<
  ISignUpRes,
  ILoginData,
  { rejectValue: string }
>("auth/signin", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/signin", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      console.log(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//logout
export const logOut = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/signout");
    //setAuthHeader();
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//get current
export const getCurrentUser = createAsyncThunk<
  ICurrentUserRes,
  undefined,
  { rejectValue: string }
>("auth/current", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Failed to fetch user");
  }
  try {
    setAuthHeader(persistedToken);
    const { data } = await axios.get("/users/current");
    console.log(data);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//refresh
export const refreshCurrentUser = createAsyncThunk<
  IRefreshRes,
  undefined,
  { rejectValue: string }
>("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedRefreshToken = state.auth.refreshToken;
  if (!persistedRefreshToken) {
    return thunkAPI.rejectWithValue("Failed to fetch user");
  }
  try {
    setAuthHeader(persistedRefreshToken);
    const { data } = await axios.get("/users/current/refresh");
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});
