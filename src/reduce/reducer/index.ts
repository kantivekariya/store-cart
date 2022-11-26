import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "../features/ProductSlice";

const rootReducer = combineReducers({
    categoryList: productSlice
});

export default rootReducer;
