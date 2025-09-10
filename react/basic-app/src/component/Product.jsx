/**
 * 베스트 상품 아이템 컴포넌트
 */

import { useState, useEffect } from "react";

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

        const fetchData = async () =>{
            const response = await fetch("/data/best_product.json");
            const jsonData = await response.json();
            setBestProductList(jsonData);
        }

        fetchData();
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
export function BestProductItem({items, style, cartCount}){
    return(
        <div>
            <BestProductImage img ={items.img} style={style} rank = {items.rank} like = {items.like} cartCount={cartCount}/>
            <BestProductContent items={items}/>
        </div>
    );
}

/**
 * 베스트 상품 컨텐츠 컴포넌트 
 */
export function BestProductContent({items}){
    return(
        <div className="best-product-content">
            <p className="best-product-content-title">{items.title}</p>
            <span className="best-product-content-sale">{items.sale}</span>
            <span className="best-product-content-price">{items.price}</span>
            <span className="best-product-content-like">
                {
                    items.like ? "🤍" : ""
                }
            </span>
        </div>
    );
}


/**
 * 베스트 상품 이미지 컴포넌트
 */
export function BestProductImage({img, style, rank, like, cartCount}){
    const handleAddCart = () => {
        cartCount();
    }

    return(
        <div className="best-product-img">
            <ProductImage img={img} style={style}/>
            <span className="best-product-img-no">{rank}</span>
            { like ?
                <span className="best-product-img-like" onClick={handleAddCart}>🛒</span>
              : ""}
        </div>
    );
}


/**
 * 상품 이미지 컴포넌트
 */
export function ProductImage({img, style}){
    const {width, height} = style;
    return (
        <img src={img}
            style={{width:width, height:height}}/>
    );
}