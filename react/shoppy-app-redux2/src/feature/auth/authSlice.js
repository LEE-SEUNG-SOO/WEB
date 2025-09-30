import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "isLogin":false,
    "isCart":false,
    "userId":"test",
    "userPwd":1234,
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        setLogin (state, action ){
            state.isLogin = true;  
        },
        setCart (state, action){
            state.isCart = true;
        },
        setLogout (state, action) {
            state.isLogin = false;
            state.isCart = false;
        },
    }
})

export const { setLogin, setLogout } = authSlice.actions

export default authSlice.reducer;