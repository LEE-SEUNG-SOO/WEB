import { useState } from 'react';
import { Menu } from './Menu.jsx'

export function MenuList(){
    const menus = [
        { "href":"#home", "text":"Home" },
        { "href":"#about", "text":"About" },
        { "href":"#skills", "text":"Skills" },
        { "href":"#work", "text":"My work" },
        { "href":"#testimonial", "text":"Testimonial" },
        { "href":"#contact", "text":"Contact" }
    ]
    
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