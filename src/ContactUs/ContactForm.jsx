import React, { useState } from 'react'
import { ContactUs } from '../components/utils/ApiFunctions'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { Button, Container, Form ,Row,Col } from 'react-bootstrap'
import ContactSummary from './ContactSummary'
import Header from '../components/common/Header'



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
    const [contactInfo, setContactInfo] = useState({
        clientName:"",
        phoneNumber: "",
        emailAddress: "" ,
        message:""
    })
    const {clientId} = useParams()
    const navigate = useNavigate

    const handleInputChange = (e)=>{
        const {name, value} = e.target
        setContacting({...contacting, [name]:value})
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
            <h4 className='text-center mt-2'>
              <span className='product-color'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span>
              <br /><h5>Send Us A Message </h5>
            </h4>
        </Row>
        <hr />
    </Container>
    <div className='container contact mb-3 '>
        <div className='row'>
            <div className='col-md-10'>
                <div className='card card-body mt-2'>
                    <h4 className='product-color text-center'>Contact Us</h4>
                    <Form noValidate validated={isvalidated} onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="clientName">Full Name : </Form.Label>
                        <Form.Control
                            required
                            type='text'
                            value={contacting.clientName}
                            id='clientName'
                            name='clientName'
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
                            <Form.Label htmlFor="phoneNumber">Phone Number : </Form.Label>
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
                            <Form.Label htmlFor="clientMessage">Message : </Form.Label>
                            <textarea
                                className='form-control'
                                required
                                rows={5}
                                type='text'
                                id='message'
                                name='message'
                                value={contacting.message}
                                placeholder='Enter Your Message'
                                onChange={handleInputChange}
                            />

                            <Form.Control.Feedback type='invalid'> 
                                Please Enter Your Message
                            </Form.Control.Feedback> 
                        </Form.Group>


                        <div className='form-group mt-2 mb-2 text-center'>
                            <Button variant="outline-success" className='login mt-5 w-25 ' type='submit' >Submit</Button>
    
                        </div>
                    </Form>
                </div>
            </div>
            <div className='col-md-4'>
                {isSubmitted &&(
                    <ContactSummary
                        contacting={contacting}
                        isFormValid={isvalidated}
                        onConfirm={handleContacting}
                    />
                )}
            </div>

        </div>
        
    </div>
    <Row xs={1} md={2} lg={3} className='g-2 mt-2'>
            <span className='product-color gap-2'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span>
            <p className='text-center'><strong>Providing Top-Notch Veterinary Care</strong></p>
            
                <NavLink className='nav-link text-center' to={"/appointment-form"}>
                <Button variant="outline-success" className='login'>
                            Make An Appointment
                </Button>
                </NavLink>
    
    </Row>
    <hr />

    </>
    
  )
}

export default ContactForm