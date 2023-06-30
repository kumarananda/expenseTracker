/** @format */

import React from "react";
import useAuth from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Login from "../../../pages/Login";
import Home from "../../../pages/Home";

function HomeRouting() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Home />;
  } else {
    return <Login />;
  }
}

export default HomeRouting;
