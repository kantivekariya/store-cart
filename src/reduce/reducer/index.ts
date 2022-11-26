import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "../features/ProductSlice";
import productListSlice from "../features/ProductDetailsSlice";
import { cartReducer } from "../features/cartSlice";

const rootReducer = combineReducers({
  categoryList: productSlice,
  productList: productListSlice,
  cartReducer: cartReducer,
});

export default rootReducer;
