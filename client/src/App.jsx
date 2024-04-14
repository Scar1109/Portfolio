import React from "react";
import { Navbar, StarsCanvas, Hero, YouTube} from "./components"


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
            </div>
        </>
    );
}

export default App;
