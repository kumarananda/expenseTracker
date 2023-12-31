import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: undefined,
    refeshToken: undefined,
    user: undefined,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
        },
        userExpenseUpdate : (state, action) => {
            state.user?.categories?.push(action.payload) ;
        },
    },
});


export const { userLoggedIn, userLoggedOut,userExpenseUpdate } = authSlice.actions;
export default authSlice.reducer;
