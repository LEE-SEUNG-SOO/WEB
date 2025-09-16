/**
 * 사이트 헤더 화면 출력 컴포넌트
 */

import { Link } from 'react-router-dom';
// children : Layout.jsx에 Header의 값을 전부 프롭스로 받을경우
// export function Header({children}){
export function Header(){
    return(
        <header style={{backgroundColor:"yellow"}}>
            {/* {children} */}
            <a href="https://www.naver.com">네이버</a>
            <Link to="/" style={{padding:"10px", color:"red"}}>홈</Link>
            <Link to="/login" style={{padding:"10px", color:"red"}}>로그인</Link>
            <Link to="/signup" style={{padding:"10px", color:"red"}}>회원가입</Link>
            <Link to="/userinfo" style={{padding:"10px", color:"red"}}>유저정보</Link>
            <Link to="/about" style={{padding:"10px", color:"red"}}>정보</Link>
            <Link to="/support" style={{padding:"10px", color:"red"}}>도움</Link>
        </header>
    )
}