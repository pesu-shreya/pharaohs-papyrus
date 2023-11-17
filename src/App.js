//import logo from './Components/Assets/papyrus.jpg';
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import LoginSignUp from "./Components/LoginSignUp/LoginSignUp";
import MenuBar from "./Components/MenuBar/MenuBar";
import Temp from "./Components/temp";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <MenuBar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginSignUp />} />
                    <Route path="/login/home" element={<Temp />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;
