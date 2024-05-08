import { BrowserRouter, Routes, Route } from "react-router-dom"

import { CartProvider } from "./context/CartContext"

import { ToastContainer } from "react-toastify"

import ItemDetailCountainer from "./components/ItemDetailCountainer/itemDetailCountainer"
import NavBar from "./components/NavBar/NavBar"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import ItemListContainer from './components/ItemListCountainer/ItemListContainer'

import "./app.css"

function App() {



  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <ToastContainer/>
        <Routes>

          <Route path="/" element={< ItemListContainer titulo="Bienvenido a Ramplate" />} />

          <Route path="/category/:idCategory" element={< ItemListContainer />} />

          <Route path="/detail/:idProduct" element={< ItemDetailCountainer />} />

          <Route path="/cart" element={< Cart/>}/>
          
          <Route path="/checkout" element={< Checkout/>}/>

        </Routes>

      </CartProvider>
    </BrowserRouter>
  )
}

export default App
