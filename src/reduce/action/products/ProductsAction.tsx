import ProductsServices from "../../../services/auth-services/ProductsServices";
import { categoryFailure, categoryLoading, categorySuccess } from "../../features/ProductSlice";

/* user login api's */
export const getAllCategories = () => async (dispatch: any) => {
  dispatch(categoryLoading());
  try {
    const res = await ProductsServices.getAllCategories();
    dispatch(categorySuccess(res.data));
  } catch (error) {
    dispatch(categoryFailure(error as string));
    return Promise.reject(error);
  }
};
