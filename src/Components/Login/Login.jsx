import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import MenuBar from "../MenuBar/MenuBar";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import register_image from "../Assets/LoginBackground.jpg";
import { AuthContext } from "../../AuthContext";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/login", { email, password });
            login(res.data.user, res.data.token);
            navigate("/"); // Go to LandingPage after login
        } catch (err) {
            setError("Invalid credentials");
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
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            <div className="input">
                                <img src={email_icon} alt="mail" />
                                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" required />
                            </div>
                            <div className="input">
                                <img src={password_icon} alt="pwd" />
                                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" required />
                            </div>
                        </div>
                        <div className="submitContainer">
                            <button type="submit" className="submit">
                                Login
                            </button>
                        </div>
                        {error && <div className="error-alert">{error}</div>}
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
