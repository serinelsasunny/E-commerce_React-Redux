import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  newProducts: [],
  offerProducts: [],
  status: "idle",
  searchText: "",
};
//async function to fetch new products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", //action name
  async () => {
    const response = await fetch("https://fakestoreapi.com/products"); //api fetch
    const data = response.json();
    return data;
  }
);
//async function to fetch new products by category

export const fetchProductsbyCategory = createAsyncThunk(
  "products/fetchProductsbyCategory", //action name
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = response.json();
    return data;
  }
);
export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setnewProducts: (state, action) => {
      state.newProducts = action.payload;
    },
    setofferProducts: (state, action) => {
      state.offerProducts = action.payload;
    },
    clearofferProducts: (state) => {
      state.offerProducts = [];
    },
    searchItem: (state, action) => {
      state.searchText = action.payload;
      state.newProducts = state.newProducts.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        if (state.searchText === "") {
          state.newProducts = action.payload;
        } else {
          const filteredProducts = state.newProducts.filter((product) =>
            product.title.toLowerCase().includes(state.searchText.toLowerCase())
          );
          state.newProducts = filteredProducts;
        }
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchProductsbyCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsbyCategory.fulfilled, (state, action) => {
        state.status = "success";
        state.newProducts = action.payload;
      })
      .addCase(fetchProductsbyCategory.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const {
  setnewProducts,
  setofferProducts,
  clearofferProducts,
  searchItem,
} = ProductSlice.actions;
export default ProductSlice.reducer;
