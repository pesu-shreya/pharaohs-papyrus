import React from "react";
import "./LandingPage.css";
import MenuBar from "../MenuBar/MenuBar";
import home_background from "../assets/LoginBackground.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <>
            <MenuBar />
            <div className="homeContainer">
                <div className="homeBackground">
                    <img src={home_background} alt="Background" />
                    <div className="overlay">
                        <div className="welcomeMessage">
                            <span>Welcome to Pharaoh's Papyrus</span>
                        </div>
                        <div className="introMessage">
                            <span>
                                Need help organizing your day? This digital planner
                                does just that!
                            </span>
                        </div>
                        <div className="submitLandingContainer">
                            <span>
                                <Link
                                    to="/signup"
                                    style={{ textDecoration: "none", color: "black" }}
                                >
                                    Get Started!
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;