import { ProductImage } from './ProductImage.jsx';
import { Icon } from '../commons/Icon.jsx';

/**
 * 베스트 상품 이미지 컴포넌트
 */
export function BestProductImage({img, style, rank, like, icon, eventHandler, icon_style}){
    const handleAddCart = () => {
        eventHandler();
    }

    // 파라미터의 데이터가 존재하는지에 대한 조건식 체크
    // indext.js의 StrictMode가 해제되어 있는경우 객체, 배열들을 코드로 체크하는 로직을 추가
    // const {bg, color, width, height} = icon_style || {}; 

    return(
        <div className="best-product-img">
            <ProductImage img={img} style={style}/>
            <Icon value={rank}
                    color={icon_style.color}
                    bg={icon_style.bg}
                    width={icon_style.width}
                    height={icon_style.height}/>
            { like ?
                <span className="best-product-img-like" onClick={handleAddCart}>{icon}</span>
              : ""}
        </div>
    );
}

