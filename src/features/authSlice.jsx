import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  token: "",
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state.user = payload.user.username;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state.user = payload.data.username;
    },

    logoutSuccess: (state) => {
      state.loading = false;
      state.token = "";
      state.user = "";
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
