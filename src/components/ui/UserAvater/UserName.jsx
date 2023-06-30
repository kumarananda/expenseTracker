/** @format */

import React from "react";
import { useSelector } from "react-redux";

const UserName = () => {
  const auth = useSelector(state => state.auth);

  return auth?.user.name ? auth?.user.name : "User";
};

export default UserName;
