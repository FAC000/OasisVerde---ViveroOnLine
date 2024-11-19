import './style/App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BasicExample } from './components/Navbar';
import { Titulo } from './components/Titulo';
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import { Checkout } from './components/Checkout';
import { CarritoProvider } from './context/CartContext.jsx';
import { Cart } from './components/Cart.jsx';
import { ToastContainer } from 'react-toastify'
import { Contacto } from './components/Contacto.jsx';


export const App = () => {

  return (
    <BrowserRouter>
      <CarritoProvider>
        <BasicExample />
        <ToastContainer />
        <Routes>

          <Route path='./' element={<Titulo />} />
          <Route path='./productos' element={<ItemListContainer />} />
          <Route path='./categoria/:cid' element={<ItemListContainer />} />
          <Route path='./productos/:pid' element={<ItemDetailsContainer />} />
          <Route path='./checkout' element={<Checkout />} />
          <Route path='./Cart' element={<Cart />} />
          <Route path='./contacto' element={<Contacto />} />

        </Routes>

      </CarritoProvider>
    </BrowserRouter>

  );
}



