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
import { CartProvider } from './context/CartContext.js';
import { ProductProvider } from './context/ProductContext.js';
import './styles/shoppy.css';
import './styles/commons.css';
import './styles/cgv.css';

// : <- 패스배리어블( 경로 변수 설정)
export default function App() {
  return (
    <CartProvider>
    <ProductProvider>
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
            <Route path='/products/:pid' element={<ProductDetail />} />
            <Route path='/checkout' element={<CheckoutInfo />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
    </CartProvider>
  );
}