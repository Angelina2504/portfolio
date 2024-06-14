import { Link } from "react-router-dom";

function Navbar() {
    return (
    <nav>
        <Link className="link_home" to="/">Accueil</Link>
        <Link className="link_projects" to="/projects">Mes projets</Link>
        <Link className="link_contact" to="/contact-page">Contactez moi</Link>
    </nav>
    
    ) 
}

export default Navbar;