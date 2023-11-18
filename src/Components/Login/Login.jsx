import React from "react";
import "./Login.css";
import MenuBar from "../MenuBar/MenuBar";
import { Link } from "react-router-dom";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import register_image from "../assets/LoginBackground.jpg"

const Login = () => {

    return (
        <>
            <MenuBar />
            <div className="layout">
                <div className="registerImage">
                    <img src={register_image} alt="login_image" />
                </div>

                <div className="container">

                    <div className="header">
                        <div className="text">Login</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">

                        <div className="input">
                            <img src={email_icon} alt="mail" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="pwd" />
                            <input type="password" placeholder="Password" />
                        </div>
                    </div>


                    <div className="accountCheck">
                        Dont have an account?{" "}
                        <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
                            <span>Sign Up</span>
                        </Link>

                    </div>

                    <div className="submitContainer">
                        <div
                            className="submit"

                        >
                            <Link to="/login/home" style={{ textDecoration: "none", color: "white" }}>
                                Login
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Login;