import { Link, Outlet } from 'react-router-dom';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
/**
 * 화면 출력 형식
 */
export function Layout(){
    return(
        <div>
            {/* <header style={{backgroundColor:"yellow"}}>
                { <a href="https://www.naver.com">네이버</a> }
                <Link to="/" style={{padding:"10px", color:"red"}}>홈</Link>
                <Link to="/login" style={{padding:"10px", color:"red"}}>로그인</Link>
                <Link to="/signup" style={{padding:"10px", color:"red"}}>회원가입</Link>
                <Link to="/userinfo" style={{padding:"10px", color:"red"}}>유저정보</Link>
                <Link to="/about" style={{padding:"10px", color:"red"}}>정보</Link>
                <Link to="/support" style={{padding:"10px", color:"red"}}>도움</Link>
            </header> */}
            {/* <Header> 자식컴포넌트를 Header컴포넌트의 props로 받는경우 {children} */}
                {/* <Link to="/" style={{padding:"10px", color:"red"}}>홈</Link>
                <Link to="/login" style={{padding:"10px", color:"red"}}>로그인</Link>
                <Link to="/signup" style={{padding:"10px", color:"red"}}>회원가입</Link>
                <Link to="/userinfo" style={{padding:"10px", color:"red"}}>유저정보</Link>
                <Link to="/about" style={{padding:"10px", color:"red"}}>정보</Link>
                <Link to="/support" style={{padding:"10px", color:"red"}}>도움</Link>
            </Header> */}
            <Header/>
            <div style={{height:"700px"}}>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    )
}