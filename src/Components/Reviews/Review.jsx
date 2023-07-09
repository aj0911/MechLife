import React, { useState } from 'react'
import './Review.css'
import Title from '../Extra/Title/Title'
import client1 from '../../Assets/client-1.jpeg'
import client2 from '../../Assets/client-2.png'
import client3 from '../../Assets/client-3.png'
import { BsCircleFill } from 'react-icons/bs'

const Review = () => {
    const clients=[
        {
            img:client1,
            name:'Jimmy Alex',
            review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium debitis eius optio modi expedita.'
        },
        {
            img:client2,
            name:'Kane Williamson',
            review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium debitis eius optio modi expedita.'
        },
        {
            img:client3,
            name:'David Warner',
            review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium debitis eius optio modi expedita.'
        }
        
    ]
    const [page,setPage]=useState(1);
  return (
    <div className="review" id='Reviews'>
        <Title num={'04'} title={'Clients Reviews'}/>
        <div className="reviewBox">
            <div className="intro">
                <h3>Top Customer Reviews</h3>
                <p>Welcome to the most trusted car repair portal of India and is visited by million of car owners every month.</p>
            </div>
            <div className="slider">
                <button style={{visibility:((page<=1)?'hidden':'visible')}} onClick={()=>setPage(page-1)}>{'<'}</button>
                <div className="clients">
                {
                    clients.map((e,i)=>(
                        <div style={{left:`${(page-i-1)*100}%`}} key={i} className="client">
                            <img src={e.img} alt="" />
                            <h3>{e.name}</h3>
                            <p>"{e.review}"</p>
                        </div>
                    ))
                }
                </div>
                <button style={{visibility:(page<clients.length)?'visible':'hidden'}} onClick={()=>setPage(page+1)}>{'>'}</button>
            </div>
            <div className="dots">
                {
                    clients.map((e,i)=>(
                        <BsCircleFill onClick={()=>setPage(i+1)} style={{color:(i==page-1)?'var(--mainColor)':'var(--menuColor)',transition:'var(--transition)'}} key={i}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Review