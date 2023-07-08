import React from 'react'
import './Footer.css'

const Footer = () => {
    const links=[
        {
            title:'About',
            links:[
                'How it feels',
                'affiliate',
                'marketing',
                'Media'
            ]
        },
        {
            title:'Community ',
            links:[
                'Recomendation',
                'gift cards',
                'affiliates',
                'selling'
            ]
        },
        {
            title:'Services',
            links:[
                'Petrol Delivery',
                'car wash',
                'engine repairment',
                'car repairs'
            ]
        },
        {
            title:'Booking Updates',
            links:[
                'updates for covid 19',
                'help centers',
                'trust and safety',
                'garages'
            ]
        },
    ]
  return (
    <footer>
        <div className="links">
        {
            links.map((e,i)=>
                <div key={i} className="link">
                    <h2>{e.title}</h2>
                    <ul>
                        {
                            e.links.map((a,b)=>
                                <li key={b}> <a href={`#${a}`}>{a}</a></li>
                            )
                        }
                    </ul>
                </div>
            )
        }
        </div>
        <div className="copyright">
            <h3>2023. All Rights Reserved</h3>
            <h3>Administration</h3>
        </div>
    </footer>
  )
}

export default Footer