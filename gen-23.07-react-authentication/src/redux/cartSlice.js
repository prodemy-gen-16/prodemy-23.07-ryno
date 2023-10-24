import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addCartItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateCartQty: (state, action) => {
      state.items[action.payload.index].qty += action.payload.qty;
    },
    increaseCartQty: (state, action) => {
      state.items[action.payload.index].qty++;
    },
    decreaseCartQty: (state, action) => {
      state.items[action.payload.index].qty--;
    },
    deleteCartItem: (state, action) => {
      state.items.splice(action.payload.index, 1);
    },
    checkoutOrder: (state) => {
      state.items.splice(0);
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
