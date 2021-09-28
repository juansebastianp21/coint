import React, {useState} from 'react';

import Navbar from './components/navbar/Nabvar';
import Sidebar from './components/sidebar/Sidebar';
import Hero from './components/hero/Hero';
import Info from './components/info/Info';
import Services from './components/services/Services';

// Assets
import {homeObjOne, homeObjTwo, homeObjThree} from './components/info/data';
// import {BrowserRouter as Router} from 'react-router-dom';
import './app.scss';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="app">
            <Sidebar {...{menuOpen, setMenuOpen}} />
            <Navbar {...{menuOpen, setMenuOpen}} />
            <Hero />
            <Info {...homeObjOne} />
            <Info {...homeObjTwo} />
            <Services />
            <Info {...homeObjThree} />
        </div>
    );
}

export default App;
