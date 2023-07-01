/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import Add from "./Add";
import { useGetUsrsTransQuery } from "../../rtk/transaction/transApi";
import SingTrans from "./SingTrans";
import Filters from "./Filters";
import TrTd from "./TrTd";
import dynamicFilterDate from "../../filters/dynamicFilterDate";

function TransactionDate() {
  const { filteredTrans } = dynamicFilterDate();
  const { user } = useSelector(state => state.auth);
  const { data: trans, isLoading, isError, isSuccess } = useGetUsrsTransQuery({ userId: user._id });

  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState("");

  // create content for userTransactions
  let content = null;
  if (isLoading) {
    content = <TrTd data={"Loading..."} />;
  }
  if (!isLoading && isError) {
    content = <TrTd data={"There was an error!"} />;
  }
  if (!isLoading && !isError && isSuccess) {
    const transLength = trans?.userTransactions.length;
    if (transLength === 0) {
      content = <TrTd data={"No transactions to show!!"} />;
    } else if (transLength >= 0) {
      // content = trans?.userTransactions.map((data, i) => <SingTrans key={i} data={data} index={i} edit={edit} setEdit={setEdit} />);
      content = filteredTrans.map((data, i) => <SingTrans key={i} data={data} index={i} edit={edit} setEdit={setEdit} />);
    }
  }

  return (
    <>
      <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
        <Filters type="date" />

        <div className="flex justify-between items-center border-b-2">
          <p className="p-4 font-bold text-black text-md dark:text-white">
            Total
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-300 ">{trans?.userTransactions?.length} Transactions</span>
          </p>
          <p className="p-4 font-bold text-black text-md dark:text-white">
            Showing
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-300 ">{filteredTrans?.length} Transactions</span>
          </p>

          <p className="p-2 font-bold text-black text-md dark:text-white">
            {!add && (
              <button onClick={() => setAdd(true)} className="px-5 w-[188px]  h-8 font-bold bg-blue-500 rounded overflow-hidden text-sm text-white">
                Add New Transactions
              </button>
            )}
            {add && (
              <button onClick={() => setAdd(false)} className="px-5  w-[188px] h-8 font-bold bg-red-300 rounded overflow-hidden text-sm text-white">
                Cancel Add
              </button>
            )}
          </p>
        </div>

        {/* add */}
        {add && <Add show={add} setShow={setAdd} />}

        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm overflow-hidden mt-4 mb-8">
            <table className="border-collapse table-fixed w-full text-sm ">
              <thead>
                <tr className="falx justify-between items-center">
                  <th
                    style={{ width: "55px!importent" }}
                    className="border-b w-[55px!important] dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
                  >
                    Sr
                  </th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Tranaction Type
                  </th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pr-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Amount
                  </th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pr-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Category
                  </th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pr-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Date</th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pr-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800">{content}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionDate;
