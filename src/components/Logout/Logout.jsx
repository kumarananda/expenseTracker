/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../rtk/auth/authSlice";
import Cookies from "js-cookie";

const Logout = ({ children }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLoggedOut());
    Cookies.remove("accessToken");
    localStorage.clear();
  };
  return (
    <div className="w-full mx-2" onClick={handleLogout}>
      {children ? children : <button className="w-full m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>}
    </div>
  );
};

export default Logout;
