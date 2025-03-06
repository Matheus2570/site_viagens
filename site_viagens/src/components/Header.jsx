import './Header.css'
import logo from "../assets/Logo-grupo5.png";

function Header() {
  return (
    <>
 <header className="header">
        <h1>Viagens Grupo 5</h1>
        <img src={logo} className="logo" alt="Imgem React" />
      </header>
  
    </>
  )
}

export default Header