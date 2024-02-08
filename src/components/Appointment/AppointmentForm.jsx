import React, { useState } from 'react'
import { bookAppointment } from '../utils/ApiFunctions'
import { useNavigate, useParams } from 'react-router-dom'
import { Form} from 'react-bootstrap'
import AppointmentSummary from './AppointmentSummary'

const AppointmentForm = () => {
    const [isvalidated, setIsValidated] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [booking, setBooking] = useState({
        clientName:"",
        phoneNumber: "",
        emailAddress: "" ,
        checkInDate:"",
        checkInTime:"", 
        numberOfPets:"",
    })
    const [appointmentInfo, setAppointmentInfo] = useState({
        clientName:"",
        phoneNumber: "",
        emailAddress: "" ,
        checkInDate:"",
        checkInTime:"", 
        numberOfPets:"",
    })
    const {appointmentID} = useParams()
    const navigate = useNavigate

    const handleInputChange = (e)=>{
        const {name, value} = e.target
        setBooking({...booking, [name]:value})
        setErrorMessage("")
    }

    const isClientCountValid = ()=>{
        const petCount = parseInt(booking.numberOfPets)
        return petCount >=1 

    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.currentTarget

        if(form.checkValidity() === false || !isClientCountValid()) {
            e.stopPropagation()
        }else{
            setIsSubmitted(true)
        }
        setIsValidated(true)
    }

    const handleBooking = async()=>{
        try{
            const confirmationCode = await bookAppointment(appointmentID, booking)
            setIsSubmitted(true)
            navigate("/booking-sucess",{state:{message : confirmationCode}})
        }catch(error){
            setErrorMessage(error.message)
            navigate("/booking-sucess",{state:{error : errorMessage}})
        }
    }
    
  return (
    <>

    <div className='container mb-5 '>
        <div className='row'>
            <div className='col-md-6'>
                <div className='card card-body mt-5'>
                    <h4 className='card card-title'>Book An Appointment</h4>
                    <Form noValidated validated={isvalidated} onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="clientName">Full Name : </Form.Label>
                        <Form.Control
                            required
                            type='text'
                            id='clientName'
                            name='clientName'
                            value={booking.clientName}
                            placeholder='Enter Your Full Name'
                            onChange={handleInputChange}
                        />

                        <Form.Control.Feedback type='invalid'> 
                            Please Enter Your FullName
                        </Form.Control.Feedback> 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="clientEmail">Email Address : </Form.Label>
                            <Form.Control
                                required
                                type='email'
                                id='clientEmail'
                                name='clientEmail'
                                value={booking.clientEmail}
                                placeholder='Enter Your Full Email'
                                onChange={handleInputChange}
                            />

                            <Form.Control.Feedback type='invalid'> 
                                Please Enter Your Email Address
                            </Form.Control.Feedback> 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="phoneNumber">Phone Number : </Form.Label>
                            <Form.Control
                                required
                                type='number'
                                id='phoneNumber'
                                name='phoneNumber'
                                value={booking.phoneNumber}
                                placeholder='Enter Your phone Number'
                                onChange={handleInputChange}
                            />

                            <Form.Control.Feedback type='invalid'> 
                                Please Enter Your phone Number
                            </Form.Control.Feedback> 
                        </Form.Group>

                        <fieldset style={{border:"2px"}}>
                            <legend>Appointment Date and Time</legend>
                            <div className='row'>
                                <div className='col-6'>
                                    <Form.Label htmlFor="checkInDate">Check-In Date : </Form.Label>
                                    <Form.Control
                                        required
                                        type='date'
                                        id='checkInDate'
                                        name='checkInDate'
                                        value={booking.checkInDate}
                                        placeholder='Check In date'
                                        onChange={handleInputChange}
                                    />

                                    <Form.Control.Feedback type='invalid'> 
                                        please select a check-in-date
                                    </Form.Control.Feedback> 
                                    
                                </div>

                                <div className='col-6'>
                                    <Form.Label htmlFor="checkInTime">Check-In Time : </Form.Label>
                                    <Form.Control
                                        required
                                        type='time'
                                        id='checkInTime'
                                        name='checkInTime'
                                        value={booking.checkInTime}
                                        placeholder='Check In Time'
                                        onChange={handleInputChange}
                                    />

                                    <Form.Control.Feedback type='invalid'> 
                                        please select a check-in-time
                                    </Form.Control.Feedback> 
                                    
                                </div>
                                {errorMessage && <p className='error-message text-danger'>{errorMessage}</p> }
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Number of Pets</legend>
                            <div className='row'>
                                <div className='col-6'>
                                    <Form.Label htmlFor="numberOfPets">Number of Pets : </Form.Label>
                                    <Form.Control
                                        required
                                        type='number'
                                        id='numberOfPets'
                                        name='numberOfPets'
                                        value={booking.numberOfPets}
                                        min={1}
                                        placeholder='0'
                                        onChange={handleInputChange}
                                        
                                    />

                                    <Form.Control.Feedback type='invalid'> 
                                        please select at least one pet
                                    </Form.Control.Feedback> 
                                    
                                </div>
                            </div>
                        </fieldset>
                        <div className='form-group mt-2 mb-2'>
                            <button type='submit' className='btn btn-product'>
                                Continue
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
            <div className='col-md-4'>
                {isSubmitted &&(
                    <AppointmentSummary
                        booking={booking}
                        isFormValid={isvalidated}
                        onConfirm={handleBooking}
                    />
                )}
            </div>

        </div>
    </div>

    </>
    
  )
}

export default AppointmentForm