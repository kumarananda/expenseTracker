/** @format */

import React from "react";
import { filterDateFrom, filterDateTo, filterExpType, filterForToday, filterIncType, filterTransType } from "../../rtk/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { incomeTypes } from "../../utils/data";

const Filters = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-between items-center border-b-2">
        <span className="p-4 font-bold w-full flex justify-between items-center text-black text-md dark:text-white">
          Filter By
          <span className="ml-2 text-sm text-gray-500  dark:text-gray-300 ">
            <span className="inline-block">
              <span className="block"> Type</span>
              <select onChange={e => dispatch(filterTransType(e.target.value))} className="bg-transparent border p-1" name="" id="">
                <option value="ALL">All</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </span>
          </span>
          <span className="ml-2 text-sm  text-gray-500 dark:text-gray-300 ">
            <span className="inline-block">
              <span className="block"> Category</span>
              <select onChange={e => dispatch(filterExpType(e.target.value))} className="bg-transparent border p-1" name="" id="">
                <option value="ALL">All</option>
                {user?.categories.map((item, i) => (
                  <option value={item} key={i}>
                    {item}
                  </option>
                ))}
              </select>
            </span>
          </span>
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-300 ">
            <span className="inline-block">
              <span className="block"> Income</span>
              <select onChange={e => dispatch(filterIncType(e.target.value))} className="bg-transparent border p-1" name="" id="">
                <option value="ALL">All</option>
                {incomeTypes.map((item, i) => (
                  <option value={item} key={i}>
                    {item}
                  </option>
                ))}
              </select>
            </span>
          </span>
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-300 ">
            <span className="inline-block">
              <span className="block"> Today</span>
              <input type="checkbox" onChange={e => dispatch(filterTransType(e.target.checked))} />
            </span>
          </span>
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-300 ">
            <span className="inline-block">
              <span className="block"> From</span>
              <input type="date" onChange={e => dispatch(filterDateFrom(e.target.value))} />
            </span>
          </span>
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-300 ">
            <span className="inline-block">
              <span className="block"> To</span>
              <input type="date" onChange={e => dispatch(filterDateTo(e.target.value))} />
            </span>
          </span>
        </span>
      </div>
    </>
  );
};

export default Filters;
