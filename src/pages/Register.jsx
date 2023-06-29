/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../rtk/auth/authApi";

const Register = () => {
  const [register, { isLoading, isError, isSuccess, data, error }] = useRegisterMutation();

  const [input, setInput] = useState({ name: "", email: "", password: "" });

  const handleInput = e => {
    setInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleUserDataSubmit = e => {
    e.preventDefault();
    if (!input.name || !input.email || !input.password) {
      toast("All fields are required");
    } else {
      // rtk register
      register(input).then(res => {
        if (res.error?.data?.message) {
          toast(res.error?.data?.message);
        }
      });
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Expense Tracker Singup</div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign Up your account</h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleUserDataSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Name
                  </label>
                  <input
                    onChange={handleInput}
                    type="text"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    onChange={handleInput}
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    onChange={handleInput}
                    type="text"
                    name="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <button
                  disabled={isLoading}
                  type="submit"
                  className="w-full disabled:bg-blue-400 text-white bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center "
                >
                  Signup
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Have an account?{" "}
                  <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
