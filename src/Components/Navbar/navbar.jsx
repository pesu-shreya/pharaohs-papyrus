import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <div className='nav'>
        <span className='PPnav'><Link to='/' style={{ textDecoration: "none", color: "black" }}>Pharaoh's Papyrus</Link></span>

        <button className='Login'><Link to='/login' style={{ textDecoration: "none", color: "blue" }}>Log In</Link></button>
        <button className='Signup'><Link to='/signup' style={{ textDecoration: "none", color: "white" }}>Sign Up</Link></button>
      </div>
    </>
  )
}

export default Navbar
