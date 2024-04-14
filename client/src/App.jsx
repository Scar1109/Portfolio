import React from "react";
import { Navbar, StarsCanvas, Hero, YouTube, Contact} from "./components"


function App() {
    return (
        <>
            <div>
                <StarsCanvas />
            </div>
            <div>
                <Navbar />
                <Hero />
                <YouTube />
                <Contact />
            </div>
        </>
    );
}

export default App;
