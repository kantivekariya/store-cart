import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryInfo {
  countryList: Array<string>;
  status: string;
  isLoading: boolean;
  error?: string;
}

const initialState = {
  countryList: [],
  status: "Pending",
  isLoading: true,
  error: "",
} as CategoryInfo;

const productSlice = createSlice({
  name: "categoryInfo",
  initialState,
  reducers: {
    categoryLoading(state) {
      state.status = "Pending";
    },
    categorySuccess(state, action: PayloadAction<any[]>) {
      state.isLoading = false;
      state.status = "Success";
      state.countryList = action.payload;
    },
    categoryFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.status = "Failed";
      state.error = action.payload;
    },
  },
});

export const { categoryLoading, categorySuccess, categoryFailure } =
  productSlice.actions;

export default productSlice.reducer;
