import { PRODUCTS_URLS } from "../../constant/urlConstant";
import { apiService } from "../apiServices";

const ProductsServices = {
  getAllCategories: () =>
    apiService.getData(PRODUCTS_URLS.PRODUCTS_CATEGORY_URL),
  getBySpecificCategory: (apiData: string, sortedValue: string = "desc") =>
    apiService.getData(
      `${PRODUCTS_URLS.CATEGORY_URL}/${apiData}?sort=${sortedValue}`
    ),
};
export default ProductsServices;
