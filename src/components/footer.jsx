import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import playstore from '../assets/play.jpg'
import appstore from '../assets/app.jpg'
import visa from '../assets/pay.png'
import map from '../assets/map.png'
import Nav from 'react-bootstrap/Nav';

function footer (){
  return <>
    <footer id='footer' className='footer p-3'>
      <div className="container-xxl">
        <div className="row">
          <div className="row justify-content-center justify-content-md-start">
          <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
            <h2 className='footer-title mb-3'>Contact</h2>
            <div className='mb-2'>Address:  Muruthalawa, Peradeniya </div>
            <div className='mb-2'>Phone:  <a className='footer-tel' href="tel:+94767022508">Call us at +94 (76) 7022508</a> </div>
            <div className='mb-2'>Hours:  From 8 a.m To 6 p.m </div>
            <div className='mb-2'>Follow Us </div>
            <div className="socials d-flex gap-3">
              <Nav.Link to='https://twitter.com' id='footer-link' target='_blank' className='gap-3'><AiFillTwitterCircle /></Nav.Link>
              <Nav.Link to='https://facebook.com' id='footer-link' target='_blank' className='gap-3'><BsFacebook /></Nav.Link>
              <Nav.Link to='https://whatsapp.com' id='footer-link' target='_blank' className='gap-3'><BsFacebook /></Nav.Link>
          </div>
          </div>
          <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
            <h2 className='footer-title mb-2'>About</h2>
            <div className='mb-3'> <Nav.Link to='/about' id='footer-links'>About Us</Nav.Link>  </div>
            <div className='mb-3'> <Nav.Link id='footer-links'>Privacy Policy</Nav.Link>  </div>
            <div className='mb-3'> <Nav.Link id='footer-links'>Terms & Conditions</Nav.Link>  </div>
            <div className='mb-3'> <Nav.Link id='footer-links'>Fee Policy</Nav.Link>  </div>
          </div>
          <div className="col-md-2 col-lg-4">
            <h2 className='footer-title mb-2'>Install App</h2>
            <p className='mb-3'>Available On Google Play Services & App Store</p>
            <div className="className='mb-3 col-md-6 col-12 pay">
            <div className='mb-3'>
              <Nav.Link to='https://play.google.com' target='_blank'>
              <img src={playstore} alt="" />
              </Nav.Link>
          </div>
            <div className='mb-3'>
                <Nav.Link to='https://www.apple.com/app-store/' target='_blank'>
                  <img src={appstore} alt="" />
                </Nav.Link>
          </div>
          </div>
            <p className="mb-3">
              Payment Methods
            </p>
          <div className="pay">
            <Nav.Link to='https://www.paypal.com/signin' target='_blank'>
              <img src={visa} alt="" />
            </Nav.Link>
          </div>
          </div>
          <div className="map col-md-1 col-lg-1 mb-1 mb-md-0">
            <Nav.Link to='https://www.paypal.com/signin' target='_blank'>
              <img src={map} alt="" />
            </Nav.Link>
          </div>
          <hr className='my-4' />
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="text-center text-md-start">&copy;Developed by Ruwindya Dilshan 2023</p>
            </div>
            <div className="col-12 col-md-6">
            <ul className="list-inline text-center text-md-end">
              <li className="list-inline-item"><Nav.Link to="#" className="text-dark">Privacy Policy</Nav.Link></li>
              <li className="list-inline-item"><Nav.Link to="#" className="text-dark">Terms of Use</Nav.Link></li>
              <li className="list-inline-item"><Nav.Link to="#" className="text-dark">Contact Us</Nav.Link></li>
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