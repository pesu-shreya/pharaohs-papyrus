import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./MenuBar.css";
import website_logo from "../Assets/pharaoh.png";

function MenuBar() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
        window.location.reload(); // Prevents back navigation to protected pages
    };

    return (
        <div className="menu">
            <div className="websiteName">
                <pre className="textWebsite">Pharaoh's Papyrus</pre>
                <div className="underlined"></div>
            </div>

            <div className="menuIcons">
                <div className="homeLogo">
                    <img src={website_logo} alt="logo" />
                    <button className="homeText" onClick={() => navigate(-1)}>
                        Home
                    </button>
                </div>
                <div className="aboutUs">
                    <span><Link to="/about" style={{ textDecoration: "none", color: "bisque" }}>
                        About Us
                    </Link>
                    </span>
                </div>
                <button className="signout-btn" onClick={handleLogout}>Sign Out</button>
            </div>
        </div >
    );
}

export default MenuBar;
