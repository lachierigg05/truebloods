import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav id="topnavbar">
            <ul id="linklist">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/shop">SHOP</Link>
                <Link to="/listen">LISTEN</Link>
                <Link to="/contact">CONTACT</Link>
            </ul>
            <div id="logoList"> 
                <a href="https://open.spotify.com/show/37RysKUkNmedH0fI1TPYDl">
                    <img
                    src="src/assets/Spotify_Primary_Logo_RGB_Black.png"
                    alt="SpotifyLogo"
                    className="logoListLogo"
                    id="spotifyLogo"
                    />
                </a>
                <a href="https://www.facebook.com/TrueBloodsPod">
                    <img
                    src="src/assets/icons8-facebook-500.png"
                    alt="FacebookLogo"
                    className="logoListLogo"
                    />
                </a>
            </div>   
        </nav>
    )
}

export default Navbar;