import React from 'react'
import './Hero.css'
import car from '../../Assets/car.png'

const Hero = () => {
  return (
    <div id="Home" className="hero">
        <div className="left">
            <h3>100% Car Repairing Services</h3>
            <h2>Your <span>Car</span> is in the <span>Right</span> Hand</h2>
            <p>Welcome to the most trusted car repair portal of India and is visited by million of car owners every month.</p>
        </div>
        <div className="right">
            <img src={car} alt="" />
        </div>
    </div>
  )
}

export default Hero