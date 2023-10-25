import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const token = useSelector((state) => state.auth.accessToken);
  return token ? <Outlet /> : <Navigate to="/login" />;
}
