/** @format */

import React from "react";
import Logout from "../Logout/Logout";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="mt-6">
        <div>
          <Link
            className="flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800"
            to="/"
          >
            <span className="text-left">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
              </svg>
            </span>
            <span className="mx-4 text-sm font-normal">Dashboard</span>
          </Link>
          <Link
            className="flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800"
            to="/categories"
          >
            <span className="text-left">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
              </svg>
            </span>
            <span className="mx-4 text-sm font-normal">Categories</span>
          </Link>

          <div className="w-full flex justify-center">
            <Logout />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
