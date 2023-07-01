import React from "react";
import { useSelector } from "react-redux";
import { useGetUsrsTransQuery } from "../rtk/transaction/transApi";
import { minMaxDate } from "../utils/date";


function dynamicFilterCat() {
  const { user } = useSelector(state => state.auth);
  const  { data: trans, isSuccess,isLoading,isError, error } = useGetUsrsTransQuery({ userId: user._id });
  const  { transType, expType, incType, dateFrom, dateTo, isToday }  = useSelector(state => state.filter);

  const filterWithCates = ((item) => {
    if(transType=== "ALL" ){
      return true
      //
    }else if(transType === "Expense" && expType==="ALL" ){
      return  item.transType ===  "Expense"
    }else if(transType === "Expense" && expType !== "ALL") {
      return  item.transType ===  "Expense" && expType === item.expense_cat
      // 
    }else if(transType === "Income" && incType === "ALL"){
      return item.transType === "Income"
    }else if(transType === "Income" && incType !== "ALL") {
      return item.transType === "Income" && incType === item.income_type
    }else{
      return false
    }


  })
    // expense_cat income_type
  const filteredTransW_Cat = trans?.userTransactions.filter(filterWithCates)


  const reduceIncome = (acc, curr) => (curr.transType === "Income" ? acc + Number(curr.amount) : acc);
  const reduceExpense = (acc, curr) => (curr.transType === "Expense" ? acc + Number(curr.amount) : acc);
  const income = filteredTransW_Cat?.reduce(reduceIncome, 0);
  const expense = filteredTransW_Cat?.reduce(reduceExpense, 0);

  const transFilter = (fun)=> {
    return trans?.userTransactions?.filter(fun);
  }
  const transReducer = (fun)=> {
    return trans?.userTransactions?.reduce(fun, 0);
  }

  const getMinMax = minMaxDate(filteredTransW_Cat || []);
  return ({ income, expense , getMinMax,  filteredTrans :filteredTransW_Cat, isSuccess, isLoading,isError, error } )
}

export default dynamicFilterCat
