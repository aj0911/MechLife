import React from 'react'
import './Appointment.css'
import Title from '../Extra/Title/Title'
import Img from '../../Assets/mercedes-3.png'

const Appointment = () => {
    const services = [
        'Tire Replacement',
        'Diagnostic',
        'Breaks',
        'Batteries',
        'Transmission'
    ]
  return (
    <div id='Appointment' className="appointment">
        <Title num={'05'} title={'Book An Appointment'}/>
        <div className="appointmentBox">
            <div className="left">
                <form action="#">
                    <input type="text" placeholder='Name' />
                    <input type="number" placeholder='Phone' />
                    <input type="email" placeholder='Email' />
                    <select>
                        <option value="0">Service Select</option>
                        {
                            services.map((e,i)=>(
                                <option value={i+1}>{e}</option>
                            ))
                        }
                    </select>
                    <textarea placeholder='Message'></textarea>
                    <input type="submit" value={'Submit'}/>
                </form>
            </div>
            <div className="right">
                <img src={Img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Appointment