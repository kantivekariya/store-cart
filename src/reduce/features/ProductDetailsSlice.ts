import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsDetailsInfo {
  productsList: Array<any>;
  status: string;
  isLoading: boolean;
  error?: string;
}

const initialState = {
  productsList: [],
  status: "Pending",
  isLoading: true,
  error: "",
} as ProductsDetailsInfo;

const productsListSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {
    productsListLoading(state) {
      state.status = "Pending";
    },
    productsListSuccess(state, action: PayloadAction<any[]>) {
      state.isLoading = false;
      state.status = "Success";
      state.productsList = action.payload;
    },
    productsListFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.status = "Failed";
      state.error = action.payload;
    },
  },
});

export const { productsListLoading, productsListSuccess, productsListFailure } =
  productsListSlice.actions;

export default productsListSlice.reducer;
