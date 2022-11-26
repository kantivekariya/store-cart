import { AUTH_URLS } from "../../constant/urlConstant";
import { LoginIProps } from "../../reduce/action/auth/AuthAction";
import { apiService } from "../apiServices";

const AuthApiServices = {
  userLogin: (apiData: LoginIProps) =>
    apiService.postData(AUTH_URLS.LOGIN_URL, apiData),
  userLogOut: () => apiService.getData(AUTH_URLS.LOGOUT_URL),
};
export default AuthApiServices;
