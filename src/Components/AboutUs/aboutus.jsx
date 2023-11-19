import React from 'react'
import './aboutus.css'
import Navbar from '../Navbar/navbar'
import planner from '../assets/planner.png'
import calendar from '../assets/calendar.png'
import bg from '../assets/aboutusBG.png'

function Aboutus() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <img className='bg' src={bg} alt="pyramid" />
        <div className='abt'>
          <h1 id='About'>About Us</h1>
          <img id='plnr' src={planner} alt="planner" />
          <p className='abtp'>Welcome to Pharaoh's Papyrus, where organization meets simplicity! We are your dedicated online planning platform,
            committed to making every day a breeze. Whether you're a busy professional, a student with a hectic schedule, or just someone looking to streamline their life, we've got you covered.
            Our user-friendly interface empowers you to effortlessly plan your day, week, or month with ease.
            From scheduling important meetings to setting personal goals, our platform is designed to help you stay on top of your game.
            Join us on this journey of efficient planning, and let's make every moment count!
          </p>
        </div>

        <div className='feat'>
          <h1 id='Features'>Features</h1>
          <img id='clndr' src={calendar} alt="calendar" />
          <p className='featp'>Discover the key features that set Pharaoh's Papyrus apart as your ultimate planning companion.
            Our intuitive and user-friendly interface ensures a seamless planning experience, allowing you to effortlessly schedule events, set reminders, and manage tasks with just a few clicks.
            With customizable calendar views, you can tailor your planning to suit your unique needs, whether it's daily routines, weekly goals, or monthly milestones.
          </p>
        </div>
      </div>
    </>
  )
}

export default Aboutus
