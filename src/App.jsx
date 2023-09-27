import './css/App.css'
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Item/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart';
import Producto from './components/Pages/Producto';
import Category from './components/Pages/Category';

function App() {

  return (
    <>
    <div>
      <NavBar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/producto/:id" element={<Producto/>}/>
      <Route path="/category/:category" element={<Category/>}/>
    </Routes>
    </>
  )
}

export default App
