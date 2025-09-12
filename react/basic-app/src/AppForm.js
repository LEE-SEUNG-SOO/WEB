import { Login } from './component/form/Login.jsx';
import { UserInfo } from './component/form/UserInfo.jsx';
import { UserInfo2 } from './component/form/UserInfo2.jsx';

export function App(){
    return(
        <>
            <Login />
            <hr />
            <UserInfo />
            <hr />
            <UserInfo2 />
        </>
    );
}