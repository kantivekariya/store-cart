import { Navigate, Outlet } from "react-router-dom";
import { getLocalState } from "../utils/helpers";

const PrivateRoute = () => {
  const isAuth = getLocalState("access_token");
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
