import iconGithubWhite from "/src/assets/github-white.svg";
import iconGithubBlack from "/src/assets/github-black.svg";
import iconLinkedInWhite from "/src/assets/icon-linkedin-white.png";
import iconLinkedInBlue from "/src/assets/icon-linkedin-blue.png";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import PropTypes from 'prop-types';

function Footer({isDarkTheme}) {
    console.log("Footer isDarkTheme:", isDarkTheme);
    return (

        <footer className="footer">
            <div className="iconsFooter">
            <span>Copyright © 2024 Angélina Droz</span> |
                <Link className="icons-links" to="https://www.linkedin.com/in/angelina-droz/" target="_blank">
                    <span>Mon LinkedIn</span>
                    <img className={`icons-img ${!isDarkTheme ? ' hidden' : ' visible'}`} src={iconLinkedInWhite} alt="icon Github to visit my page" />
                    <img className={`icons-img ${isDarkTheme ? 'hidden' : 'visible'}`} src={iconLinkedInBlue} alt="icon Github to visit my page" />
                </Link> |
                <Link className="icons-links" to="https://github.com/Angelina2504" target="_blank">
                    <span>Mon Github</span>
                    <img className={`icons-img ${!isDarkTheme ? 'hidden' : 'visible'}`} src={iconGithubWhite} alt="icon LinkedIn to visit my LinkedIn" />
                    <img className={`icons-img ${isDarkTheme ? 'hidden' : 'visible'}`} src={iconGithubBlack} alt="icon LinkedIn to visit my LinkedIn" />
                </Link>
            </div>

        </footer>

    )
}

Footer.propTypes = {
    isDarkTheme: PropTypes.bool.isRequired
};

export default Footer;
