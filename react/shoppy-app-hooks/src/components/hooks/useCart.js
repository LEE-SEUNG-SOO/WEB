import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext.js';
import { cartItemsCheck } from '../../utils/cart.js'

/**
 * CartContext를 제어하는 함수를 가진 커스텀 훅
 */
export function useCart() {
    // cartContext의 값을 가져오기
    const { cartCount, setCartCount, cartItems, setCartItems } = useContext(CartContext);

    // 컨텍스트 객체의 값을 변경하는 함수 정의
    // 장바구니 아이템 추가
    const addCart = (cartItem) => {
        setCartItems(cartItemsCheck(cartItems ,cartItem));
        setCartCount(cartCount + 1);
    }

    return { addCart };
}

