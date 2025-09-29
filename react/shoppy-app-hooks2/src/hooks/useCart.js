import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';
import { cartItemsCheck, getTotalPrice } from '../utils/cart.js';

export function useCart() {

    const  { cartCount, setCartCount, cartItems, setCartItems, setTotalPrice  } = useContext(CartContext);

    const addCart = (cartItem) => {
        setCartItems(cartItemsCheck(cartItems ,cartItem));
        setCartCount(cartCount + 1);
    }

    const settingTotalPrice = () => {
        const fetch = async () => {
            setTotalPrice(getTotalPrice(cartItems));
        }
        fetch();
    }

        // 장바구니 리스트 갱신
    const updateCartList = (cid, upflag) => {
        // 장바구니 갱신 데이터 취득
        const cartData = 
            cartItems.map( item => 
                item.cid === cid ? 
                    upflag ? { ...item, qty: item.qty + 1 }
                           :{ ...item, qty: item.qty - 1 }
                : item
            )
        // 장바구니 아이템 갱신
        setCartItems(cartData);
        // 총 금액 갱신
        setTotalPrice(getTotalPrice(cartData));
        // 장바구니 카운트 갱신
        upflag ? setCartCount(cartCount + 1) : setCartCount(cartCount - 1);
    };

    // 장바구니 리스트 삭제
    const removeCartList = (cid) => {
        // 장바구니 갱신 데이터 취득
        // 장바구니 카운트 갱신
        const cartData = 
            cartItems.filter( item => 
                item.cid !== cid ? item : setCartCount(cartCount - item.qty)
            );

        // 장바구니 아이템 갱신
        setCartItems(cartData);
        // 총 금액 갱신
        setTotalPrice(getTotalPrice(cartData));
    }


    return { addCart, settingTotalPrice, updateCartList, removeCartList };
}