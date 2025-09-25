import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { axiosData } from '../utils/fetchData.js';
import { cartItemsAddInfo, getTotalPrice } from '../utils/cart.js';
import { CartContext } from '../context/CartContext.js';
import '../styles/cart.css';

export function Cart() {
    // const [cartList, setCartList] = useState();
    // const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
    // CartContext의 값 호출
    const { cartItems, setCartItems, cartCount, setCartCount, totalPrice, setTotalPrice } = useContext(CartContext);
    // 총 금액 설정
    setTotalPrice(getTotalPrice(cartItems));

    // useEffect( () => {
    //     const fetch = async () => {
    //         // const jsonData = await axiosData('/data/products.json');
    //         // const cartData = cartItemsAddInfo(jsonData, cartItems);
    //         // console.log("cartData : ",cartItems);
    //         // setCartItems(cartItems);
    //         setTotalPrice(getTotalPrice(cartItems));
    //         // }
    //         // fetch();
            
    //     },[]);
    
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
    const handleRemoveCartList = (cid) => {
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
    
    return (
        <div className='cart-container'>
            <h2 className='cart-header'>장바구니</h2>
            {
                cartItems && cartItems.map( item => 
                    <div>
                        <div className='cart-item'>
                            {item.cid}
                            <img src={ item.image } alt="이미지" />
                            <div className='cart-item-details'>
                                <p className='cart-item-title'> { item.name } </p>
                                <p className='cart-item-title'> { item.size } </p>
                                <p className='cart-item-price'> { parseInt(item.price).toLocaleString() }원 </p>
                            </div>
                            <div className='cart-quantity'>
                                <button type='button' onClick={ () => { item.qty > 1 && updateCartList( item.cid, false ) } }>-</button>
                                <input type="text" value={ item.qty } readOnly/>
                                <button type='button' onClick={ () => { updateCartList( item.cid, true ) } }>+</button>
                            </div>
                            <button className='cart-remove' onClick={ () => {handleRemoveCartList(item.cid)} }>
                                <RiDeleteBin6Line />
                            </button>
                        </div>
                    </div>
                )
            }
            {/* 주문 버튼 출력 */}
            { cartItems && cartItems.length > 0 ? 
            <>
                <div className='cart-summary'>
                    <h3>주문 예상 금액</h3>
                    <div className='cart-summary-sub'>
                        <p className='cart-total'>
                            <label>총 상품 가격 : </label>
                            <span>{ totalPrice.toLocaleString() }원</span>
                        </p>
                        <p className='cart-total'>
                            <label>총 할인 가격 : </label>
                            <span>0원</span>
                        </p>
                        <p className='cart-total'>
                            <label>총 배송비 : </label>
                            <span>0원</span>
                        </p>
                    </div>
                    <p className='cart-total2'>
                        <label>총 금액 : </label>
                        <span>{ totalPrice.toLocaleString() }원</span>
                    </p>
                </div>
                <div className='cart-actions'>
                    { /* navigae(주소 , 전송객체)*/ }
                    <button type='button' onClick={ () => { navigate("/checkout", {state: {cartList:cartItems, totalPrice:totalPrice}}) } }>주문하기</button>
                </div>
            </>
            : 
            <div>
                <p>장바구니에 담은 상품이 없습니다. &nbsp;&nbsp;&nbsp;
                    <Link to="/all">상품으로</Link>
                </p>
                <img src="/images/cart.jpg" style={{width:"50%", marginTop:"20px"}}/>
            </div>
            }
        </div>
    );
}

