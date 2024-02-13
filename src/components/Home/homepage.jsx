import React from 'react'
import HeaderMain from '../layout/HeaderMain'
import HospitalServices from '../common/HospitalServices'
import Parallax from '../common/Parallax'
import AboutUs from '../common/AboutUs'
import CounterAnimation from '../layout/CounterAnimation'
import Footer from '../layout/Footer'
import ContactForm from '../../ContactUs/ContactForm'
import TestiMonials from '../Testimonials/TestiMonials'

const homepage = () => {
  return (
    <section>
      <HeaderMain/>
      <section className='container'>
          <AboutUs/>
          <Parallax/>
          <HospitalServices/>
          <Parallax/>
          <CounterAnimation/>
          <ContactForm/>
          <Parallax/>
          <TestiMonials/>     
          <Footer/ >
          
      </section>
    </section>
  )
}

export default homepage