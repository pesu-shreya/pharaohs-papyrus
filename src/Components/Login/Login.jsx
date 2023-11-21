import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import MenuBar from "../MenuBar/MenuBar";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import register_image from "../Assets/LoginBackground.jpg";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3000/login", {
                email,
                password
            });

            if (res.data === 'exists') {
                navigate('/login/home', { state: { id: email } });
            } else if (res.data === 'noexist') {
                alert("User does not exist! Please sign up to access Pharaoh's Papyrus.");
            }
        } catch (err) {
            alert("Wrong details entered!");
            console.error(err);
        }
    }

    return (
        <>
            <MenuBar />
            <div className="layout">
                <div className="registerImageLogin">
                    <img src={register_image} alt="login_image" />
                </div>

                <div className="container">
                    <div className="header">
                        <div className="text">Login</div>
                        <div className="underline"></div>
                    </div>
                    <form onSubmit={submit}>
                        <div className="inputs">
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
                            <button type="submit" className="submit">
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="accountCheck">
                        Don't have an account?{" "}
                        <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
                            <span>Sign Up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
