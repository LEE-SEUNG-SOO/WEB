import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosData } from '../utils/fetchData.js';
import { PiGiftThin } from 'react-icons/pi';
import { ImageList } from '../components/commons/ImageList.jsx';
import { StartRating } from '../components/commons/StartRating.jsx';

export function ProductDetail({addCart}) {
    const {pid} = useParams(); // useParams -> 객체형태로 데이터 보존
    const [product, setProduct] = useState({});
    const [size, setSize] = useState("L");
    const [imgList, setImgList] = useState([]);
    const tabLables = ["DETAIL", "REVIEW", "Q&A", "RETURN & DELIVERY"];
    const [tabName, setTabName] = useState("detail");
    const tabEventNames = ['detail', 'review', 'qna', 'return']

    useEffect( () => {
        const fillter = async () => {
            const jsonData = await axiosData("/data/products.json");
            // await jsonData.filter( data => data.pid === pid ? setProduct(data) : null ); // fillter는 배열로 리턴!!
            const [fdata] = await jsonData.filter( data => data.pid === pid); // fillter는 배열로 리턴!!
            setProduct(fdata);
            setImgList(fdata.imgList);
        }
        fillter();

    }, [pid]);
    
    const price = parseInt(product.price).toLocaleString() + "원";

    // 쇼핑백 추가
    const handleAddCartItem = () => {
        const cartItem = {
            pid:product.pid,
            size: size,
            qty:1
        };
        addCart(cartItem);
    }

    return (
        <div className='content'>
            <div className='product-detail-top'>
                <div className='product-detail-image-top'>
                    <img src={product.image} alt={product.info} />
                    <ImageList imgList={imgList} className="product-detail-image-top-list"/>
                </div>
                <ul className='product-detail-info-top'>
                    <li className='product-detail-title'>{product.name}</li>
                    <li className='product-detail-title'>{price}</li>
                    <li className='product-detail-subtitle'>{product.info}</li>
                    <li className='product-detail-subtitle-star'>
                        <StartRating totalRate={product.rate} style="star-rating"/>
                        <span>527개 리뷰&nbsp;&nbsp;&gt;</span>
                    </li>
                    <li><p className='product-detail-box'>신규회원, 무이자 할부 등</p></li>
                    <li className='flex'>
                        <button className='product-detail-button size'>사이즈</button>
                        <select className='product-detail-select2' 
                                onChange={(e) => { setSize(e.target.value) }}>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </li>
                    <li className='flex'>
                        <button type='button' className='product-detail-button order'>바로 구매</button>
                        <button type='button'
                                className='product-detail-button cart'
                                onClick={ handleAddCartItem }>쇼핑백 담기</button>
                        <div type="button" className='gift'>
                            <PiGiftThin />
                            <div className='gift-span'>선물하기</div>
                        </div>
                    </li>
                    <li>
                        <ul className='product-detail-summary-info'>
                            <li>상품 정보 요약</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='product-detail-tab'>
                <ul className='tabs'>{
                        tabLables && tabLables.map( (lable, i) =>
                            <li className={tabName=== tabEventNames[i] ? "active": ""}>
                                <button type='button'
                                        onClick={ () => setTabName(tabEventNames[i])}>{lable}</button>
                            </li> 
                        )
                    }
                </ul>
            </div>
            <div style={{marginBottom:"50px"}}></div>
        </div>
    );
}

