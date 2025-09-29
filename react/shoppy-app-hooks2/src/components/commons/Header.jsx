import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.js";


//<IoCartOutline />
export function Header(){
    const { cartCount } = useContext(CartContext);

    return(
        <div className="header-outer">
            <div className="header">
                <Link to="/" className="header-left">
                    <FiShoppingBag />
                    <span>Shoppy</span>
                </Link>
                <nav className="header-right">
                    <Link to="/all">Products</Link>
                    <Link to="/cart" className="header-icons-cart-link">
                        <IoCartOutline className="header-icons"/>
                        <span className="header-icons-cart">{ cartCount }</span>
                    </Link>
                    <Link to="/login">
                        <button type="button">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button type="button">Singup</button>
                    </Link>
                    <Link to="/support">
                        <button type="button">support</button>
                    </Link>
                </nav>
            </div>
        </div>
    )
}