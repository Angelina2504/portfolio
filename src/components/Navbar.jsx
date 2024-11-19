import "../styles/navbar.css";
import iconLinkedinWhite from "/src/assets/icon-linkedin-white.png";
import { Link } from "react-router-dom";
import workInProgress from '/src/assets/enConstruction.png';

function Navbar() {
    return (
        <nav className="navBar">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/projects">Mes projets</Link></li>
                <li className="blocLkd">
                    <Link className="contactMe" to="https://www.linkedin.com/in/angelina-droz/" target="_blank">
                        <span>Contactez moi</span>
                        <img className="linkedin-icon" src={iconLinkedinWhite} alt="icon Linkedin to visit my page"/>
                    </Link>
                </li>
            </ul>

            <div className="workInProgress-container">
                <div className="workInProgress">
                    <img className="transparent" src={workInProgress} alt="work in progress"/>
                    <span className="transparent">Revenez régulièrement pour suivre les nouveautés...!</span>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;
