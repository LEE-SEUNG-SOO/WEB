import { Home } from './pages/Home.jsx';
import { Product } from './pages/Product.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { Layout } from './pages/Layout.jsx';
import './styles/shoppy.css';
import './styles/commons.css';
import './styles/cgv.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/all' element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}