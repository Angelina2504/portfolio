import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import '../src/App.css'

function App() {
    return (
        <>
        <nav> 
            <Navbar></Navbar>
        </nav>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    );
}

export default App;