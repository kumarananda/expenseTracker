import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const apiSlice = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:5000/api",
        // baseUrl : "https://expense-tracker-api-beta.vercel.app/api",

        // credentials: "include",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.accessToken
            if (token) {
              headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    
    tagTypes : ["Transaction", "User"],
    endpoints : (builder) => ({}) 

})
export default apiSlice