import React from 'react';
import './navbar.scss';
import Button from '../../util/components/button/Button';
import {FaBars} from 'react-icons/fa';

const navItems = [
    {
        id: 1,
        title: 'About',
        link: '#about',
    },
    {
        id: 2,
        title: 'Discover',
        link: '#about',
    },
    {
        id: 3,
        title: 'Services',
        link: '#about',
    },
    {
        id: 4,
        title: 'Sign Up',
        link: '#about',
    },
];

function Nabvar({menuOpen, setMenuOpen}) {
    return (
        <nav className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="logoContainer">
                        <a href="/" className="logo">
                            coint
                        </a>
                    </div>
                </div>
                <ul className="navItems">
                    {navItems.map((item) => {
                        return <li className="navItem">{item.title}</li>;
                    })}
                </ul>
                <div className="right">
                    <Button>{'Sign In'}</Button>
                </div>
                <div className="mobileIcon" onClick={() => setMenuOpen(true)}>
                    <FaBars />
                </div>
            </div>
        </nav>
    );
}

export default Nabvar;
