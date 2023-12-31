/** @format */

import React, { useState } from "react";
import Edit from "./Edit";
import { useDeleteTransMutation } from "../../rtk/transaction/transApi";

const SingTrans = ({ data, index, edit, setEdit }) => {
  const [deleteTrans, {}] = useDeleteTransMutation();
  const { transType, amount, expense_cat, income_type, transDate } = data;

  const handleDelete = data => {
    deleteTrans(data).then();
  };

  return (
    <>
      <tr
        className={`falx justify-between items-center  ${edit === data._id && "border-t-yellow-500 border-2"} ${
          transType === "Expense" ? "bg-red-100" : "bg-green-100"
        }`}
      >
        <td className="border-b w-[55px!important] border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
          {index + 1}
        </td>
        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{transType}</td>
        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{amount}</td>
        <td
          className={` ${
            transType === "Income" && income_type === "Get Loan" ? "bg-red-200 " : ""
          } border-slate-100 border-b dark:border-slate-700 p-4 pr-4 ${"text-slate-500"} dark:text-slate-400`}
        >
          {transType === "Income" ? income_type : expense_cat}
        </td>
        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-4 text-slate-500 dark:text-slate-400">{transDate}</td>
        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-4 text-slate-500 dark:text-slate-400">
          <span className="flex w-20 gap-4">
            <svg
              onClick={() => setEdit(data._id)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="cursor-pointer h-5 w-5 text-yellow-600"
              viewBox="0 0 16 16"
            >
              <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />{" "}
            </svg>

            <svg
              onClick={() => handleDelete({ _id: data._id, userId: data.userId })}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="cursor-pointer h-5 w-5 text-red-600"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </span>
        </td>
      </tr>
      {edit === data._id && <Edit data={data} show={edit} setShow={setEdit} />}
    </>
  );
};

export default SingTrans;
