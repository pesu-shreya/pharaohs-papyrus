import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import MenuBar from "../MenuBar/MenuBar";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import register_image from "../Assets/LoginBackground.jpg";

function SignUp() {
    const navigate = useNavigate();

    const [userName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/signup", {
                userName, email, password
            });

            if (response.data === 'exists') {
                alert("User already exists!");
            }
            else if (response.data === 'noexist') {
                navigate('/login/home', { state: { id: email } });
            }
        } catch (error) {
            alert("Error occurred while signing up!");
            console.error(error);
        }
    }

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

                    <form action="POST">
                        <div className="inputs">
                            <div className="input">
                                <img src={user_icon} alt="user" />
                                <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Name" />
                            </div>

                            <div className="input">
                                <img src={email_icon} alt="mail" />
                                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                            </div>

                            <div className="input">
                                <img src={password_icon} alt="pwd" />
                                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                            </div>
                        </div>

                        <div className="submitContainer">
                            <div className="submit">
                                <button type="submit" onClick={submit} className="submit">
                                    <span>Sign Up</span>
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="accountCheck">
                        Already have an account?{" "}
                        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                            <span>Login</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
