import "./app.scss"
import ItemListContainer from './components/ItemListCountainer/ItemListContainer'
import ItemDetailCountainer from "./components/ItemDetailCountainer/itemDetailCountainer"
import NavBar from "./components/NavBar/NavBar"
import ItemCount from "./components/examples/ItemCount/ItemCount"
import { BrowserRouter , Routes , Route } from "react-router-dom"
 
function App() {

  const addToCart = (count) => {
    console.log(count)
  };

  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        
        <Route path="/" element={< ItemListContainer titulo="Bienvenido a Ramplate" />} />

        <Route path="/category/:idCategory" element={< ItemListContainer />} />
        
        <Route path="/detail/:idProduct" element={< ItemDetailCountainer />} />
        
      </Routes>
      <ItemCount addToCart={addToCart} />

    </BrowserRouter>
  )
}

export default App
