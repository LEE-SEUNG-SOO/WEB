import { Link, Outlet } from 'react-router-dom';

export function Layout(){
    return(
        <div>
            <header>
                {/* <a href="https://www.naver.com">네이버</a> */}
                <Link to="/login">로그인</Link>
                <Link to="/signup">회원가입</Link>
                <Link to="/UserInfo">유저정보</Link>
            </header>
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    )
}