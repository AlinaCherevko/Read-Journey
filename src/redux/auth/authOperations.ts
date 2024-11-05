import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { RootState } from "../store";
import {
  ISignUpData,
  ISignUpRes,
  ILoginData,
  ICurrentUserRes,
  IRefreshRes,
} from "./types";

export const instance = axios.create({
  baseURL: "https://readjourney.b.goit.study/api",
});

// export const setAuthHeader = (token: string) => {
//   if (token) {
//     instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     return;
//   }
//   instance.defaults.headers.common["Authorization"] = "";
// };

//signup
export const signup = createAsyncThunk<
  ISignUpRes,
  ISignUpData,
  { rejectValue: string }
>("auth/register", async (credentials, thunkAPI) => {
  try {
    const { data } = await instance.post("/users/signup", credentials);
    // setAuthHeader(data.token);
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
    const { data } = await instance.post("/users/signin", credentials);
    //setAuthHeader(data.token);
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
    await instance.post("/users/signout");
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
    //setAuthHeader(persistedToken);
    const { data } = await instance.get("/users/current");
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
  console.log(persistedRefreshToken);
  try {
    const { data } = await instance.get("/users/current/refresh", {
      headers: {
        Authorization: `Bearer ${persistedRefreshToken}`,
      },
    });
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});
