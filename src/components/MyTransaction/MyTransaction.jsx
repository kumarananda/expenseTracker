/** @format */

import React, { useState } from "react";
import AddTransModal from "./AddTransModal";
import FullScreenModal from "../ui/Modal/FullScreenModal/FullScreenModal";
import { useSelector } from "react-redux";
import Add from "./Add";
import { useGetUsrsTransQuery } from "../../rtk/transaction/transApi";
import SingTrans from "./SingTrans";
import filterUse from "../../filters/filter";
import { incomeTypes } from "../../utils/data";
import Filters from "./Filters";
import TrTd from "./TrTd";

function MyTransaction() {
  const {} = filterUse();
  const { user } = useSelector(state => state.auth);
  const { data: trans, isLoading, isError, isSuccess } = useGetUsrsTransQuery({ userId: user._id });

  const [addModal, setAddModal] = useState(false);

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
      content = trans?.userTransactions.map((data, i) => <SingTrans key={i} data={data} index={i} edit={edit} setEdit={setEdit} />);
    }
  }

  return (
    <>
      <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
        <Filters />

        <div className="flex justify-between items-center border-b-2">
          <p className="p-4 font-bold text-black text-md dark:text-white">
            Total
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-300 ">{trans?.userTransactions?.length} Transactions</span>
          </p>
          <p className="p-4 font-bold text-black text-md dark:text-white">
            Showing
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-300 ">___ Transactions</span>
          </p>

          <p className="p-2 font-bold text-black text-md dark:text-white">
            {!add && (
              <button onClick={() => setAdd(true)} className="px-5  h-8 font-bold bg-blue-500 rounded overflow-hidden text-sm text-white">
                Add new
              </button>
            )}
            {add && (
              <button onClick={() => setAdd(false)} className="px-5 w-50 h-8 font-bold bg-red-300 rounded overflow-hidden text-sm text-white">
                Cancel Add
              </button>
            )}
          </p>
        </div>

        {/* add */}
        {add && <Add show={add} setShow={setAdd} />}

        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm overflow-hidden my-8">
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
        {/*  */}

        {/* ADD */}
        <ul>
          <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-start text-sm">
              <span className="mx-4"></span>
            </div>
          </li>
        </ul>
        {/* <FullScreenModal modalOpen={addModal} setModalOpen={setAddModal} MBoxWidth={500} outCickHide={true}>
          <AddTransModal setModal={setAddModal} />
        </FullScreenModal> */}
      </div>
    </>
  );
}

export default MyTransaction;
