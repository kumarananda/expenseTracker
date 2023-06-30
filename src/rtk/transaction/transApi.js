import apiSlice from "../api/apiSlice";


export const transApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsrsTrans: builder.query({
            query: (data) =>  ({
                    url: `/transaction/${data.userId}`,
                    method: "GET",
            }),
            
            providesTags :  ['Transaction'],   
        }),
        createTrans: builder.mutation({
            query: (data) => ({
                url: `/transaction/${data.userId}`,
                method: "POST",
                body: data,

            }),
            invalidatesTags : ["Transaction"]   
        }),
        editTrans: builder.mutation({
            query: (data) => ({
                url: `/transaction/${data.userId}/${data._id}`,
                method: "PATCH",
                body: data,

            }),
            invalidatesTags : ["Transaction"]
        }),
        deleteTrans: builder.mutation({
            query: (data) => ({
                url: `/transaction/${data.userId}/${data._id}`,
                method: "DELETE",
            }),
            invalidatesTags : ["Transaction"]
        }),
    })
})

export const {  useCreateTransMutation, useGetUsrsTransQuery, useEditTransMutation, useDeleteTransMutation } = transApi;