import React, { useState } from 'react'
import './navbar.css';
import logo from '../../../Assets/logo.png'

import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link, animateScroll as scroll, } from 'react-scroll'

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const showNavbar = () => {
    setActive('navBar activeNavbar')
  }
  const removeNavbar = () => {
    setActive('navBar')
  }

  const [transparent, setTransparent] = useState('header');
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader');
    }
    else {
      setTransparent('header');
    }
  }
  window.addEventListener('scroll', addBg);
  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className='logo'>
            <img
              src={logo}
            
            />
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
            <Link className="navLink" to="home" smooth={true} duration={500}>Home</Link>
              
            </li>
            <li className="navItem">
            <Link className="navLink" to="firmaUrunleri" smooth={true} offset={-15} duration={500}>Products</Link>
          
            </li>
            <li className="navItem">
            <Link className="navLink" to="about" smooth={true} offset={-50} duration={500}>About</Link>
            
            </li>

            <li className="navItem">
            <Link className="navLink" to="iletisim" smooth={true} offset={-50} duration={500}>Contact</Link>
      
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Ecommerce</a>
            </li>
            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="#">Login</a>
              </button>
              <button className="btn loginBtn">
                <a href="#">Sing Up</a>
              </button>
            </div>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar"><AiFillCloseCircle className='icon' /></div>
        </div>
        <div onClick={showNavbar} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  )
}

export default Navbar

