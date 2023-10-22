import React from 'react'
import {Link} from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import playstore from '../assets/play.jpg'
import appstore from '../assets/app.jpg'
import visa from '../assets/pay.png'
import map from '../assets/map.png'

const footer = () => {
  return <>
    <footer className='footer p-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="row justify-content-center justify-content-md-start">
          <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
            <h2 className='footer-title mb-3'>Contact</h2>
            <div className='mb-3'><p><b>Address:</b>  Muruthalawa, Peradeniya</p> </div>
            <div className='mb-3'><p><b>Phone:</b>  <a className='footer-tel' href="tel:+94767022508">Call us at +94 (76) 7022508</a></p> </div>
            <div className='mb-4'><p><b>Hours:</b>  From 8 a.m To 6 p.m</p> </div>
            <div className='mb-3'><p><b>Follow Us</b></p> </div>
            <div className="socials d-flex gap-3">
              <Link to='https://twitter.com' id='footer-link' target='_blank' className='gap-3'><AiFillTwitterCircle /></Link>
              <Link to='https://facebook.com' id='footer-link' target='_blank' className='gap-3'><BsFacebook /></Link>
              <Link to='https://whatsapp.com' id='footer-link' target='_blank' className='gap-3'><BsFacebook /></Link>
          </div>
          </div>
          <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
            <h2 className='footer-title mb-2'>About</h2>
            <div className='mb-3'> <Link to='/about' id='footer-links'>About Us</Link>  </div>
            <div className='mb-3'> <Link id='footer-links'>Privacy Policy</Link>  </div>
            <div className='mb-3'> <Link id='footer-links'>Terms & Conditions</Link>  </div>
            <div className='mb-3'> <Link id='footer-links'>Fee Policy</Link>  </div>
          </div>
          <div className="col-md-2 col-lg-4">
            <h2 className='footer-title mb-2'>Install App</h2>
            <p className='mb-3'>Available On Google Play Services & App Store</p>
            <div className="className='mb-3 col-md-6 col-12 pay">
            <div className='mb-3'>
              <Link to='https://play.google.com' target='_blank'>
              <img src={playstore} alt="" />
              </Link>
          </div>
            <div className='mb-3'>
                <Link to='https://www.apple.com/app-store/' target='_blank'>
                  <img src={appstore} alt="" />
                </Link>
          </div>
          </div>
            <p className="mb-3">
              Payment Methods
            </p>
          <div className="pay">
            <Link to='https://www.paypal.com/signin' target='_blank'>
              <img src={visa} alt="" />
            </Link>
          </div>
          </div>
          <div className="map col-md-1 col-lg-1 mb-1 mb-md-0">
            <Link to='https://www.paypal.com/signin' target='_blank'>
              <img src={map} alt="" />
            </Link>
          </div>
          <hr className='my-4' />
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="text-center text-md-start">&copy;Developed by Ruwindya Dilshan 2023</p>
            </div>
            <div className="col-12 col-md-6">
            <ul className="list-inline text-center text-md-end">
              <li className="list-inline-item"><Link to="#" className="text-dark">Privacy Policy</Link></li>
              <li className="list-inline-item"><Link to="#" className="text-dark">Terms of Use</Link></li>
              <li className="list-inline-item"><Link to="#" className="text-dark">Contact Us</Link></li>
            </ul>
          </div>
          </div>
        </div>
      
      </div>
      </div>
    </footer>
  </>;
}

export default footer