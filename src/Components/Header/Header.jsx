import React, { useRef } from 'react'
import './Header.css'
import { CgMenuGridO } from 'react-icons/cg'
import { BsCarFrontFill } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'

const Header = () => {
    const header = useRef();
    const menuClick = ()=>{
        header.current.classList.toggle('active');
    }
  return (
    <header ref={header}>
        <div className="logo">
            {
                (window.innerWidth>999)?
                <h1>Mech <span>Life</span> </h1>:
                <h1><BsCarFrontFill/></h1>
            }
        </div>
        <ul className="menus">
            <li onClick={menuClick}><a href="#Home">Home</a></li>
            <li onClick={menuClick}><a href="#About">About</a></li>
            <li onClick={menuClick}><a href="#Services">Services</a></li>
            <li onClick={menuClick}><a href="#Plans">Plans</a></li>
            <li onClick={menuClick}><a href="#Reviews">Reviews</a></li>
            <li onClick={menuClick}><a href="#Appointment">Appointment</a></li>
            <li onClick={menuClick} className="close">
                <AiFillCloseCircle/>
            </li>
        </ul>
        <div className="btns">
            <button>Register</button>
            <button>Login</button>
        </div>
        <div onClick={menuClick} className="menu">
            <CgMenuGridO/>
        </div>
    </header>
  )
}

export default Header