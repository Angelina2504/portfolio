import '../styles/home.css';
import photoProfil from "../assets/photoProfile.png"
import html5 from "/src/assets/html52.svg";
import css3 from "/src/assets/css3.svg";
// import css3Html5 from "/src/assets/css3-html5.svg";
import javascript from "/src/assets/javascript-shield.svg";
import nodejs from "/src/assets/nodejs-stacked-dark.svg";
// import nodejs from "/src/assets/nodejs-stacked-light.svg";
// import react from "/src/assets/react-logo-dark.svg";
import react from "/src/assets/react-logo-light.svg";
// import express from "/src/assets/express-light.svg";
import express from "/src/assets/express-dark.svg";
import MySQL from "/src/assets/mysql.svg";

function HomePage() {
    return (

    <section className='home'>
    <h1>Bonjour ! Je suis Angélina Droz</h1>
    <h2>Developpeuse Web fullstack</h2>

    <img src={photoProfil} alt="Myself's Picture" />

    <p className='prez'>En reconversion professionnelle pour devenir développeuse web, je suis à la recherche d&apos;une alternance pour mettre en pratique mes compétences. Avant de me lancer dans le développement web, j'ai travaillé dans différents domaines tels que l'organisation de projets culturels, la librairie, la gestion d'un pressing et en tant qu'assistante d'éducation. Ces expériences m'ont permis de développer diverses compétences en gestion de projet, en organisation et en travail en équipe !</p>

    <h2 className='titleTechno'>Mes technos </h2>

<div className='frontTechno'>
    <div className='iconFrontTechno'>
        <div className='circle'>
            <img className='T1' src={html5} alt="icon html5" />
        </div>
        <div className='circle'>
            <img className="T2" src={css3} alt="icon css3" />
        </div>
        <div className='circle'>
            <img className="T3" src={javascript} alt="javascript" />
        </div>
        <div className='circle'>
            <a className='transparent' href='https://react.dev' target='_blank'>
                <img className="T4" src={react} alt="react" />
            </a>
        </div>
     </div>
</div>
<div className='backTechno'>
    <div className='iconBackTechno'>
        <div className="circle circ-B1">
            <a className="transparent" href="https://nodejs.org" target="_blank">
                <img className="B1" src={nodejs} alt="icon node.js"/>
            </a>
        </div>
        <div className="circle circ-B2">
            <a className="transparent" href="https://expressjs.com" target="_blank">
                <img className="B2" src={express} alt="icon Express"/>
            </a>
        </div>
        <div className="circle circ-B3">
            <a className="transparent" href="https://mysql.com" target="_blank">
                <img className="B3" src={MySQL} alt="MySQL"/>
            </a>
        </div>
    </div>
</div>

    </section>


);
}

export default HomePage;
