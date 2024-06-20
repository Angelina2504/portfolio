import "../styles/navbar.css";
import iconLinkedin from "/src/assets/icon-linkedin.png";
import { Link } from "react-router-dom";


function Navbar() {
    return (
    <nav className="navBar">
        <ul >
            <li><Link to="/" >Accueil</Link></li>
            <li><Link to="/projects" >Mes projets</Link></li>
            <li className="blocLkd">
                <span className="contactMe">
                    Contactez moi :
                    <Link className="imgLink" to="https://www.linkedin.com/in/angelina-droz/" target="_blank">
                        <img className="linkedin-icon"
                            src={iconLinkedin} alt="icon Linkedin to visit my page" />
                    </Link>
                </span>
            </li>
        </ul>
    </nav>
    
    ) 
}

export default Navbar;