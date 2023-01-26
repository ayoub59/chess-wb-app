import React from 'react'
import About from "./About";
import Arcive from "./Arcive";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Log from './Log';

function Home() {
    return (
        <div>

            <div className="App">
                <Hero />
                <Log />
                <Arcive />
                <About />
                <Footer />
            </div>

        </div>
    )
}

export default Home