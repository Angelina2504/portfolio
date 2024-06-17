import '../styles/home.css';
import photoProfil from "../assets/photoProfile.png"

function HomePage() {
    return (
    <>
    <div>
    <h1>Bonjour ! Je suis Angélina Droz</h1>
    <h2>Developpeuse fullstack</h2>
    <img src={photoProfil} alt="Myself's Picture" />
    
    <p>Présentation : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vero quis sunt placeat fugit iste amet voluptatum, aspernatur veniam magni debitis necessitatibus, porro tempora voluptates fuga in, expedita dolorem reprehenderit?</p>
    <p>Formations, expérience, ambitions : Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente magnam, mollitia laudantium earum aliquam fuga quidem repellendus qui officiis repellat sunt velit odio eos reiciendis. Veritatis voluptatum possimus explicabo quia!</p>
    </div>
    </>
    );
}

export default HomePage;