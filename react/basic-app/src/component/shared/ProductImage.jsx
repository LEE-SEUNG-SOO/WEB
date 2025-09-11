/**
 * 상품 이미지 컴포넌트
 */
import { Images } from '../commons/Images.jsx';


export function ProductImage({img, style}){
    const {width, height} = style;
    return (
        <Images img={img} width={width} height={height}/>
    );
}