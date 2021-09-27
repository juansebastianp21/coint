import React from 'react';
import './sidebar.scss';
import {FaTimes} from 'react-icons/fa';
import Button from '../../util/components/button/Button';

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

function Sidebar({menuOpen, setMenuOpen}) {
    return (
        <div className={`sidebarContainer ${menuOpen && `active`}`}>
            <div
                className="closeIconContainer"
                onClick={() => setMenuOpen(false)}>
                <FaTimes color={'#FFF'} />
            </div>
            <ul className="sidebarMenu">
                {navItems.map((item) => {
                    return (
                        <li onClick={() => setMenuOpen(false)}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    );
                })}
            </ul>
            <div className="buttonContainer">
                <Button>{'Sign In'}</Button>
            </div>
        </div>
    );
}

export default Sidebar;
