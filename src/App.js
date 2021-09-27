import React, {useState} from 'react';

import Navbar from './components/navbar/Nabvar';
import Sidebar from './components/sidebar/Sidebar';
import Hero from './components/hero/Hero';
import Info from './components/info/Info';

// Assets
import {homeObjOne, homeObjTwo} from './components/info/data';
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
        </div>
    );
}

export default App;
