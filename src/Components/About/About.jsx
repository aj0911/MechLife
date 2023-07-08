import React from 'react'
import './About.css'
import Title from '../Extra/Title/Title'
import {FiPhoneCall} from 'react-icons/fi'
import {BiSolidWallet,BiCurrentLocation} from 'react-icons/bi'
import {MdOutlineVerifiedUser} from 'react-icons/md'
import {FaTools,FaGasPump} from 'react-icons/fa'

const About = () => {
  const cards = [
    {
      icon:()=><FiPhoneCall/>,
      title:'Customer Support',
      text:'Find our top quality services we offer to our dear client over time.'
    },
    {
      icon:()=><BiSolidWallet/>,
      title:'Best Prices',
      text:'Find our top quality services we offer to our dear client over time.'
    },
    {
      icon:()=><MdOutlineVerifiedUser/>,
      title:'Verified Car Mechanics',
      text:'Find our top quality services we offer to our dear client over time.'
    },
    {
      icon:()=><BiCurrentLocation/>,
      title:'Many Locations',
      text:'Find our top quality services we offer to our dear client over time.'
    },
    {
      icon:()=><FaTools/>,
      title:'Best Equipments',
      text:'Find our top quality services we offer to our dear client over time.'
    },
    {
      icon:()=><FaGasPump/>,
      title:'Petrol Delivery',
      text:'Find our top quality services we offer to our dear client over time.'
    },
  ]
  return (
    <div id='About' className="about">
        <Title num={'01'} title={'About Our Company'}/>
        <div className="aboutBox">
          <div className="intro">
            <h3>Why Choose Us?</h3>
            <p>Find our top quality services we offer to our dear client over time.</p>
          </div>
          <div className="cards">
            {
              cards.map((e,i)=>(
                <div className="card" key={i}>
                  <div className="left">{e.icon()}</div>
                  <div className="right">
                    <h4>{e.title}</h4>
                    <p>{e.text}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default About