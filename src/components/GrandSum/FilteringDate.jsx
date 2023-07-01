/** @format */

import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import dynamicFilterDate from "../../filters/dynamicFilterDate";

function FilteringDate() {
  const { income, expense, getMinMax } = dynamicFilterDate();

  return (
    <>
      <div className="mb-4">
        <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
          <div className="flex justify-between mb-8">
            <p className=" font-bold text-black text-md dark:text-white">Filtered by date</p>
            {getMinMax && (
              <>
                <span className="ml-2 text-sm text-right inline-block text-gray-500 dark:text-gray-300 ">
                  From {getMinMax.min} to {getMinMax.max}
                </span>
              </>
            )}
          </div>
          <div className="flex justify-between bg-[#de29ed] rounded p-1 ">
            <p className=" font-bold  text-md text-white">Total Cash</p>
            <span className="ml-2 text-sm text-right inline-block text-white font-bold "> {income} </span>
          </div>
          <div className="flex justify-between bg-[#ee114e] rounded p-1 ">
            <p className=" font-bold  text-md text-white">Total Expense</p>
            <span className="ml-2 text-sm text-right inline-block text-white font-bold  "> {expense}</span>
          </div>
          <div className={`flex justify-between rounded p-1  ${income - expense < 0 ? "" : "bg-[#39790f]"}`}>
            <p className=" font-bold  text-md text-white">Current Balance</p>
            <span className="ml-2 text-sm text-right inline-block text-white font-bold ">{income - expense}</span>
          </div>
          {/* Pei */}
          <div className="falx w-full justify-center align-middle">
            <div className="wraper w-60 my-8 m-auto">
              {income !== 0 && (
                <PieChart
                  data={[
                    { title: "Current Balance", value: Math.abs(income - expense) || 1, color: "#39790f" },
                    { title: "Income", value: income, color: "#de29ed" },
                    { title: "Expense", value: expense, color: "#ee114e" },
                  ]}
                />
              )}
              {income === 0 && <PieChart data={[{ title: "Empty", value: 1, color: "#e1d2e3" }]} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilteringDate;
