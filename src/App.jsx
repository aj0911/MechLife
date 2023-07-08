import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'

const App = () => {
  return (
    <div className="app">
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default App