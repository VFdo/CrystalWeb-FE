import React from 'react'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import {Link} from 'react-router-dom'
import logo from '../assets/veterinarian.png'



const header = () => {
  return <>
    <header className='header-top-strip p-0 shadow-sm'>
        <div className="container-xxl">
            <div className="row d-flex align-items-center">
                <div className="col-6">
                    <p>The best Animal Hospital for your companion</p>
                </div>
                <div className="col-6 d-flex justify-content-between">
                    <div>
                        <a href="tel : +94 76 7022 508">Call Us +94 76 7022508</a>
                    </div>
                    <div>
                        <Link><BiSolidPhoneCall className='fs-5 mx-4'/></Link>
                        <Link><MdEmail className='fs-5 mx-4'/></Link>
                    </div>
                </div>
            </div>
        </div>

    </header>
    <header className='header-upper shadow-sm'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-4 d-flex align-items-center">
                    <Link to='/'><img src={logo} alt="logo" className='img-fluid logo'/></Link>
                    <Link to='/'><h4 className='logo-text'><span>Crystal</span> Animal Hospital</h4></Link>
                    
                </div>
               
                <div className="nav-links col-4 d-flex align-items-center justify-content-between">
                    <Link  to={'/'}>Home</Link>
                    <Link  to={'about'}>About</Link>
                    <Link  to={'services'}>Services</Link>
                    <Link  to={'shop'}>Shop</Link>
                    <Link  to={'contact'}>Contact Us</Link>
                </div>
                <div className="col-2"></div>
                <div className="col-2 d-flex align-items-center justify-content-between">
                    <button className='button1'>Log In</button>
                    <button className='button2'>Sign Up</button>

                </div>
            
            </div>
        </div>
    </header>
    
  </>;
}

export default header