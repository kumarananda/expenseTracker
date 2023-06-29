import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const apiSlice = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:5000/api",
        // baseUrl : "https://expense-tracker-api-beta.vercel.app/api",

        // credentials: "include",
    }),
    
    tagTypes : [],
    endpoints : (builder) => ({}) 

})
export default apiSlice