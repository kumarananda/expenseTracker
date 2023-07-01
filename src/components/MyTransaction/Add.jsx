/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useCreateTransMutation } from "../../rtk/transaction/transApi";
import filterUse from "../../filters/filter";
import { checkLimit } from "../../utils/check";
import { incomeTypes } from "../../utils/data";
import FullScreenModal from "../ui/Modal/FullScreenModal/FullScreenModal";
import AddExpCat from "./AddExpCat";

const Add = ({ show, setShow }) => {
  const [createTrans, { isLoading, isSuccess, isError, error }] = useCreateTransMutation();
  const { expense, income } = filterUse();

  const { user } = useSelector(state => state.auth);
  const [addExpCat, setAddExpCat] = useState(false);

  const [input, setInput] = useState({ transType: "Expense", amount: "", expense_cat: "", income_type: "", transDate: "" });

  const handleAddInput = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddTrans = () => {
    if (!input.transType || !input.amount || !input.transDate) {
      return toast("All fields are required");
    }
    if (input.transType === "Expense" && !input.expense_cat) {
      return toast("All fields are required");
    }
    if (input.transType === "Income" && !input.income_type) {
      return toast("All fields are required");
    }

    if (input.transType === "Income") {
      createTrans({ userId: user._id, ...input });
    } else if (input.transType === "Expense") {
      const limit = checkLimit(income, expense, input.amount);
      if (!limit) {
        return toast("Your Blance is Low");
      }
      if (limit) {
        createTrans({ userId: user._id, ...input });
      }
    }
  };
  useEffect(() => {
    if (isSuccess) {
      setShow(false);
    }
  }, [isSuccess]);

  return (
    <>
      <ul>
        <li className="flex items-center justify-between py-3 text-gray-600 border-b-2  border-gray-100 dark:text-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-start text-sm gap-2">
            <span className="ml-4">
              <span className="block mb-1">Transaction Type</span>
              <select className="px-4 py-1 rounded h-8" onChange={handleAddInput} name="transType" value={input.transType}>
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
              </select>
            </span>
            <span className="ml-2">
              <span className="block mb-1">Amount</span>
              <input onChange={handleAddInput} value={input.amount} name="amount" type="number" className="px-4 py-1 rounded h-8 w-32 border-2" />
            </span>
            {/* if expense */}
            {input.transType === "Expense" && (
              <span className="ml-2">
                <span className="block mb-1">
                  Category{" "}
                  <button onClick={() => setAddExpCat(true)} className="bg-blue-600 p-1 text-white rounded">
                    Add New
                  </button>
                </span>
                <select className="px-4 py-1 rounded h-8" onChange={handleAddInput} defaultValue={input.expense_cat} name="expense_cat">
                  <option value="">Select</option>
                  {user?.categories.map((item, i) => {
                    return (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </span>
            )}
            {input.transType === "Income" && (
              <span className="ml-2">
                <span className="block mb-1">Income Type</span>
                {/* if income */}
                <select className="px-4 py-1 rounded h-8" onChange={handleAddInput} defaultValue={input.income_type} name="income_type">
                  <option value="">Select</option>
                  {incomeTypes.map((item, i) => {
                    return (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </span>
            )}
            <span className="ml-2">
              <span className="block mb-1">Date</span>
              <input
                type="date"
                className="px-4 py-1 rounded h-8 w-40 border-2"
                onChange={handleAddInput}
                defaultValue={input.transDate}
                name="transDate"
              />
            </span>
          </div>
          <div className="mr-4">
            <span className="ml-2">
              {/* <span className="block mb-1">Date</span> */}
              <input onClick={handleAddTrans} type="button" value={"Add"} className="px-4 bg-blue-600  text-white  rounded h-8  border-2" />
            </span>
            <span className="ml-2">
              {/* <span className="block mb-1">Date</span> */}
              <input onClick={() => setShow(false)} type="button" value={"Cancel"} className="px-4 bg-red-500 text-white   rounded h-8  border-2" />
            </span>
          </div>
          <FullScreenModal modalOpen={addExpCat} setModalOpen={setAddExpCat} MBoxWidth={300} outCickHide={true}>
            <AddExpCat setModalOpen={setAddExpCat} />
          </FullScreenModal>
        </li>
      </ul>
    </>
  );
};

export default Add;
