import React from 'react'
import './sidebar.css'
import add from '../assets/add.png'
import cal from '../assets/cal.png'
import inf from '../assets/inf.png'
import out from '../assets/out.png'
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <div className='sidebar'>
                <div className='item'>
                    <span id='add'>
                        <img src={add} alt='plus' />
                        Add Event
                    </span>
                </div>
                <div className='item'>
                    <Link to="/login/home/calendar" style={{ textDecoration: "none", color: "black" }}>
                        <span id='cal'>
                            <img src={cal} alt='calendar' />
                            Calendar
                        </span>
                    </Link>

                </div>
                <div className='item'>
                    <Link to="/login/home/about" style={{ textDecoration: "none", color: "black" }}>
                        <span id='info'>
                            <img src={inf} alt='About' />
                            About Us
                        </span>
                    </Link>

                </div>
                <div className='item'>
                    <script>
                        function
                    </script>
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <span id='out' onClick={() => { alert("You are signing out") }}>
                            <img src={out} alt='Leave' />
                            Sign Out
                        </span>

                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar
