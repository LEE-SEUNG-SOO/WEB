import { useState } from "react";

export function Menu(){
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
            { menus &&
                menus.map((item) => <MenuItem item={item} click={handleClick} 
                style = { active === item.text ? "header-menu-item active" : "header-menu-item" }/>)
            }
        </ul>
    )
}

export function MenuItem({item, click, style}){
    const {href, text} = item;

    return(
        <li><a href={href} onClick={ () => { click(text) } }
                className={style}
        >{text}</a></li>
    )
}