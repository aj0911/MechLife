import React, { useState } from 'react'
import Title from '../Extra/Title/Title'
import './Services.css'
import {GiCarWheel} from 'react-icons/gi'
import {AiFillProject} from 'react-icons/ai'
import {FaCarBattery} from 'react-icons/fa'
import {GrSettingsOption} from 'react-icons/gr'
import tyre1 from '../../Assets/tyre-1.jpeg'
import tyre2 from '../../Assets/tyre-2.jpeg'
import tyre3 from '../../Assets/tyre-3.jpeg'
import diagnost1 from '../../Assets/diagnost-1.jpg'
import battery1 from '../../Assets/battery-1.jpg'
import battery2 from '../../Assets/battery-2.jpg'
import diagnost2 from '../../Assets/diagnost-2.png'
import engine1 from '../../Assets/engine-1.jpg'
import engine2 from '../../Assets/engine-2.jpg'
import engine3 from '../../Assets/engine-3.jpg'

const Services = () => {
    const services = [
        {
            icon:()=><GiCarWheel/>,
            text:'Tires replacement',
            collection:[
                {
                    img:tyre1,
                    name:'Jk Tyre Tornado',
                    price:'₹2450'
                },
                {
                    img:tyre2,
                    name:'MRF JEC',
                    price:'₹2090'
                },
                {
                    img:tyre3,
                    name:'Apollo Amazer',
                    price:'₹3200'
                },
            ]
        },
        {
            icon:()=><AiFillProject/>,
            text:'Diagnostic',
            collection:[
                {
                    img:diagnost1,
                    name:'Engine Checking',
                    price:'₹5450'
                },
                {
                    img:diagnost2,
                    name:'Full Service',
                    price:'₹8050'
                }
            ]
        },
        {
            icon:()=><FaCarBattery/>,
            text:'Batteries',
            collection:[
                {
                    img:battery1,
                    name:'Car Battery',
                    price:'₹3250'
                },
                {
                    img:battery2,
                    name:'Exide Mileage 35Ah ',
                    price:'₹3450'
                }
            ]
        },
        {
            icon:()=><GrSettingsOption/>,
            text:'Engine Repair',
            collection:[
                {
                    img:engine1,
                    name:'Van Engine Repair Service',
                    price:'₹2000'
                },
                {
                    img:engine2,
                    name:'Car Engine Repair Service',
                    price:'₹60000'
                },
                {
                    img:engine3,
                    name:'Car Engine Repair Service',
                    price:'₹32000'
                },
            ]
        },
    ]

    const [servicePlans,setServicePlans] = useState(services[0].collection)
  return (
    <div id='Services' className="services">
        <Title num = {'02'} title={'Services Package'}/>
        <div className="serviceBox">
            <div className="intro">
                <h3>Popular Services for Car</h3>
                <p>Welcome to the most trusted car repair portal of India and is visited by million of car owners every month.</p>
            </div>
            <div className="pannels">
            {
                services.map((e,i)=>(
                    <div key={i} onClick={()=>setServicePlans(e.collection)} className="service">
                        {e.icon()}
                        <h3>{e.text}</h3>
                    </div>
                ))
            }
            </div>
            <div className="servicePrice">
            {
                servicePlans.map((e,i)=>(
                    <div key={i} className="card">
                        <div className="top">
                            <img src={e.img} alt="" />
                        </div>
                        <div className="bottom">
                            <h3>{e.name}</h3>
                            <div className="cardButton">
                                <h5>{e.price}</h5>
                                <button>Details</button>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            
        </div>
    </div>
  )
}

export default Services