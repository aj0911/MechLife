import React from 'react'
import './Plans.css'
import Title from '../Extra/Title/Title'
import {TiTick} from 'react-icons/ti'
import {RxCross2} from 'react-icons/rx'

const Plans = () => {
    const plan = [
        {
            name:'beginners plan',
            price:6000
        },
        {
            name:'premium plan',
            price:12000
        },
        {
            name:'ultimate plan',
            price:20000
        }
    ]
    const features = [
        'Anytime Mechanic Support',
        'petrol delivery',
        'access to community portal',
        'weekly carwash',
        'membership'
    ]
  return (
    <div id='Plans' className="plans">
        <Title num={'03'} title={'plans'}/>
        <div className="planBox">
            <div className="intro">
                <h3>Choose a Plan?</h3>
                <p>Find the perfect plan, these plans are very benificial for you in order to use unlimited services in a budget friendly amount. </p>
            </div>
            <div className="planCards">
                {
                    plan.map((e,i)=>(
                        <div className="planCard" key={i}>
                            <h3>{e.name}</h3>
                            <h2>₹{e.price}/Mo</h2>
                            <button>Choose Plan</button>
                            <ul>
                                {
                                    features.map((f,j)=>(
                                        <li key={j}>
                                            {
                                                (i<plan.length-1 && j>features.length-3+i)
                                                ?<RxCross2/>:<TiTick/>
                                            }
                                            <p>{f}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Plans