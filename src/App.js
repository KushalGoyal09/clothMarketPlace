import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './ui/Navbar';
import Products from './web/Products';
import SingleProduct from './web/SingleProduct';
import LoginPage from './web/LoginPage';
import SignupPage from './web/SignupPage';
import AddProduct from './web/AddProduct';
import CartPage from './web/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product' element={<SingleProduct />} />
          <Route path='/signin' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/addProduct' element={<AddProduct />} />
          <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
