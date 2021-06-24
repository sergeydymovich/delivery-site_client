import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGetProducts } from "api/api";


export const getProducts = createAsyncThunk(
  "/products",
  async (_, { rejectWithValue, getState }) => {
    try {
      const activeCategory = getState().categories.activeCategory;
      const response = await fetchGetProducts({ category: activeCategory });

      return response.data.products;
    } catch (e) {
      return rejectWithValue(e.response.data.errorMessage);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsArr: [],
  },
  extraReducers: {
    [getProducts.pending]: () => {},
    [getProducts.fulfilled]: (state, action) => {
      state.productsArr = action.payload;
    },
    [getProducts.rejected]: () => {},
  },
});

export default productsSlice.reducer;