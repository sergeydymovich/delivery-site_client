import categoriesSlice from "reducers/categoriesSlice";
import productsSlice from "reducers/productsSlice";
import { combineReducers } from "redux";

const reducer = {
  products: productsSlice,
  categories: categoriesSlice,
};

const rootReducer = combineReducers(reducer);

export default rootReducer;
