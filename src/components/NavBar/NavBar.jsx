import CartWidget from "./CartWidget"
import "./navbar.scss"
import "./CartWidget"
const NavBar = () => {


  return (
    <nav className="navbar">
      <ul >
        <li><img className="icon-navbar" src="/img/logo.png" alt="Logo de la marca" /></li>
        <li><a href="#"> Championes</a></li>
        <li><a href="#"> Camisetas </a></li>
        <li><a href="#"> Patinetas </a> </li>
        <a href="#"><CartWidget /></a>
        <p>0</p>
      </ul>

    </nav>
  )
}

export default NavBar
