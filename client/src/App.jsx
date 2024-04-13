// App.js
import React from "react";
import StarsCanvas from "./components/StarsCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
    return (
        <>
            <div>
                <StarsCanvas />
            </div>
            <div>
                <Navbar />
                <Hero />
            </div>
        </>
    );
}

export default App;
