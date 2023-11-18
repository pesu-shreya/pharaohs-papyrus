//import logo from './Components/Assets/papyrus.jpg';
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
// import MenuBar from "./components/MenuBar/MenuBar";
import Aboutus from "./components/AboutUs/aboutus";
// import Home from "./components/Home/home";

// import Temp from "./components/temp";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                {/* <MenuBar /> */}
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/about" element={<Aboutus />} />
                    {/* <Route path='/home' element={<Home/>}/> */}

                    {/* <Route path="/login/home" element={<Temp />} /> */}
                </Routes>
            </div>
        </Router>
    );
}
export default App;
