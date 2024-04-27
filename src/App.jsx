import "./app.css"
import ItemListContainer from './components/ItemListCountainer/ItemListContainer'
import ItemDetailCountainer from "./components/ItemDetailCountainer/itemDetailCountainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
function App() {



  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>

          <Route path="/" element={< ItemListContainer titulo="Bienvenido a Ramplate" />} />

          <Route path="/category/:idCategory" element={< ItemListContainer />} />

          <Route path="/detail/:idProduct" element={< ItemDetailCountainer />} />

          <Route path="/cart" element={< Cart/>}/>

        </Routes>

      </CartProvider>
    </BrowserRouter>
  )
}

export default App
