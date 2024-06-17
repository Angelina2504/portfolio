import "../styles/navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
    return (
    <nav className="navBar">
        <ul >
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/projects">Mes projets</Link></li>
            <li><Link to="/contact-page">Contactez moi</Link></li>
        </ul>
    </nav>
    
    ) 
}

export default Navbar;