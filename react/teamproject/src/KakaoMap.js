import { Map } from "react-kakao-maps-sdk";

export function KakaoMap(props) {
    return (
    <Map
      center={{ lat: '33.450701', lng: '126.570667' }}
      style={{ width: '500px', height: '400px' }}
      level={3}
    />  
  );
}