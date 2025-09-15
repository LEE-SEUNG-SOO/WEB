import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './component/router/Layout.jsx';
import { Login } from './component/form/Login.jsx';
import { Signup } from './component/form/Signup.jsx';
import { UserInfo } from './component/form/UserInfo.jsx';

export function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/login" element={<Login/>}></Route>
                        <Route path="/signup" element={<Signup/>}></Route>
                        <Route path="/userinfo" element={<UserInfo/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>        
    );
}