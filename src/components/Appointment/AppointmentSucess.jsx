import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../common/Header'

const AppointmentSucess = () => {
    const location = useLocation()
    const message = location.state.message
    const error = location.state?.error
  return (
    <div className='container'>
        <Header title="Booking sucess"/>
        <div className='mt-5'>
            {message ? (
                <div>
                    <h3 className='text-success'>Your Appointment has Booked !</h3>
                    <p className='text-sucess'>{message}</p>
                </div>
            ):(
                <div>
                    <h3 className='text-danger'>Error Booking Appointmnet !</h3>
                    <p className='text-danger'>{error}</p>
                </div> 
            )}
        </div>
    </div>
  )
}

export default AppointmentSucess