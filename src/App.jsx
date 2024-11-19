import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import '../src/App.css'
import '../src/styles/themes.css';

function App() {

    return (
        <>
            <Navbar></Navbar>

            <section className="page-container">

                <Outlet/>

            </section>

            <Footer/>
        </>
    );
}

export default App;
