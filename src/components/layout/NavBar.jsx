import React ,{useState}from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-router-dom'

const NavBar = () => {
    const [showAccount, setShowAccount] = useState(false)

    const handleAccountClick = () => {
        setShowAccount(!showAccount)
    }
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary px-5 shadow sticky-top'>
        <div className='container-fluid'>
            <Link to={"/"}>
                <span className='product-color'>Crystal Animal Hospital</span>
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
            <div className='collapse navbar-collapse' id='navbarScroll'>
                <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/"}>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/browse-all-products"}>About Us</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/hospital-services"}>Services</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/browse-all-products"}>Shop</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/appointment-form"}>Contact</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/admin"}>Admin</NavLink>
                    </li>
                </ul>

                <ul className ='d-flex navbar-nav'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to={"/find-product"}>
                            Find my Product
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