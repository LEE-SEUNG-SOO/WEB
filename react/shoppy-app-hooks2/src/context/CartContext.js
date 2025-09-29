import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    // 장바구니 수량 관리
    const [cartCount, setCartCount] = useState(0);
    // 장바구니 아이템 관리
    const [cartItems, setCartItems] = useState([]);
    // 총 금액
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <CartContext.Provider value={ { cartCount, setCartCount, cartItems, setCartItems, totalPrice, setTotalPrice } }>         
            {children}
        </CartContext.Provider> 
    )
}