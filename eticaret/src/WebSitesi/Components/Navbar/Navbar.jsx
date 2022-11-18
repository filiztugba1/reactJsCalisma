import React, { useState } from 'react'
import './navbar.css';
import logo from '../../../Assets/logo.png'

import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link as LinkScroll, animateScroll as scroll, } from 'react-scroll'


import { Link as LinkRouter } from 'react-router-dom';
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
              <LinkScroll className="navLink" to="home" smooth={true} duration={500}>Home</LinkScroll>
            </li>
            <li className="navItem">
              <LinkScroll className="navLink" to="firmaUrunleri" smooth={true} offset={-15} duration={500}>Products</LinkScroll>
            </li>
            <li className="navItem">
              <LinkScroll className="navLink" to="about" smooth={true} offset={-50} duration={500}>About</LinkScroll>
            </li>
            <li className="navItem">
              <LinkScroll className="navLink" to="iletisim" smooth={true} offset={-50} duration={500}>Contact</LinkScroll>
            </li>
            <li className="navItem">
              <LinkRouter className="navLink" to="/ecommerce">Ecommerce</LinkRouter>
            </li>
            <div className="headerBtns flex">
              <LinkRouter className="btna" to="/login">
                <button className="btn loginBtn">
                  Login

                </button>
              </LinkRouter>
              <LinkRouter className="btna" to="/singup">
                <button className="btn loginBtn">
                  Sing Up
                </button>
              </LinkRouter>
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

