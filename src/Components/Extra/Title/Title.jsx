import React, { useRef } from 'react'
import './Title.css'

const Title = ({num,title}) => {
  return (
    <div className="title">
        <h3>{num} .</h3>
        <div className="name">
            <h3>{title}</h3>
            <div className="underline"></div>
        </div>
    </div>
  )
}

export default Title