import { addCartItem, updateCartCount, updateCartItem, removeCartItem, setTotalPrice } from './cartSlice.js';

export const addCart = (cartItem) => (dispatch) => {
    dispatch(addCartItem({ "cartItem":cartItem }));
    dispatch(updateCartCount());
}

export const updateCart = (cid, upflag) => (dispatch) => {
    dispatch(updateCartItem({ "cid":cid, "upflag":upflag }));
    dispatch(updateCartCount());
    dispatch(setTotalPrice());
}

export const removeCart = (cid) => (dispatch) => {
    dispatch(removeCartItem({ "cid":cid }));
    dispatch(updateCartCount());
    dispatch(setTotalPrice());
}