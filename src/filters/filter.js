import React from "react";
import { useSelector } from "react-redux";
import { useGetUsrsTransQuery } from "../rtk/transaction/transApi";
import { minMaxDate } from "../utils/date";


function filterUse() {
  const { user } = useSelector(state => state.auth);
  const { data: trans, isSuccess } = useGetUsrsTransQuery({ userId: user._id });

  const reduceIncome = (acc, curr) => (curr.transType === "Income" ? acc + Number(curr.amount) : acc);
  const reduceExpense = (acc, curr) => (curr.transType === "Expense" ? acc + Number(curr.amount) : acc);
  const income = trans?.userTransactions?.reduce(reduceIncome, 0);
  const expense = trans?.userTransactions?.reduce(reduceExpense, 0);

  const transFilter = (fun)=> {
    return trans?.userTransactions?.filter(fun);
  }
  const transReducer = (fun)=> {
    return trans?.userTransactions?.reduce(fun, 0);
  }

  const getMinMax = minMaxDate(trans?.userTransactions || []);
  return ({ income, expense , getMinMax, transFilter, transReducer } )
}

export default filterUse
