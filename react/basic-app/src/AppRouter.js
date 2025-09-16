import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './component/router/Layout.jsx';
import { Home } from './component/router/Home.jsx';
import { About } from './component/router/About.jsx';
import { Support } from './component/router/Support.jsx';
import { Login } from './component/form/Login.jsx';
import { Signup } from './component/form/Signup.jsx';
import { UserInfo } from './component/form/UserInfo.jsx';

export function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home/>}></Route>
                        <Route path="/login" element={<Login/>}></Route>
                        <Route path="/signup" element={<Signup/>}></Route>
                        <Route path="/userinfo" element={<UserInfo/>}></Route>
                        <Route path="/about" element={<About/>}></Route>
                        <Route path="/support" element={<Support/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>        
    );
}