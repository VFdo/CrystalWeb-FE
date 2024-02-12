import React from 'react'
import HeaderMain from '../layout/HeaderMain'
import HospitalServices from '../common/HospitalServices'
import Parallax from '../common/Parallax'
import AboutUs from '../common/AboutUs'
import CounterAnimation from '../layout/CounterAnimation'
import Footer from '../layout/Footer'
import ContactForm from '../../ContactUs/ContactForm'
import TestiMonials from '../Testimonials/TestiMonials'
import ShopMain from '../../pages/Shop/ShopMain'
import CatergorySearch from '../../pages/Shop/CatergorySearch'
import ProductCatelog from '../../pages/Shop/ProductCatelog'
import PetNav from '../../pages/Shop/PetNav'
import Catergories from '../../pages/Shop/Catergories'

const ShopHomePage = () => {
  return (
    <section>
        <ShopMain/>
      <section className='container'>
          <CatergorySearch/>
          <ProductCatelog/>
          <Parallax/>
          <hr />
          <ContactForm/>
          <Footer/>
          
          
      </section>
    </section>
  )
}

export default ShopHomePage