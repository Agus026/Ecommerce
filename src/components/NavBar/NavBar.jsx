import CartWidget from "./CartWidget"
import "./navbar.scss"
import "./CartWidget"
const NavBar = () => {


  return (
    <header>
      <nav className="navbar">
        <img className="logo" src="/img/logo.png" alt="Logo de la marca" />
        <ul className="list" >
          <li><a href="#"> Ropa </a></li>
          <li><a href="#"> Indumentaria </a></li>
          <li><a href="#"> Skate </a> </li>
          <a className="cart" href="#"><CartWidget /></a>
          <p>0</p>
        </ul>

      </nav>
    </header>
  )
}

export default NavBar
