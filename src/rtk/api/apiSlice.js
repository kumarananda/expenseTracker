import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const localAPI = "http://localhost:5000/api"
const liveAPI = "https://expense-tracker-api-beta.vercel.app/api"

const apiSlice = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({
        baseUrl : process.env.NODE_ENV === "development " ? localAPI : liveAPI  ,

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