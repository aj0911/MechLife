import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Plans from './Components/Plans/Plans'
import Review from './Components/Reviews/Review'
import Appointment from './Components/Appointment/Appointment'

const App = () => {
  return (
    <div className="app">
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <Plans/>
        <Review/>
        <Appointment/>
        <Footer/>
    </div>
  )
}

export default App