import "../styles/navbar.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import iconLinkedinWhite from "/src/assets/icon-linkedin-white.png";
import iconLinkedinBlue from "/src/assets/icon-linkedin-blue.png";
import workInProgress from '/src/assets/enConstruction.png';
import iconGithubWhite from '../assets/github-white.svg';
import iconGithubBlack from '../assets/github-black.svg';

// Toggle theme button
import { Classic } from '@theme-toggles/react';
import "@theme-toggles/react/css/classic.css";

function Navbar({isDarkTheme, toggleTheme}) {

    return (
        <nav className="navBar">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/projects">Mes projets</Link></li>
                <li className="blockLkd">
                    <Link className="contactMe" to="https://www.linkedin.com/in/angelina-droz/" target="_blank">
                        <span>Contactez moi</span>
                        <img className={`linkedin-icon ${!isDarkTheme ? 'hidden' : 'visible'}`} src={iconLinkedinWhite} alt="icon Linkedin to visit my page"/>
                        <img className={`linkedin-icon ${isDarkTheme ? 'hidden' : 'visible'}`} src={iconLinkedinBlue} alt="icon Linkedin to visit my page"/>
                    </Link>
                </li>
                <li className="blockGithub">
                    <Link className="my-github" to="https://github.com/Angelina2504" target="_blank">
                        <span>Mon Github</span>
                        <img className={`github-icon ${!isDarkTheme ? 'hidden' : 'visible'}`} src={iconGithubWhite} alt="icon Github to visit my page" />
                        <img className={`github-icon ${isDarkTheme ? 'hidden' : 'visible'}`} src={iconGithubBlack} alt="icon Github to visit my page" />
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
                <div className={`workInProgress ${isDarkTheme ? 'span-dark-theme' : 'span-light-theme'}`}>
                    <img className="transparent" src={workInProgress} alt="work in progress"/>
                    <span className="transparent">Revenez régulièrement pour suivre les nouveautés...!</span>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    isDarkTheme: PropTypes.bool.isRequired,
    toggleTheme: PropTypes.func.isRequired
};

export default Navbar;
