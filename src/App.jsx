import "./app.scss"
import ItemListContainer from './components/ItemListContainer'
import NavBar from "./components/NavBar/NavBar"
import ItemCount from "./components/examples/ItemCount/ItemCount"


function App() {

  const addToCart = (count) => {
    console.log(count)
  };

  return (
    <div>
      <NavBar />
      < ItemListContainer titulo="Bienvenido a Ramplate" />
      <ItemCount addToCart={addToCart} />

    </div>
  )
}

export default App
