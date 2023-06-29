/** @format */

import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function PublicRoute({ children }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return children;
  }

  // check role base user and navigation (admin or student)
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
}
