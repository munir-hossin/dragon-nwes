import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context";

export default function PrivateRoutes({ children }) {
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
}
