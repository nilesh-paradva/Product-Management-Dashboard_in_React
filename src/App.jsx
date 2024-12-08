import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ProductForm from './components/productform/ProductForm';
import MainBanner from './pages/mainbanner/MainBanner';
import Cart from './pages/cart/Cart';
import Edit from './pages/edit/Edit';
import View from './pages/view/View';
import NotFound from './pages/notfound/NotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainBanner />}/>
          <Route path='/productform' element={<ProductForm />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/edit/:id' element={<Edit />}/>
          <Route path='/view' element={<View />}/>
          <Route path='/notfound' element={<NotFound />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
