import { createSlice } from "@reduxjs/toolkit"
import { cartItemsCheck } from "../../utils/cart.js";

const initialState = {
    cartItems: [],
    cartCount: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addCartItem (state, action) {
            const { cartItem } = action.payload;
            state.cartItems = cartItemsCheck(state.cartItems, cartItem);
        },

        updateCartCount(state) {
            state.cartCount = state.cartItems.reduce( (total, item) => total + item.qty, 0 );
        },

        setTotalPrice(state) {
            state.totalPrice = state.cartItems.reduce( (total, item) => total + (item.qty * item.price), 0 );
        },

        updateCartItem (state, action) {
            const { cid, upflag } = action.payload;
            state.cartItems = 
                state.cartItems.map( item => 
                    item.cid === cid ? 
                        upflag ? { ...item, qty: item.qty + 1 }
                                :{ ...item, qty: item.qty - 1 }
                    : item
            )
        },

        removeCartItem(state, action) {
            const { cid } = action.payload;
            state.cartItems = 
                state.cartItems.filter( item => item.cid !== cid );
        }
    }
});

// 컴포넌트, API함수에서 reducers의 함수를 사용하기 위해 action 추가(dispatch)
export const { addCartItem, updateCartCount, setTotalPrice, updateCartItem, removeCartItem } = cartSlice.actions;

// store import
export default cartSlice.reducer;