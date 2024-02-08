import React ,{useState}from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Button } from 'react-bootstrap'

const NavBar = () => {
    const [showAccount, setShowAccount] = useState(false)

    const handleAccountClick = () => {
        setShowAccount(!showAccount)
    }
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary px-5 shadow sticky-top '>
        <div className='container-fluid'>
            <img src={Logo} alt="logo here" className='logo'/>
            <Link to={"/"} className='link'>
                <h4 className='logo-text'>CRYSTAL<br /><span className='logo-text2'> Animal Hospital</span></h4>
            </Link>
            <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
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
                        <NavLink className='nav-link' aria-current='page' to={"/products/product/types"}>Shop</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/contact-form"}>Contact</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/testimonials"}>Testimonials</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/admin"}>Admin</NavLink>
                    </li>
                </ul>

                <ul className ='d-flex navbar-nav'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to={"/appointment-form"}>
                        <Button variant="outline-success" className='login'>
                            Make An Appointment
                        </Button>
                        </NavLink>
                    </li>
                    <li className='nav-item dropdown'>
                        <a
                            className={`nav-link dropdown-toggle ${showAccount ? "show":""}`}
                            href='#'
                            role='button'
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            onClick={handleAccountClick}
                        >{" "}Account</a>
                        <ul
                            className={`dropdown-menu ${showAccount ? "show":""}`}
                            aria-labelledby='navbarDropdown'
                        >
                            <li>
                                <Link to={"/login"} className="dropdown-item">Log In</Link>
                            </li>
                            <li>
                                <Link to={"/profile"} className="dropdown-item">Profile</Link>
                            </li>
                            <li>
                                <Link to={"/logout"} className="dropdown-item">Log Out</Link>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>

        </div>
    </nav>
  )
}

export default NavBar