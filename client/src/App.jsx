import React from "react";
import { Navbar, StarsCanvas, Hero, YouTube, Contact, Skills} from "./components"


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
                <Skills />
                <Contact />
            </div>
        </>
    );
}

export default App;
