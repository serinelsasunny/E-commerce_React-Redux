import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  tempItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.tempItems = [...state.cartItems];
      state.totalPrice = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.tempItems = [...state.cartItems];
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
    },
  },
});
export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
