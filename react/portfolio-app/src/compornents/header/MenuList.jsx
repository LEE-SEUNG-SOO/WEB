import { useState } from 'react';
import { Menu } from './Menu.jsx'

export function MenuList({menus}){
    
    const [active, setActive] = useState('Home');
    const handleClick = (text) => { // 자식에게 전송하는 props 이벤트 핸들러 함수
        setActive(text);
    };

    return(
        <ul className="header-menu">
            { menus && menus.map( menu => 
                    <li>
                        <Menu href={menu.href} 
                            text={menu.text} 
                            click={handleClick} 
                            style={ active === menu.text ? "header-menu-item active" : "header-menu-item" } />
                    </li>
                )
            }
        </ul>
    );
}