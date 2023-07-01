
import  apiSlice  from "../api/apiSlice";

import swal from 'sweetalert';
import { userExpenseUpdate, userLoggedIn } from "./authSlice";
import Cookies from "js-cookie";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/user",
                method: "POST",
                body: data,
            }),
            providesTags: ["User"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    // console.log(result.data.accessToken);
                    
                    if(result.data?.user){

                        Cookies.set("accessToken", result.data.accessToken)

                        localStorage.setItem(
                            "auth",
                            JSON.stringify({
                                accessToken: result.data.accessToken,
                                user: result.data.user,
                            })
                        );
    
                        dispatch(
                            userLoggedIn({
                                accessToken: result.data.accessToken,
                                user: result.data.user,
                            })
                        );

                    }else {
                        swal("Error!", result.data.error, "error");
                    }

                    
                } catch (err) {
                    // do nothing
                }
            },
        }),

        // Login 
        login: builder.mutation({
            query: (data) => ({
                url: "/user/login",
                method: "POST",
                body: data,
            }),
            providesTags: ["User"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    const user = result.data?.user;

                    if(user){

                        Cookies.set("accessToken", result.data.accessToken)

                        localStorage.setItem(
                            "auth",
                            JSON.stringify({
                                accessToken: result.data.accessToken,
                                user: result.data.user,
                            })
                        );
    
                        dispatch(
                            userLoggedIn({
                                accessToken: result.data.accessToken,
                                user: result.data.user,
                            })
                        );

                    }else {
                        swal("Error!", result.data.error, "error");
                    }

                   
                } catch (err) {
                    // do nothing
                }
            },
        }),
        updateExpCat : builder.mutation({
            query: (data) => ({
                url: `/user/cate-update/${data.id}`,
                method : "PATCH",
                body: {category: data.category}
            }),
            // invalidatesTags : ['User'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    // console.log(result.data.accessToken);
                    
                    if(result.data?.user){

                        Cookies.set("accessToken", result.data.accessToken)

                        localStorage.setItem(
                            "auth",
                            JSON.stringify({
                                accessToken: result.data.accessToken,
                                user: result.data.user,
                            })
                        );
    
                        dispatch(
                            userLoggedIn({
                                accessToken: result.data.accessToken,
                                user: result.data.user,
                            })
                        );

                    }else {
                        swal("Error!", result.data.error, "error");
                    }

                    
                } catch (err) {
                    // do nothing
                }
            },
        }),
        
    }),
});

export const { useLoginMutation, useRegisterMutation, useUpdateExpCatMutation } = authApi;
