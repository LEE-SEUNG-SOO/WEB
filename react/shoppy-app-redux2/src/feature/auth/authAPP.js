import { useSelector } from "react-redux";
import { setLogin, setLogout } from "./authSlice.js";

export const login = () => (dispatch) => {
    dispatch(setLogin());
}

export const logout = () => (dispatch) => {
    dispatch(setLogout());
}

export const checkUser = (id, pwd) => (dispatch) => {
    const { userId } = useSelector( (state) => state.auth.userId );
    const { userPwd } = useSelector( (state) => state.auth.userPwd );

    if(userId === id && userPwd === pwd) {
        dispatch(setLogin());
    }
}