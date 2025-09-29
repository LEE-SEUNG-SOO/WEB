import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CartContext } from '../context/CartContext.js';
import { useCart } from '../hooks/useCart.js';
import '../styles/cart.css';

export function Cart() {
    const { cartItems, totalPrice } = useContext(CartContext);
    const { settingTotalPrice, updateCartList, removeCartList } = useCart();
    const navigate = useNavigate();

    useEffect( () => {
        settingTotalPrice();        
    },[]);

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
                            <button className='cart-remove' onClick={ () => { removeCartList(item.cid) } }>
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
                    <button type='button' onClick={ () => { navigate("/checkout") } }>주문하기</button>
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

