import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

export function Header(){
    return(
        <div className="header-outer">
            <div className="header">
                <Link to="/" className="header-left">
                    <FiShoppingBag />
                    <span>Shoppy</span>
                </Link>
                <nav className="header-right">
                    <Link to="/all">Products</Link>
                    {/* <Link to="/cart"><IoCartOutline /></Link> */}
                    <Link to="/login">
                        <button type="button">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button type="button">Singup</button>
                    </Link>
                </nav>
            </div>
        </div>
    )
}