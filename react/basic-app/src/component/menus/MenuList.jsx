import { Menu } from '../commons/Menu.jsx';

export function MenuList({menus}){

    // !menus <- menus가 존재 하는가 아닌가 체크 존재할경우만 작동 !menus ||
    return(
        <ul className="menu-list">
            { !menus || menus.map( (menu) => 
                    <li className="menu-list-item">
                        <Menu href={menu.href}
                                menuName={menu.menuName}
                                style={menu.style}
                                isIcon={menu.isIcon}
                                icon={menu.icon}
                            />
                        { menu.isBorder ==="true" ? 
                            <span className="menu-list-item-border"></span>
                           : ""
                        }
                    </li>
                )
            }
        </ul>
    );
}