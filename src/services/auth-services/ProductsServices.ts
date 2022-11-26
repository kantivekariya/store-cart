import { PRODUCTS_URLS } from "../../constant/urlConstant";
import { apiService } from "../apiServices";

const ProductsServices = {
    getAllCategories: () => apiService.getData(PRODUCTS_URLS.PRODUCTS_CATEGORY_URL),
};
export default ProductsServices;