import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header from "../common/header/Header";
import Layout from "../common/layout/LayOut";
import Login from "../components/auth/Login";
import Dashboard from "../components/dashboard/Dashboard";
import ProductsList from "../components/products/Products";
import { getLocalState } from "../utils/helpers";
import PrivateRoute from "./PrivateRoute";

const RootRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cb = () => {
      const isToken = getLocalState("access_token");
      if (!isToken) {
        navigate("/login", { replace: true });
      }
    };
    window.addEventListener("storage", cb);

    return () => {
      window.removeEventListener("storage", cb);
    };
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path=":category" element={<ProductsList />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RootRoutes;
