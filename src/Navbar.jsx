import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav id="topnavbar">
            <img src='src/assets/Logo/TrueBloods_CMYK_Master.svg' id='logoNavbar' alt='Logo'></img>
            <ul id="linklist">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <li className="dropdown">
                    <Link to="/shop">Shop</Link>
                    <div className="dropdown-content">
                        <Link to="/shop/sub1">T-Shirts</Link>
                        <Link to="/shop/sub2">Hoodies</Link>
                    </div>
                </li>
                <li className="dropdown">
                    <Link to="/listen">Listen</Link>
                    <div className="dropdown-content">
                        <Link to="/listen/sub1">Submenu 1</Link>
                        <Link to="/listen/sub2">Submenu 2</Link>
                    </div>
                </li>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    )
}

export default Navbar;