import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav id="topnavbar">
            <img src='src/assets/Logo/TrueBloods_CMYK_Master.svg' id='logoNavbar' alt='Logo'></img>
            <ul id="linklist">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/shop">SHOP</Link>
                <Link to="/listen">LISTEN</Link>
                <Link to="/contact">CONTACT</Link>
            </ul>
        </nav>
    )
}

export default Navbar;