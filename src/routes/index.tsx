import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "../components/Auth/Login";
import { getLocalState } from "../utils/helpers";
import { useAppSelector } from "../utils/hooks/dispatchHooks";
import PrivateRoute from "./PrivateRoute";

const RootRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cb = () => {
      const isToken = getLocalState("access_token");
      if (!isToken) {
        navigate("/qr-code");
      }
    };
    window.addEventListener("storage", cb);

    return () => {
      window.removeEventListener("storage", cb);
    };
  }, []);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/", { replace: true });
  //   }
  // }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/qr-code" element={<QrCode />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<Dashboard />} />
        <Route path="user-profile" element={<UserProfile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

export default RootRoutes;
