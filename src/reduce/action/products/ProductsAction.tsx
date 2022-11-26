import ProductsServices from "../../../services/auth-services/ProductsServices";
import {
  productsListFailure,
  productsListLoading,
  productsListSuccess,
} from "../../features/ProductDetailsSlice";
import {
  categoryFailure,
  categoryLoading,
  categorySuccess,
} from "../../features/ProductSlice";

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

export const getBySpecificCategory =
  (apiData: string, sortedValue: string) => async (dispatch: any) => {
    dispatch(productsListLoading());
    try {
      const res = await ProductsServices.getBySpecificCategory(apiData, sortedValue);
      dispatch(productsListSuccess(res.data));
    } catch (error) {
      dispatch(productsListFailure(error as string));
      return Promise.reject(error);
    }
  };
