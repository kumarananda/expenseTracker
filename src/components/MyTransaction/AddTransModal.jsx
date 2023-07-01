/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddTransModal = ({ setModal }) => {
  const [input, setInput] = useState({});
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-4 pb-8 mx-auto ">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Add a new transaction</div>
        <div className="w-full bg-white   md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 ">
          <div className="">
            <form className="space-y-4 md:space-y-6" onSubmit={null}>
              <div>
                <label htmlFor="transType" className="block  text-sm font-medium text-gray-900 dark:text-white">
                  transType
                </label>
                <input
                  onChange={handleInput}
                  type="transType"
                  name="transType"
                  id="transType"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="transType"
                />
              </div>
              <div>
                <label htmlFor="transType" className="block  text-sm font-medium text-gray-900 dark:text-white">
                  amount
                </label>
                <input
                  onChange={handleInput}
                  type="amount"
                  name="amount"
                  id="amount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="amount"
                />
              </div>
              <div>
                <label htmlFor="transType" className="block  text-sm font-medium text-gray-900 dark:text-white">
                  expense_cat
                </label>
                <input
                  onChange={handleInput}
                  type="expense_cat"
                  name="expense_cat"
                  id="expense_cat"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="expense_cat"
                />
              </div>
              <div>
                <label htmlFor="transType" className="block  text-sm font-medium text-gray-900 dark:text-white">
                  income_type
                </label>
                <input
                  onChange={handleInput}
                  type="income_type"
                  name="income_type"
                  id="income_type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="income_type"
                />
              </div>
              <div>
                <label htmlFor="transType" className="block  text-sm font-medium text-gray-900 dark:text-white">
                  transDate
                </label>
                <input
                  onChange={handleInput}
                  type="transDate"
                  name="transDate"
                  id="transDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="transDate"
                />
              </div>
              <div className="flex justify-between">
                <button
                  // disabled={isLoading}
                  type="submit"
                  className="w-2/4 disabled:bg-blue-400 text-white bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-1 text-center "
                >
                  Add Transaction
                </button>{" "}
                <button
                  // disabled={isLoading}
                  onClick={() => setModal(false)}
                  type="submit"
                  className="w-1/4 disabled:bg-red-400 text-white bg-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-1 text-center "
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTransModal;
