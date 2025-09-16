import { Logo } from "./header/Logo.jsx"
import { Menu } from "./header/Menu.jsx"

export function Header(){
    return(
        <header className="header">
            <Logo />
            <Menu />
            {/* <button id="menu-toggle" className="header-toggle"><i className="fa-solid fa-bars"></i></button> */}
        </header>
    )
}