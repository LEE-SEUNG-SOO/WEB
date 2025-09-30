import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import { useAuth } from "../../hooks/useAuth.js";
import { useSelector } from "react-redux";

//<IoCartOutline />
export function Header(){
    const { isLogin } = useContext(AuthContext);
    const { handleLogout } = useAuth();
    const cartCount = useSelector( (state) => state.cart.cartCount );

    return(
        <div className="header-outer">
            <div className="header">
                <Link to="/" className="header-left">
                    <FiShoppingBag />
                    <span>Shoppy-redux(toolkit)</span>
                </Link>
                <nav className="header-right">
                    <Link to="/all">Products</Link>
                    <Link to="/cart" className="header-icons-cart-link">
                        <IoCartOutline className="header-icons"/>
                        <span className="header-icons-cart">{cartCount}</span>
                    </Link>
                    { isLogin ?
                        <Link to="/"><button type="button" onClick={ () => { handleLogout() } }>Logout</button></Link>
                        : <Link to="/login"><button type="button">Login</button></Link>
                    }
                    <Link to="/signup">
                        <button type="button">Singup</button>
                    </Link>
                    { isLogin ?
                        <Link to="/support">
                            <button type="button">support</button>
                        </Link>
                        : ""
                    }
                </nav>
            </div>
        </div>
    )
}