import CartWidget from "./CartWidget"
import "./navbar.scss"
import "./CartWidget"
const NavBar = () => {
    
  
    return (    
    <nav>
        <ul  className="navbar" >
            <img className="icon-navbar" src="/img/logo.png" alt="Logo de la marca" />
            <li> Championes</li>
            <li> Camisetas </li>
            <li> Patinetas </li>
        </ul>
     <CartWidget/>
     <p>0</p>
      
    </nav>
  )
}

export default NavBar
