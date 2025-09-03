//import logo from './Components/Assets/papyrus.jpg';
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
// import MenuBar from "./Components/MenuBar/MenuBar";
import Aboutus from "./Components/AboutUs/aboutus";
import Home from "./Components/Home/home";
import Calen from "./Components/Calendar/calendar";
import Events from "./Components/Events/Events";
import Journal from "./Components/Journal/Journal";

import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { AuthContext } from "./AuthContext";

function PrivateRoute({ children }) {
    const { user } = useContext(AuthContext);
    return user ? children : <Navigate to="/login" />;
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route
                    path="/home"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/calendar"
                    element={
                        <PrivateRoute>
                            <Calen />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/journal"
                    element={
                        <PrivateRoute>
                            <Journal />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
