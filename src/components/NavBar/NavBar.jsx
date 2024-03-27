import CartWidget from "./CartWidget"
import "./navbar.scss"
import "./CartWidget"
const NavBar = () => {


  return (
    <nav className="navbar">
        <img className="logo" src="/img/logo.png" alt="Logo de la marca" />
      <ul >
        <li><a href="#"> Championes</a></li>
        <li><a href="#"> Camisetas </a></li>
        <li><a href="#"> Patinetas </a> </li>
        <a className="cart" href="#"><CartWidget/></a>
        <p>0</p>
      </ul>

    </nav>
  )
}

export default NavBar
