import React from 'react';
import './LandingPage.css';
import home_background from '../Assets/LoginBackground.jpg';

const LandingPage = () => {
    return (
        <div className='homeContainer'>
            <div className='homeBackground'>
                <img src={home_background} alt='Background' />
                <div className='overlay'>
                    <div className='welcomeMessage'>
                        <span>Welcome to Pharaoh's Papyrus</span>
                    </div>
                    <div className='introMessage'>
                        <span>Need help organizing your day? This digital planner does just that!</span>
                    </div>
                    <div className='submitContainer'>
                        <span>Get Started!</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
