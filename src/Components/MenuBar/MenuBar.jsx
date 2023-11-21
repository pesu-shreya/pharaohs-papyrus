import React from "react";
import "./MenuBar.css";
import website_logo from "../Assets/pharaoh.png";
import { Link, useNavigate } from "react-router-dom";



const MenuBar = () => {
    const navigate = useNavigate();

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
            </div>
        </div >
    );
};

export default MenuBar;
