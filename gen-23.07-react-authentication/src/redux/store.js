import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice.js";
import { cartReducer } from "./cartSlice.js";

export default configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});
