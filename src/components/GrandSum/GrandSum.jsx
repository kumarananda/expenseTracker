/** @format */

import React, { useEffect } from "react";
import { useGetUsrsTransQuery } from "../../rtk/transaction/transApi";
import { useSelector } from "react-redux";
import { minMaxDate } from "../../utils/date";
import { PieChart } from "react-minimal-pie-chart";
import filterUse from "../../filters/filter";

function GrandSum() {
  const { income, expense, getMinMax } = filterUse();

  return (
    <>
      <div className="mb-4">
        <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
          <div className="flex justify-between mb-8">
            <p className=" font-bold text-black text-md dark:text-white">Grand Report</p>
            {getMinMax && (
              <>
                <span className="ml-2 text-sm text-right inline-block text-gray-500 dark:text-gray-300 ">
                  From {getMinMax.max} to {getMinMax.max}
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
          <div className={`flex justify-between rounded p-1 bg-[#39790f] bg-green-200`}>
            <p className=" font-bold  text-md text-white">Current Balance</p>
            <span className="ml-2 text-sm text-right inline-block text-white font-bold ">{income - expense}</span>
          </div>
          {/* Pei */}
          <div className="falx w-full justify-center align-middle">
            <div className="wraper w-60 my-8 m-auto">
              {income !== 0 && (
                <PieChart
                  data={[
                    { title: "Current Balance", value: Math.abs(income - expense), color: "#39790f" },
                    { title: "Income", value: income, color: "#de29ed" },
                    { title: "Expense", value: expense, color: "#ee114e" },
                  ]}
                />
              )}
              {income === 0 && expense === 0 && <PieChart data={[{ title: "Empty", value: 1, color: "#e1d2e3" }]} />}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <span className="relative p-2 bg-blue-100 rounded-xl">
                <svg width="25" height="25" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"
                  ></path>
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="ml-2 font-bold text-black text-md dark:text-white">Google</span>
                <span className="ml-2 text-sm text-gray-500 dark:text-white">Google Inc.</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-1 border border-gray-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="w-4 h-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>
              </button>
              <button className="text-gray-200">
                <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GrandSum;
