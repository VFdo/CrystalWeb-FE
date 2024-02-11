import React from 'react'
import HomeContainer from './HomeContainer'

const HeaderMain = () => {
  return (
    <header className='header-banner'>
        <div className='overlay'>

        </div>
        <div className='animated-texts overlay-content'>
            <h1 className='text-center fst-italic'> Welcome To <br /></h1>
            <h1><span className='product-color'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span></h1>
            <h5 className='text-center fst-italic'>Experience the best Animal Hospital for your Companion </h5>
            
          
        </div>
        <div className='home_card'><HomeContainer/></div>
        

    </header>
  )
}

export default HeaderMain