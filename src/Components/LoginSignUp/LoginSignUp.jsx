import React, { useState } from "react";
import "./LoginSignUp.css";
import { Link } from "react-router-dom";



import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import register_image from "../Assets/LoginBackground.jpg"

const LoginSignUp = () => {
    const [action, setAction] = useState("Sign Up");
    const toggleAction = () => {
        setAction(action === "Login" ? "Sign Up" : "Login");
    };

    return (
        <div className="layout">
            <div className="registerImage">
                <img src={register_image} alt="login_image" />
            </div>
            <div className="fullContainer">

            </div>
            <div className="container">

                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action === "Login" ? (
                        <div></div>
                    ) : (
                        <div className="input">
                            <img src={user_icon} alt="user" />
                            <input type="text" placeholder="Name" />
                        </div>
                    )}

                    <div className="input">
                        <img src={email_icon} alt="mail" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="pwd" />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>

                {action === "Login" ? (
                    <div className="accountCheck">
                        Don't have an account?{" "}
                        <span onClick={toggleAction}>Sign Up</span>
                    </div>
                ) : (
                    <div className="accountCheck">
                        Already have an account?{" "}
                        <span onClick={toggleAction}>Login</span>
                    </div>
                )}
                <div className="submitContainer">
                    <div
                        className="submit"
                        onClick={() => {
                            setAction(action);
                        }}
                    >
                        <Link to="/login/home" style={{ textDecoration: "none", color: "white" }}>
                            {action}
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default LoginSignUp;
