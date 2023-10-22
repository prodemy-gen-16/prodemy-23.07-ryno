import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem: (state, action) => {
      state.push(action.payload);
    },
    updateCartQty: (state, action) => {
      state[action.payload.index].qty += action.payload.qty;
    },
    increaseCartQty: (state, action) => {
      state[action.payload.index].qty++;
    },
    decreaseCartQty: (state, action) => {
      state[action.payload.index].qty--;
    },
    deleteCartItem: (state, action) => {
      state.splice(action.payload.index, 1);
    },
    checkoutOrder: (state) => {
      state.splice(0);
    },
  },
});

export const {
  addCartItem,
  updateCartQty,
  increaseCartQty,
  decreaseCartQty,
  deleteCartItem,
  checkoutOrder,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
