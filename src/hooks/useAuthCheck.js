"use client"

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../rtk/auth/authSlice";
import Cookies from "js-cookie";


export default async function useAuthCheck() {
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const localAuth = localStorage?.getItem("auth");
        const accessToken = Cookies?.get("accessToken");


        if (localAuth && accessToken) {
            const auth = JSON.parse(localAuth);
            // console.log(auth);
            if (auth?.accessToken && auth?.user) {
                dispatch(
                    userLoggedIn({
                        accessToken: auth.accessToken,
                        user: auth.user,
                    })
                );
            }
        }

        setAuthChecked(true);

    }, [dispatch, setAuthChecked]);

    return authChecked;
}
