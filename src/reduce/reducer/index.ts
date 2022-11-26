import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "../features/ProductSlice";
import productListSlice from "../features/ProductDetailsSlice";

const rootReducer = combineReducers({
    categoryList: productSlice,
    productList: productListSlice
});

export default rootReducer;
