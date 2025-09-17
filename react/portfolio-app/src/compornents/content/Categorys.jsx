import { useState } from "react";

export function Catecorys({catecorys}){
    const [active, setActive] = useState('All');
    const handleClick = (text) => { // 자식에게 전송하는 props 이벤트 핸들러 함수
        setActive(text);
    };

    return(
        <ul className="work-catecorys">
            {
                catecorys && catecorys.map( catecory => 
                <Catecory data={catecory} click={handleClick}
                   style = { active === catecory.name ? "category selected" : "category"} />)
            }
        </ul>
    );
}

export function Catecory({data, style, click}){
    return(
        <li>
            <button className={style} onClick={ () => click(data.name) }>{data.name}
                <span className="category-count">{data.count}</span>
            </button>
        </li>
    )
}