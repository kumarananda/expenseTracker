import apiSlice from "../api/apiSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createTrans: builder.mutation({
            query: (data) => ({
                url: "",
                method: "POST",
                body: data
            })
        })
    })
})
