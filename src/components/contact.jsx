import React from 'react'
import Paw from '../assets/paw.png'
import { useRef } from 'react';

function contact () {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return <>
   <section ref={ref} id='contact' className="contacts-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12 text-center">
            <h1 className="text">Reach Out to Us</h1>
            <p className=' text2 fs-3'>We are only a step away from you</p>
            <img src={Paw} alt="image here"  className='paw d-flex align-items-right justify-content-between'/>
        </div>
      </div>
    </div>
  </section>

  <div className="contact-message p-0">
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
        <div className="card p-5">
        <h2 className='text-center mb-4'>Leave Us A message</h2>
        <div className=" d-flex align-items-center justify-content-center">
        <div className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
              </div>
              <div className='col-12'>
              <label htmlFor="exampleFormControlInput1" className="form-label mb-3">Enter Your Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                   
              </div>
              <div className="col-12">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Type in your message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className='col-12 text-center gap-2'>
                <button onClick={handleClick} id='button-link' type="submit" className='submit'>Submit</button>
                </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
  </div>
  
  </>;
}

export default contact