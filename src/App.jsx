import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import '../src/App.css'
import '../src/styles/themes.css';
import {useState} from 'react';

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.documentElement.className = isDarkTheme ? 'light-theme' : 'dark-theme';
    };
    return (
        <>
            <Navbar isDarkTheme={isDarkTheme}
                    toggleTheme={toggleTheme}
            />

            <section className="page-container">

                <Outlet/>

            </section>

            <Footer isDarkTheme={isDarkTheme} />
        </>
    );
}

export default App;
