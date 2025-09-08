/**
 * 메뉴
 */

// 구조분할
export function Menu({href, color, bg, title}){
    return(
        <a href={href} 
            className="menu" 
            style={{color:color, background:bg}}>{title}</a>
    );
}

// 구조 분해 할당
export function Menu2({data}){
    const {href, title, color, bg} = data; // 구조 분해 할당
    return(
        <a href={href} 
            className="menu" 
            style={{color:color, background:bg}}>{title}</a>
    );
}

// props
// export function Menu2({data}){
//     return(
//         <a href={data.href} className="menu" style={{color:data.color, background:data.bg}}>{data.title}</a>
//     );
// }

// props
// export function Menu(props){
//     return(
//         <a href="#" style={{color:props.color, background:props.bg}}>{props.title}</a>
//     );
// }

export function MenuList({menus}){
    console.log(menus);
    return(
        <ul className="menu-list">
            {menus.map( (menu) =>
                <li> 
                    <Menu href={menu.href} title={menu.title} color={menu.color} bg={menu.bg}/>
                </li>
            )}
        </ul>
    );
}