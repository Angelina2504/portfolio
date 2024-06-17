import iconGithub from "/src/assets/icon-github.png";
import iconLinkedin from "/src/assets/icon-linkedin.png";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
    return (
<>
<section className="footer">

  <p>Copyright © 2024 Angélina Droz</p>
<div className="iconsFooter">
  <Link href="https://github.com/Angelina2504" ><img src={iconGithub} alt="icon Github to visit my page" /></Link>
  <Link href="https://www.linkedin.com/in/angelina-droz/"><img src={iconLinkedin} alt="icon Linkedin to visit my page" /></Link> 
</div>
</section>
</>
    )
}

export default Footer;