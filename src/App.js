//import logo from './Components/Assets/papyrus.jpg';
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
// import MenuBar from "./Components/MenuBar/MenuBar";
import Aboutus from "./Components/AboutUs/aboutus";
import Home from "./Components/Home/home";
import Calen from "./Components/Calendar/calendar";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/about" element={<Aboutus />} />
                    {/* <Route path="/home" element={<Home />} /> */}
                    <Route path="/login/home/" element={<Home />} />
                    <Route path="login/home/calendar" element={<Calen />} />
                    <Route path="login/home/about" element={<Aboutus />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;
