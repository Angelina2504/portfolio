
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar"

function App() {
    return (
        <>
        <nav> 
            <Navbar></Navbar>
        </nav>
        <main>
         <Outlet/>
        </main>
        </>
    );
}

export default App;