import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const auth = localStorage.getItem("auth");
  if (auth) return JSON.parse(auth);
  else
    return {
      accessToken: "",
      user: {},
    };
};

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    setAuth: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    removeAuth: (state) => {
      state.accessToken = "";
      state.user = {};
      localStorage.removeItem("auth");
    },
  },
});

export const { setAuth, removeAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
