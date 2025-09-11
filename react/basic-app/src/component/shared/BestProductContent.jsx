/**
 * 베스트 상품 컨텐츠 컴포넌트 
 */
export function BestProductContent({items , icon, openDt, salesAcc, audiAcc}){
    return(
        <div className="best-product-content">
            <p className="best-product-content-title">{items.title}</p>
            {/* <span className="best-product-content-sale">{items.sale}</span>
            <span className="best-product-content-price">{items.price}</span> */}
            <span className="best-product-content-title">개봉일 : {openDt}</span><br/>
            <span className="best-product-content-title">누적판매금액 : {salesAcc}</span><br/>
            <span className="best-product-content-title">누적관객수 : {audiAcc}</span>
            <span className="best-product-content-like">
                {
                    items.like ? icon : ""
                }
            </span>
        </div>
    );
}
