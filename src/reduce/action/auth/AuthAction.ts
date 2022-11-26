import { toast } from "react-toastify";
import AuthApiServices from "../../../services/auth-services/AuthApiServices";
import { setLocalState } from "../../../utils/helpers";

export interface LoginIProps {
  email: string;
  password: string;
}

/* user login api's */
export const userLogin = (apiData: LoginIProps) => async (dispatch: any) => {
  try {
    const res = await AuthApiServices.userLogin(apiData);
    console.log(res);
    saveTokens({ access_token: res?.data?.token });
    toast.success(res?.data?.message);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const saveTokens = (params: { access_token: string }) => {
  const { access_token } = params;
  setLocalState("access_token", access_token);
};
