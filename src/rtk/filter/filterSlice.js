import { createSlice } from "@reduxjs/toolkit";
import { TodayToYearMonthDay } from "../../utils/date";

const initialState = {
    transType: "ALL",
    expType: "ALL",
    incType: "ALL",

    datefilterType : "TODAY", // "ALL", "RANGE"
    dateFrom: TodayToYearMonthDay(),
    dateTo: TodayToYearMonthDay(),
    
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterTransType: (state, action) => {
            state.transType = action.payload;
        },
        filterExpType : (state, action) => {
            state.expType = action.payload;
        },
        filterIncType : (state, action) => {
            state.incType = action.payload;
        },
        

        filterDateFrom : (state, action) => {
            state.dateFrom = action.payload;
        },
        filterDateTo : (state, action) => {
            state.dateTo = action.payload;
        },

        filterDateType : (state, action) => {
            state.datefilterType = action.payload
        },
        
    },
});


export const { filterDateFrom, filterDateTo,filterExpType,filterIncType, filterTransType, filterDateType } = filterSlice.actions;
export default filterSlice.reducer;
