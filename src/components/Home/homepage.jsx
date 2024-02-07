import React from 'react'
import HeaderMain from '../layout/HeaderMain'
import HospitalServices from '../common/HospitalServices'
import Parallax from '../common/Parallax'
import AboutUs from '../common/AboutUs'

const homepage = () => {
  return (
    <section>
      <HeaderMain/>
      <section className='container'>
          <AboutUs/>
          <Parallax/>
          <HospitalServices/>
          <Parallax/>
      </section>
    </section>
  )
}

export default homepage