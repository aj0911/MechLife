import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'

const App = () => {
  return (
    <div className="app">
        <Header/>
        <Hero/>
        <About/>
        <Footer/>
    </div>
  )
}

export default App