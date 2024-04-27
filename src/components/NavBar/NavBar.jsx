import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import "./navbar.css"
import "./CartWidget"
const NavBar = () => {


  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <img className="logo" src="/img/logo.png" alt="Logo de la marca" />
        </Link>
        <ul className="list" >
          <Link to="/category/Ropa" className="category-navbar"> Ropa </Link>
          <Link to="/category/Indumentaria" className="category-navbar"> Indumentaria </Link>
          <Link to="/category/Skate" className="category-navbar"> Skate </Link>
        </ul>

        <CartWidget />

      </nav>
    </header>
  )
}

export default NavBar
