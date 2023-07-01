/** @format */

import React from "react";
import { filterDateFrom, filterDateTo, filterExpType, filterIncType, filterTransType, filterDateType } from "../../rtk/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { incomeTypes } from "../../utils/data";

const Filters = ({ type }) => {
  const { user } = useSelector(state => state.auth);
  const { transType, expType, incType, dateFrom, dateTo, datefilterType } = useSelector(state => state.filter);

  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-between items-center border-b-2">
        <span className="p-4 font-bold w-full flex justify-between items-center text-black  text-md dark:text-white">
          Filter By {type}
          {type === "category" && (
            <>
              <span className="ml-2 text-sm text-gray-500  dark:text-gray-300 ">
                <span className="inline-block">
                  <span className="block"> Type</span>
                  <select onChange={e => dispatch(filterTransType(e.target.value))} className="bg-transparent border p-1 text-gray-900" name="" id="">
                    <option value="ALL">All</option>
                    <option value="Income">Add Cash</option>
                    <option value="Expense">Expense</option>
                  </select>
                </span>
              </span>
              <span className="ml-2 text-sm  text-gray-500 dark:text-gray-300  ">
                <span className="inline-block">
                  <span className="block text-sm">Expense Cat.</span>
                  <select
                    disabled={transType === "ALL" || transType === "Income"}
                    onChange={e => dispatch(filterExpType(e.target.value))}
                    className="bg-transparent border p-1  text-blue-600 disabled:text-gray-500 "
                  >
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
                  <span className="block text-sm">Income Cat.</span>
                  <select
                    disabled={transType === "ALL" || transType === "Expense"}
                    onChange={e => dispatch(filterIncType(e.target.value))}
                    className="bg-transparent border p-1  text-blue-600 disabled:text-gray-500"
                  >
                    <option value="ALL">All</option>
                    {incomeTypes.map((item, i) => (
                      <option value={item} key={i}>
                        {item}
                      </option>
                    ))}
                  </select>
                </span>
              </span>
            </>
          )}
          {type === "date" && (
            <>
              <span className="ml-2 text-sm text-gray-900 ">
                <span className="inline-block">
                  <span className="block"> All Date</span>
                  <input type="checkbox" checked={datefilterType === "ALL"} onChange={e => dispatch(filterDateType("ALL"))} />
                </span>
              </span>
              <span className="ml-2 text-sm text-gray-900 ">
                <span className="inline-block">
                  <span className="block"> Today</span>
                  <input type="checkbox" checked={datefilterType === "TODAY"} onChange={e => dispatch(filterDateType("TODAY"))} />
                </span>
              </span>
              <span className="ml-2 text-sm text-gray-900 ">
                <span className="inline-block">
                  <span className="block"> RANGE</span>
                  <input type="checkbox" checked={datefilterType === "RANGE"} onChange={e => dispatch(filterDateType("RANGE"))} />
                </span>
              </span>
              <span className={`ml-2 text-sm ${datefilterType !== "RANGE" ? "text-gray-500" : "text-gray-900 "} `}>
                <span className="inline-block">
                  <label htmlFor="date" className="block">
                    From
                  </label>
                  <input
                    value={dateFrom}
                    className="text-blue-600 disabled:text-gray-500"
                    type="date"
                    onChange={e => dispatch(filterDateFrom(e.target.value))}
                  />
                </span>
              </span>
              <span className={`ml-2 text-sm ${datefilterType !== "RANGE" ? "text-gray-500" : "text-gray-900 "} `}>
                <span className="inline-block">
                  <span className="block"> To</span>
                  <input
                    value={dateTo}
                    className="text-blue-600 disabled:text-gray-500"
                    type="date"
                    onChange={e => dispatch(filterDateTo(e.target.value))}
                  />
                </span>
              </span>
            </>
          )}
        </span>
      </div>
    </>
  );
};

export default Filters;
