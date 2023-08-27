import React from 'react';
import './navbar.css';

function Navbar({ onSignOut }) {
    return (
        <nav className="navbar">
            <img src='https://cdn.dribbble.com/users/6569/screenshots/16482169/media/de475cb79969a810d45ba9b5d8cbf4a5.png?resize=400x0' alt="Logo" />
            <h1 className="heading">Task Manager</h1>
            <button className="sign-out-button" onClick={onSignOut}>
                Sign Out
            </button>
        </nav>
    );
}

export default Navbar;