import React ,{useState}from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Button } from 'react-bootstrap'

const NavBar = () => {
    const userType = sessionStorage.getItem('role')
    const [showAccount, setShowAccount] = useState(false)
    
    const handleAccountClick = () => {
        setShowAccount(!showAccount)
    }

    const [showAdmin, setshowAdmin] = useState(false)

    const handleAdminClick = () => {
        setshowAdmin(!showAdmin)
    }
    const logout = () => {
        sessionStorage.clear();
        window.location.href = "/login";
      };


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
                        <NavLink className='nav-link' aria-current='page' to={"/products/all-products"}>Shop</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/contact-form"}>Contact</NavLink>
                    </li>
                    {userType === 'ADMIN' && (
                    <div>
                    <li className='nav-item dropdown'>
                        <a
                            className={`nav-link dropdown-toggle ${showAdmin ? "show":""}`}
                            href='#'
                            role='button'
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            onClick={handleAdminClick}
                        >{" "}Admin</a>
                        <ul
                            className={`dropdown-menu ${showAdmin ? "show":""}`}
                            aria-labelledby='navbarDropdown'
                        >
                            <li>
                                <Link to={"/add-product"} className="dropdown-item">Add Products</Link>
                            </li>
                            <li>
                                <Link to={"/existing-products"} className="dropdown-item">View or Delete Products</Link>
                            </li>
                            <li>
                                <Link to={"/book-appointment"} className="dropdown-item">Make Appointments</Link>
                            </li>
                            <li>
                                <Link to={"/existing-appointments"} className="dropdown-item">View Appointments</Link>
                            </li>
                        </ul>
                    </li>
                    </div> )}
                    {userType === 'CLIENT' && (
                    <div>
                         <li className='nav-item'>
                        <NavLink className='nav-link' aria-current='page' to={"/pet"}>Pets</NavLink>
                    </li>
                    </div>)}
                </ul>

                <ul className ='d-flex navbar-nav'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to={"/book-appointment"}>
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
                                <Link className="dropdown-item" onClick={logout}>Log Out</Link>
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