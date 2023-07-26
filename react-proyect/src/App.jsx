import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import {ItemListContainer}  from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './Components/Contacto/Contacto';
import { DarkModeProvider } from './context/DarkModeContext';
import { CartProvider } from './context/CartContext';
import { CartView } from './Components/CartView/CartView';



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
              <Route path='*' element={ <Navigate to={'/'} /> } />

            </Routes>

        </BrowserRouter>
      </CartProvider>
    </DarkModeProvider>
    
  )
}

export default App
