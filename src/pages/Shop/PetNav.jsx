import React from 'react'
import { NavLink } from 'react-router-dom'

const PetNav = () => {
  return (
    <div>
        <div className='collapse navbar-collapse ' id='navbarScroll'>
                <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/"}>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/about-us"}>About Us</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/hospital-services"}>Services</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/shop"}>Shop</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/contact-form"}>Contact</NavLink>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default PetNav