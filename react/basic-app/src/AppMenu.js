import './css/Menu.css';
import { MenuList } from './component/menus/MenuList.jsx';
import { useEffect, useState } from 'react';
import { fetchData } from './util/commonData.js';
import { Logo } from './component/commons/Logo.jsx';

export function App(){
    const [menus, setMenus] = useState({});
    
    useEffect( () => {
        const fetch = async() => {
            const data = await fetchData("/data/menus.json");
            setMenus(data);
        }
        
        fetch();
    },[]);

    return(
        <div>
            <div className="header">
                <MenuList menus={menus.headerLeft}/>
                <Logo img="/images/logoRed.png" alt="Logo" w="100px"/>
                <MenuList menus={menus.headerRight}/>
            </div>
            <div className="header-menu-center">
                <MenuList menus={menus.headerCenter}/>
            </div>
            <div className="footer">
                <MenuList menus={menus.footerTop}/>
            </div>
        </div>
    );
}