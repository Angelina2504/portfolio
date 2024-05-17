import { Link } from "react-router-dom";

function Navbar() {
    return (
    <nav>
        <Link to="/">Accueil</Link>
        <Link to="/projects">Mes projets</Link>
        <Link to="/contact-page">Contactez moi</Link>
    </nav>
    
    ) 
}

export default Navbar;