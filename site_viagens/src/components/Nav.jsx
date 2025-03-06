import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
  return (
    <nav className="nav">
     
          <Link to="/">Home</Link>
   
          <Link to="/viajem1">Viajem 1</Link>
       
          <Link to="/viajem2">Viajem 2</Link>
     
          <Link to="/viajem3">Viajem 3</Link>
       
          <Link to="/viajem4">Viajem 4</Link>
     
         
    </nav>
  );
}

export default Nav;