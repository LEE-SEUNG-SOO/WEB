import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Product } from './pages/Product.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { Support } from './pages/Support.jsx';
import { Cart } from './pages/Cart.jsx';
import { Layout } from './pages/Layout.jsx';
import { ProductDetail } from './pages/ProductDetail.jsx';
import { CheckoutInfo } from './pages/CheckoutInfo.jsx';
import { cartItemsCheck } from './utils/cart.js';
import { CartProvider } from './context/CartContext.js';
import './styles/shoppy.css';
import './styles/commons.css';
import './styles/cgv.css';

// : <- 패스배리어블( 경로 변수 설정)
export default function App() {
  // // 장바구니 수량 관리
  // const [cartCount, setCartCount] = useState(0);
  // // 장바구니 아이템 관리
  // const [cartItems, setCartItems] = useState([]);

  // const addCart = (cartItem) => {
  //   setCartItems(cartItemsCheck(cartItems ,cartItem));
  //   setCartCount(cartCount + 1);
  // }

  // CartProvider로 범위 지정
  // <ExProvider> <<= 추가로 쓸 프로바이더 설정
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/all' element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/support' element={<Support />} />
            <Route path='/cart' 
              element={<Cart />}/>
            {/* <Route path='/products/:pid' element={<ProductDetail addCart={addCart}/>} /> */}
            <Route path='/products/:pid' element={<ProductDetail />} />
            <Route path='/checkout' element={<CheckoutInfo />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}