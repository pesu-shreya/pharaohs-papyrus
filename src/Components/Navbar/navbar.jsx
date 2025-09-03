import React, { useContext } from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext";


function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className='nav'>
      <span className='PPnav'>
        <Link to='/' style={{ textDecoration: "none", color: "black" }}>
          Pharaoh's Papyrus
        </Link>
      </span>
      {!user && (
        <>
          <button className='Login'>
            <Link to='/login' style={{ textDecoration: "none", color: "blue" }}>Log In</Link>
          </button>
          <button className='Signup'>
            <Link to='/signup' style={{ textDecoration: "none", color: "white" }}>Sign Up</Link>
          </button>
        </>
      )}
    </div>
  );
}

export default Navbar;
