import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  logIn,
  logOut,
  getCurrentUser,
  refreshCurrentUser,
  signup,
} from "./authOperations";
import { IState } from "./types";

const initialState: IState = {
  user: { name: "", email: "", _id: "" },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthLoading: false,
  error: "",
};

const handleAuthPending = (state: IState) => {
  state.isAuthLoading = true;
  state.error = "";
};

const handleAuthRejected = (
  state: IState,
  action: PayloadAction<string | undefined>
) => {
  state.isAuthLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {},
  extraReducers(builder) {
    //register
    builder.addCase(signup.pending, handleAuthPending);
    builder.addCase(signup.rejected, handleAuthRejected);
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = true;
      state.isAuthLoading = false;
      state.error = "";
    });
    //login
    builder.addCase(logIn.pending, handleAuthPending);
    builder.addCase(logIn.rejected, handleAuthRejected);
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = true;
      state.isAuthLoading = false;
      state.error = "";
    });
    //logout
    builder.addCase(logOut.pending, handleAuthPending);
    builder.addCase(logOut.rejected, handleAuthRejected);
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.refreshToken = initialState.refreshToken;
      state.isLoggedIn = initialState.isLoggedIn;
      state.isAuthLoading = initialState.isAuthLoading;
      state.error = initialState.error;
    });

    //refresh
    builder.addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = true;
      state.error = "";
    });
    builder.addCase(refreshCurrentUser.rejected, (state, { payload }) => {
      state.error = payload;
    });

    //current
    builder.addCase(getCurrentUser.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state.user._id = payload._id;
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = "";
    });
    builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
      state.isRefreshing = false;
      state.error = payload;
    });
  },
});

export const authReducer = authSlice.reducer;
