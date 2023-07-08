import React from 'react'
import './About.css'
import Title from '../Extra/Title/Title'
import {FiPhoneCall} from 'react-icons/fi'
import {BiSolidWallet,BiCurrentLocation} from 'react-icons/bi'
import {MdOutlineVerifiedUser} from 'react-icons/md'
import {FaTools,FaGasPump} from 'react-icons/fa'
import Process1 from '../../Assets/process-1.jpg'
import Process2 from '../../Assets/process-2.jpg'
import Process3 from '../../Assets/process-3.jpg'
import Process4 from '../../Assets/process-4.jpg'

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
  const process = [
    {
      img:Process1,
      text:'choose your service'
    },
    {
      img:Process2,
      text:'make an appointment'
    },
    {
      img:Process3,
      text:'confirm your request'
    },
    {
      img:Process4,
      text:'pick your car'
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
        <div className="workProcess">
          <div className="intro">
              <h3>How it works?</h3>
              <p>Work Process for taking full benifit of India's best car repairing online portal.</p>
          </div>
          <div className="process">
            {
              process.map((e,i)=>(
                <div className="eachProcess" key={i}>
                  <div className="top">
                    <img src={e.img} alt="" />
                  </div>
                  <div className="bottom">
                    <h4>{i+1}</h4>
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