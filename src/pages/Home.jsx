/** @format */
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header.jsx";
import UserAvater from "../components/ui/UserAvater/UserAvater";
import UserName from "../components/ui/UserAvater/UserName";
import MyTransaction from "../components/MyTransaction/MyTransaction.jsx";
import GrandSum from "../components/GrandSum/GrandSum.jsx";
import FilteringSum from "../components/GrandSum/FilteringCat";
import TransactionDate from "../components/MyTransaction/TransactionDate";
import FilteringDate from "../components/GrandSum/FilteringDate";

const Home = () => {
  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
      <div className="flex items-start justify-between">
        <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
          <div className="h-full bg-white rounded-2xl dark:bg-gray-700">
            <div className="flex items-center justify-start  pt-6">
              <UserAvater />
              <h3 className="ml-3">
                <UserName />
              </h3>
            </div>
            <Navbar />
          </div>
        </div>

        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          {/* <Header /> */}

          <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col flex-wrap sm:flex-row ">
              <div className="w-full sm:w-1/2 xl:w-1/3">
                <div className="mb-4">
                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                    <h2 className="text-2xl">
                      Welcome To Expense Tracker
                      {/* <UserName /> */}
                    </h2>
                    <p>Take a look at your expense summary</p>
                  </div>
                </div>
                <FilteringSum />
                <FilteringDate />
                <GrandSum />
              </div>

              {/*  */}
              <div className="w-full sm:w-1/2 xl:w-2/3">
                <div className="mx-0 mb-4 sm:ml-4 xl:mr-4">
                  {/*  */}
                  <MyTransaction />
                </div>
                <div className="mx-0 mb-4 sm:ml-4 xl:mr-4">
                  {/*  */}
                  <TransactionDate />
                </div>
              </div>
              <div className="w-full sm:w-1/2 xl:w-2/3">
                <div className="mx-0 mb-4 sm:ml-4 xl:mr-4">{/*  */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
