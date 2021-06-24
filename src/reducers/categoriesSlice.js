import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGetCategories } from "api/api";

export const getCategories = createAsyncThunk(
  "/categories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchGetCategories();

      return response.data.categories;
    } catch (e) {
      return rejectWithValue(e.response.data.errorMessage);
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoriesArr: [],
    activeCategory: '60d484f71e81630c5cc9519c',
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: {
    [getCategories.pending]: () => {},
    [getCategories.fulfilled]: (state, action) => {
      state.categoriesArr = action.payload;
    },
    [getCategories.rejected]: () => {},
  },
});

export const { setActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;