import "../styles/navbar.css";
import iconLinkedinWhite from "/src/assets/icon-linkedin-white.png";
import { Link } from "react-router-dom";
import workInProgress from '/src/assets/enConstruction.png';
import iconGithub from '../assets/github-white.svg';
import {useState} from 'react';

// Toggle theme button
import { Classic } from '@theme-toggles/react';
import "@theme-toggles/react/css/classic.css";

function Navbar() {

    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.documentElement.className = isDarkTheme ? 'light-theme' : 'dark-theme';
    };

    return (
        <nav className="navBar">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/projects">Mes projets</Link></li>
                <li className="blockLkd">
                    <Link className="contactMe" to="https://www.linkedin.com/in/angelina-droz/" target="_blank">
                        <span>Contactez moi</span>
                        <img className="linkedin-icon" src={iconLinkedinWhite} alt="icon Linkedin to visit my page"/>
                    </Link>
                </li>
                <li className="blockGithub">
                    <Link className="my-github" to="https://github.com/Angelina2504" target="_blank">
                        <span>Mon Github</span>
                        <img className="github-icon" src={iconGithub} alt="icon Github to visit my page" />
                    </Link>
                </li>
                <li className="theme-toggle">
                    <Classic duration={750}
                             toggled={!isDarkTheme}
                             toggle={toggleTheme}
                    />
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
