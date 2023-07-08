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
    const active = (e)=>{
        const list = header.current.childNodes[1].childNodes;
        for(let i=0;i<list.length;i++){
            list[i].classList.remove('active');
        }
        e.classList.add('active');
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
            <li onClick={(e)=>active(e.currentTarget)}><a href="#Home">Home</a></li>
            <li onClick={(e)=>active(e.currentTarget)}><a href="#About">About</a></li>
            <li onClick={(e)=>active(e.currentTarget)}><a href="#Services">Services</a></li>
            <li onClick={(e)=>active(e.currentTarget)}><a href="#Plans">Plans</a></li>
            <li onClick={(e)=>active(e.currentTarget)}><a href="#Reviews">Reviews</a></li>
            <li onClick={(e)=>active(e.currentTarget)}><a href="#Appointment">Appointment</a></li>
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