/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useUpdateExpCatMutation } from "../../rtk/auth/authApi";

function AddExpCat({ setModalOpen }) {
  const { user } = useSelector(state => state.auth);
  const [updateExpCate, { isLoading, isSuccess, isError }] = useUpdateExpCatMutation();

  const [cat, setCat] = useState("");

  const handleExpenseCatAdd = e => {
    e.preventDefault();
    if (!cat) {
      return toast("Field is empty !");
    }
    if (cat.length < 4) {
      return toast("Category will be minimum Four characters");
    }

    updateExpCate({ id: user?._id, category: cat });
  };

  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
      toast("Category Add Successful");
    }
    if (isError) {
      toast("Category Add Failed");
    }
  }, [isSuccess, isError]);

  return (
    <>
      <div className="flex flex-col px-5 items-center justify-center pt-4 pb-8 mx-auto ">
        <div className="flex uppercase items-center text-center mb-6 text-xs font-semibold text-gray-900 dark:text-white">
          Add new <br /> expense category
        </div>
        <div className="w-full bg-white   md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 ">
          <div className="">
            <form className="space-y-4 md:space-y-6" onSubmit={handleExpenseCatAdd}>
              <div>
                <label htmlFor="category" className="block mb-3 text-md font-medium text-gray-900 dark:text-white">
                  Enter new category
                </label>
                <input
                  onChange={e => setCat(e.target.value)}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Category"
                />
              </div>
              <div className="flex justify-between">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="w-2/6 disabled:bg-blue-400 text-white bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-3 py-1 text-center "
                >
                  Add
                </button>
                <button
                  disabled={isLoading}
                  onClick={() => setModalOpen(false)}
                  className="w-2/6 disabled:bg-red-400 text-white bg-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-3 py-1 text-center "
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
}

export default AddExpCat;
