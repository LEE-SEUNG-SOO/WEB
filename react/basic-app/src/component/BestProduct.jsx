/**
 * 베스트 상품 아이템 컴포넌트
 */

import { useState, useEffect } from 'react';
import { BestProductImage } from './shared/BestProductImage.jsx';
import { BestProductContent } from './shared/BestProductContent.jsx';
import { fetchData } from '../util/commonData.js';

export function BestProduct(){
    // const productItems = bestProductList.filter( (item, index) => !(index === 0));
    const [bestProductList, setBestProductList] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const handleCartCount = () => {
        setCartCount(cartCount + 1);
    };

    // 컴포넌트 호출 시 데이터 로딩 --> useEffect Hooks 함수 사용
    useEffect(() => {
        // fetch("/data/best_product.json")
        // .then( response => response.json())
        // .then( jsonData => setBestProductList(jsonData))
        // .catch();
        const fetch = async () => {
                const url = "/data/best_product.json";
                const result = await fetchData(url);
                console.log(result);
                setBestProductList(result);
            };
            
            fetch();
    }, []);

    return(
        <div>
            <h2>베스트 상품 - 🛒: {cartCount}</h2>
            <ul className="best-product">
                {bestProductList.map( (product, index) => 
                    index === 0 ? 
                    <li><BestProductImage
                            img={product.img}
                            style={{width:"600px", height:"800px"}}
                            rank={product.rank}
                            like={product.like}
                            icon="🛒"
                            cartCount={handleCartCount}
                        /></li>
                    :
                    <li><BestProductItem
                            items={product}
                            style={{width:"200px", height:"300px"}}
                            cartCount={handleCartCount}/></li>
                )}
            </ul>
        </div>
    );
}

/**
 * 베스트 상품 컴포넌트
 */
export function BestProductItem({items, style, cartCount, icon_style, openDt, salesAcc, audiAcc}){
    return(
        <div>
            <BestProductImage img ={items.img} style={style} rank = {items.rank} like = {items.like} icon="🛒" cartCount={cartCount} icon_style={icon_style}/>
            <BestProductContent items={items} icon="🤍" openDt ={openDt} salesAcc={salesAcc} audiAcc={audiAcc}/>
        </div>
    );
}

