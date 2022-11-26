import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "../components/Auth/Login";
import Dashboard from "../components/dashboard/Dashboard";
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

  useEffect(() => {
    const isToken = getLocalState("access_token");
    if (isToken) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RootRoutes;
