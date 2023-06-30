import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../rtk/api/apiSlice";
import authSliceReducer from "../rtk/auth/authSlice"
import filterSliceReducer from "../rtk/filter/filterSlice";


// create store 
const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer,
        auth: authSliceReducer,
        filter: filterSliceReducer
    },
    devTools: true,
    // devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
})

export default store