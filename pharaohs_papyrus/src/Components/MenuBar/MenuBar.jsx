import React from "react";
import "./MenuBar.css";
import website_logo from "../Assets/pharaoh.png";

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
                        <span>Home</span>
                    </div>
                </div>
                <div className="aboutUs">
                    <span>About Us</span>
                </div>
            </div>
        </div> 
    );
};

export default MenuBar;
