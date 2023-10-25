import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestRoutes() {
  const token = useSelector((state) => state.auth.accessToken);
  return token ? <Navigate to="/catalog" /> : <Outlet />;
}
