import { useSelector } from "react-redux";

export default function useAuth() {
    const auth = useSelector((state) => state.auth);


    if (auth?.accessToken && auth?.user) {
        return {isLoggedIn : true, loading :false };
    } else {
        return { isLoggedIn : false, loading:false };
    }
}
