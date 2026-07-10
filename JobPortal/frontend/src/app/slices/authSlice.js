import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  user: null,
  isAuthenticated: !!localStorage.getItem("access"),
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    loginSuccess: (state, action) => {
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      state.isAuthenticated = true;

      localStorage.setItem(
        "access",
        action.payload.access
      );

      localStorage.setItem(
        "refresh",
        action.payload.refresh
      );
    },

    logout: (state) => {
      state.access = null;
      state.refresh = null;
      state.user = null;
      state.isAuthenticated = false;

      localStorage.clear();
    },
  },
});

export const {
  loginSuccess,
  logout,
} = authSlice.actions;

export default authSlice.reducer;