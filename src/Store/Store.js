import { configureStore, createReducer } from "@reduxjs/toolkit";
import productReducer from "../Components/Products/ProductsSlice";
import cartReducer from "../Components/CartSlice/CartSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
