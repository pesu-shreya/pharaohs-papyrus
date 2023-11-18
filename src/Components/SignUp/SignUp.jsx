import React from "react";
import "./SignUp.css";
import MenuBar from "../MenuBar/MenuBar";
import { Link } from "react-router-dom";



import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import register_image from "../assets/LoginBackground.jpg"

const SignUp = () => {

    return (
        <>
            <MenuBar />
            <div className="layout">
                <div className="registerImage">
                    <img src={register_image} alt="login_image" />
                </div>

                <div className="container">

                    <div className="header">
                        <div className="text">Sign Up</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">

                        <div className="input">
                            <img src={user_icon} alt="user" />
                            <input type="text" placeholder="Name" />
                        </div>


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
                        Already have an account?{" "}
                        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                            <span>Login</span>
                        </Link>

                    </div>

                    <div className="submitContainer">
                        <div
                            className="submit"

                        >
                            <Link to="/login/home" style={{ textDecoration: "none", color: "white" }}>
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default SignUp;