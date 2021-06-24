import categoriesSlice from "reducers/categoriesSlice";
import { combineReducers } from "redux";

const reducer = {
  categories: categoriesSlice,
};

const rootReducer = combineReducers(reducer);

export default rootReducer;
