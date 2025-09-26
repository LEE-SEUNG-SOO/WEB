import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.js";
import { AuthContext } from "../../context/AuthContext.js";
import { useAuth } from "../hooks/useAuth.js";

//<IoCartOutline />
export function Header(){
    // const loginInfo = localStorage.getItem("loginInfo");
    // // console.log("loginInfo", loginInfo);
    // console.log("loginInfo", JSON.parse(loginInfo));// 문자열을 json 형태로    
    const { cartCount } = useContext(CartContext);
    const { isLogin } = useContext(AuthContext);
    const { handleLogout } = useAuth();

    return(
        <div className="header-outer">
            <div className="header">
                <Link to="/" className="header-left">
                    <FiShoppingBag />
                    <span>Shoppy-hooks</span>
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