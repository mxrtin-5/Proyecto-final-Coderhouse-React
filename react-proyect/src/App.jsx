import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './Components/Navbar/Navbar'
import {ItemListContainer}  from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './Components/Contacto/Contacto';
import { DarkModeProvider } from './context/DarkModeContext';
import { CartProvider } from './context/CartContext';
import { CartView } from './Components/CartView/CartView';
import { ErrorPage } from './Components/ErrorPage/ErrorPage';



function App() {


  return (

    <DarkModeProvider>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

            <Routes>

              <Route path='/' element={ <ItemListContainer/> } />
              <Route path='/productos/:categoryId' element={ <ItemListContainer/> } />
              <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }   />
              <Route path='/contacto' element={<Contacto/>} />
              <Route path='/cart' element={ <CartView />} />
              <Route path='*' element={ <ErrorPage/> } />

            </Routes>

        </BrowserRouter>
      </CartProvider>
    </DarkModeProvider>
    
  )
}

export default App
