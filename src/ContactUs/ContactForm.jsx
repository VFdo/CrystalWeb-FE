import React, { useState } from 'react'
import { ContactUs } from '../components/utils/ApiFunctions'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Form ,Row } from 'react-bootstrap'
import ContactSummary from './ContactSummary'

const ContactForm = () => {
    const [isvalidated, setIsValidated] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [contacting, setContacting] = useState({
        clientName:"",
        phoneNumber: "",
        emailAddress: "" ,
        message:""
    })
    const [appointmentInfo, setAppointmentInfo] = useState({
        clientName:"",
        phoneNumber: "",
        emailAddress: "" ,
        message:""
    })
    const {clientId} = useParams()
    const navigate = useNavigate

    const handleInputChange = (e)=>{
        const {name, value} = e.target
        setBooking({...contacting, [name]:value})
        setErrorMessage("")
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.currentTarget

        if(form.checkValidity() === false ) {
            e.stopPropagation()
        }else{
            setIsSubmitted(true)
        }
        setIsValidated(true)
    }

    const handleContacting = async()=>{
        try{
            const confirmationCode = await ContactUs(clientId, contacting)
            setIsSubmitted(true)
            navigate("/message-sucess",{state:{message : confirmationCode}})
        }catch(error){
            setErrorMessage(error.message)
            navigate("/message-error",{state:{error : errorMessage}})
        }
    }
    
  return (
    <>
    <Container className='mb-2'>
        <Header title={"Contact Us"}/>
        <Row>
            <h4 className='text-center'>
                Services at <span className='product-color'>CRYSTAL Animal Hospital</span>
                <span className='gap-2 '>
                    <FaClock/> - 24-Hour Service
                </span>
            </h4>
        </Row>
        <hr />
    </Container>
    <div className='container mb-5 '>
        <div className='row'>
            <div className='col-md-6'>
                <div className='card card-body mt-5'>
                    <h4 className='card card-title'>Contact Us</h4>
                    <Form noValidate validated={isvalidated} onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="clientName">Full Name : </Form.Label>
                        <Form.Control
                            required
                            type='text'
                            id='clientName'
                            name='clientName'
                            value={contacting.clientName}
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
                                value={contacting.clientEmail}
                                placeholder='Enter Your Full Email'
                                onChange={handleInputChange}
                            />

                            <Form.Control.Feedback type='invalid'> 
                                Please Enter Your Email Address
                            </Form.Control.Feedback> 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="clientEmail">Phone Number : </Form.Label>
                            <Form.Control
                                required
                                type='number'
                                id='phoneNumber'
                                name='phoneNumber'
                                value={contacting.phoneNumber}
                                placeholder='Enter Your phone Number'
                                onChange={handleInputChange}
                            />

                            <Form.Control.Feedback type='invalid'> 
                                Please Enter Your phone Number
                            </Form.Control.Feedback> 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="clientEmail">Message : </Form.Label>
                            <Form.Control
                                required
                                type='text'
                                id='message'
                                name='message'
                                value={contacting.message}
                                placeholder='Enter Your phone Number'
                                onChange={handleInputChange}
                            />

                            <Form.Control.Feedback type='invalid'> 
                                Please Enter Your Message
                            </Form.Control.Feedback> 
                        </Form.Group>


                        <div className='form-group mt-2 mb-2'>
                            <button type='submit' className='btn btn-product'>
                               Submit
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
            <div className='col-md-4'>
                {isSubmitted &&(
                    <ContactSummary
                        booking={contacting}
                        isFormValid={isvalidated}
                        onConfirm={handleContacting}
                    />
                )}
            </div>

        </div>
    </div>

    </>
    
  )
}

export default ContactForm