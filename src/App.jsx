import './css/App.css'
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart';
import Producto from './components/Pages/Producto';
import Category from './components/Pages/Category';
import Nosotros from './components/Pages/Nosotros';
import Contacto from './components/Pages/Contacto';
import CartProvaider from './context/CartContext';
import Footer from './components/Footer';
import Checkout from './components/Checkout';


function App() {

  return (

    <>
      <CartProvaider>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartProvaider>
      <Footer />
    </>
  )
}

export default App
