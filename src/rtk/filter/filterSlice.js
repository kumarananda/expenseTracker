import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    transType: "ALL",
    expType: "ALL",
    incType: "ALL",

    dateFrom: "",
    dateTo: "",
    isToday:false,
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
            state.incType = action.payload;
        },
        filterDateFrom : (state, action) => {
            state.dateFrom = action.payload;
        },
        filterDateTo : (state, action) => {
            state.dateTo = action.payload;
        },
        filterForToday : (state, action) => {
            state.isToday = action.payload;
        },
    },
});


export const { filterDateFrom, filterDateTo,filterExpType,filterForToday,filterIncType, filterTransType  } = filterSlice.actions;
export default filterSlice.reducer;
