import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../common/Header'

const ContactSucess = () => {
    const location = useLocation()
    const message = location.state.message
    const error = location.state?.error
  return (
    <div className='container'>
        <Header title="Contact sucess"/>
        <div className='mt-5'>
            {message ? (
                <div>
                    <h3 className='text-success'>Your Message has been sent !</h3>
                    <p className='text-sucess'>{message}</p>
                </div>
            ):(
                <div>
                    <h3 className='text-danger'>Error Sending Message !</h3>
                    <p className='text-danger'>{error}</p>
                </div> 
            )}
        </div>
    </div>
  )
}

export default ContactSucess