import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import MenuBar from "../MenuBar/MenuBar";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import person_icon from "../Assets/person.png";
import register_image from "../Assets/LoginBackground.jpg";
import { AuthContext } from "../../AuthContext";

function SignUp() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.password) {
            setError("Please fill all fields.");
            return;
        }
        try {
            const res = await axios.post("/signup", form);
            login(res.data.user, res.data.token);
            navigate("/");
        } catch (err) {
            setError(
                err.response?.data?.error
                    ? err.response.data.error
                    : "Signup failed"
            );
        }
    };

    return (
        <>
            <MenuBar />
            <div className="layout">
                <div className="registerImageSignUp">
                    <img src={register_image} alt="signup_image" />
                </div>
                <div className="container">
                    <div className="header">
                        <div className="text">Sign Up</div>
                        <div className="underline"></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            <div className="input">
                                <img src={person_icon} alt="person" />
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={form.name}
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="input">
                                <img src={email_icon} alt="mail" />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="input">
                                <img src={password_icon} alt="pwd" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={form.password}
                                    onChange={e => setForm({ ...form, password: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className="submitContainer">
                            <button type="submit" className="submit">
                                Sign Up
                            </button>
                        </div>
                        {error && <div className="error-alert">{error}</div>}
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
