import React from 'react'

const Header = ({title}) => {
  return (
    <header className='header'>
        <div className='overlay'></div>
        <div className='header_container'>
            <h3 className='header-title text-center mt-5'>{title}</h3>
        </div>

    </header>
  )
}

export default Header