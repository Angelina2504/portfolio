import iconGithub from "/src/assets/github-white.svg";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
    return (

<footer className="footer">

  <p>Copyright © 2024 Angélina Droz</p>

<div className="iconsFooter">
  <Link className="iconsGit" to="https://github.com/Angelina2504" target="_blank" ><img src={iconGithub} alt="icon Github to visit my page" /></Link>
</div>

</footer>

    )
}

export default Footer;
