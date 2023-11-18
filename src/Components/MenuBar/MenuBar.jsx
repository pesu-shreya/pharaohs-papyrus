import React from "react";
import "./MenuBar.css";
import website_logo from "../assets/pharaoh.png";
import { Link } from "react-router-dom";

const MenuBar = () => {
    return (
        <div className="menu">
            <div className="websiteName">
                <pre className="textWebsite">Pharaoh's Papyrus</pre>
                <div className="underlined"></div>
            </div>

            <div className="menuIcons">
                <div className="homeLogo">
                    <img src={website_logo} alt="logo" />
                    <div className="homeText">
                        <span><Link to='/land' style={{ textDecoration: "none", color: "bisque" }}>Home</Link></span>
                    </div>
                </div>
                <div className="aboutUs">
                    <span><Link  to="/about" style={{ textDecoration: "none", color: "bisque" }}>
                        About Us
                        </Link>
                    </span>
                </div>
            </div>
        </div> 
    );
};

export default MenuBar;
