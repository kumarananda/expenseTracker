/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useCreateTransMutation, useEditTransMutation } from "../../rtk/transaction/transApi";

const Edit = ({ show, setShow, data }) => {
  const [editTrans, { isLoading, isSuccess, isError, error }] = useEditTransMutation();

  const { user } = useSelector(state => state.auth);

  const [input, setInput] = useState({
    transType: data.transType,
    amount: data.amount,
    expense_cat: data.expense_cat,
    income_type: data.income_type,
    transDate: data.transDate,
  });

  const handleAddInput = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEditTrans = () => {
    if (!input.transType || !input.amount || !input.transDate) {
      return toast("All fields are required");
    }
    if (input.transType === "Expense" && !input.expense_cat) {
      return toast("All fields are required");
    }
    if (input.transType === "Income" && !input.income_type) {
      return toast("All fields are required");
    }

    // submit data
    editTrans({ ...data, ...input });
  };
  useEffect(() => {
    if (isSuccess) {
      setShow("");
    }
  }, [isSuccess]);

  return (
    <>
      <tr className={show === data._id ? "border-b-yellow-500 border-2" : ""}>
        <td colSpan="6">
          <ul className="w-full">
            <li className="flex w-full items-center justify-end py-3 text-gray-600 border-b-2  border-gray-100 dark:text-gray-200 dark:border-gray-800">
              <div className="flex w-full items-center justify-between text-sm gap-2">
                <span className="ml-4">
                  <select
                    title="Transaction Type"
                    className="px-4 py-1 rounded h-8"
                    onChange={handleAddInput}
                    name="transType"
                    value={input.transType}
                  >
                    <option value="Expense">Expense</option>
                    <option value="Income">Income</option>
                  </select>
                </span>
                <span className="ml-2">
                  <input
                    onChange={handleAddInput}
                    value={input.amount}
                    placeholder="Amount"
                    name="amount"
                    type="number"
                    className="px-4 py-1 rounded h-8 w-32 border-2"
                  />
                </span>
                {/* if expense */}
                {input.transType === "Expense" && (
                  <span className="ml-2">
                    <select
                      title="Category"
                      className="px-4 py-1 rounded h-8"
                      onChange={handleAddInput}
                      defaultValue={input.expense_cat}
                      name="expense_cat"
                    >
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
                    {/* if income */}
                    <select
                      title="Income Type"
                      className="px-4 py-1 rounded h-8"
                      onChange={handleAddInput}
                      defaultValue={input.income_type}
                      name="income_type"
                    >
                      <option value="">Select</option>
                      {["Salary", "Bonus", "Overtime", "Others"].map((item, i) => {
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
                  <input
                    type="date"
                    className="px-4 py-1 rounded h-8 w-40 border-2"
                    onChange={handleAddInput}
                    defaultValue={input.transDate}
                    name="transDate"
                  />
                </span>
                <div className="mr-4">
                  <span className="ml-2">
                    {/* <span className="block mb-1">Date</span> */}
                    <input onClick={handleEditTrans} type="button" value={"Edit"} className="px-4  rounded h-8  border-2" />
                  </span>
                  <span className="ml-2">
                    {/* <span className="block mb-1">Date</span> */}
                    <input onClick={() => setShow("")} type="button" value={"Cancel"} className="px-4  rounded h-8  border-2" />
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </td>
      </tr>
    </>
  );
};

export default Edit;
