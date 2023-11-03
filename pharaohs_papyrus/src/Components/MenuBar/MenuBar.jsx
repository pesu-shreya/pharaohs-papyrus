import React from 'react'
import './MenuBar.css';
import website_logo from '../Assets/pharaoh.png'

const MenuBar = () => {
    return (
        <div className="menu">
            <div className="websiteName">
                <div className='websiteLogo'></div>
                <pre className='textWebsite'>Pharaoh's   Papyrus</pre>
            </div>

            <div className="menuIcons">
                <div className="homeLogo">
                    <img src={website_logo} alt="logo" />
                </div>
                <div className="homeText"><span>Home</span></div>
                <div className="aboutUs"><span>About Us</span></div>
            </div>
        </div>
    )
}

export default MenuBar;