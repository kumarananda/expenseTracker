import React from "react";
import { useSelector } from "react-redux";
import { useGetUsrsTransQuery } from "../rtk/transaction/transApi";
import { TodayToYearMonthDay, minMaxDate, timeStamp } from "../utils/date";



function dynamicFilterDate() {
  const { user } = useSelector(state => state.auth);
  const  { data: trans, isSuccess,isLoading,isError, error } = useGetUsrsTransQuery({ userId: user._id });
  const  {  dateFrom, dateTo, datefilterType   }  = useSelector(state => state.filter);

  const filterWithDate = ((item) => {
    let date = timeStamp(item.transDate)
    let dateString = TodayToYearMonthDay()

    if(datefilterType === "ALL"){
      return true
    }else if(datefilterType === "TODAY"){
      return item.transDate === dateString
    }else if(datefilterType=== "RANGE"){
      if(date >= timeStamp(dateFrom) && date <= timeStamp(dateTo) ){
        return true
      }
    }
  })


  const filteredTransW_Date = trans?.userTransactions.filter(filterWithDate) || []


  const reduceIncome = (acc, curr) => (curr.transType === "Income" ? acc + Number(curr.amount) : acc);
  const reduceExpense = (acc, curr) => (curr.transType === "Expense" ? acc + Number(curr.amount) : acc);
  const income = filteredTransW_Date?.reduce(reduceIncome, 0);
  const expense = filteredTransW_Date?.reduce(reduceExpense, 0);

  const transFilter = (fun)=> {
    return trans?.userTransactions?.filter(fun);
  }
  const transReducer = (fun)=> {
    return trans?.userTransactions?.reduce(fun, 0);
  }

  const getMinMax = minMaxDate(filteredTransW_Date || []);
  return ({ income, expense , getMinMax,  filteredTrans :filteredTransW_Date, isSuccess, isLoading,isError, error } )
}

export default dynamicFilterDate
