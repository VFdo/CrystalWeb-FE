import React, { useState } from 'react'
import { addContact } from '../components/utils/ApiFunctions'
import { NavLink } from 'react-router-dom'
import { Button, Container, Form ,Row } from 'react-bootstrap'
import Header from '../components/common/Header'



const ContactForm = () => {
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

    const [successMessage,setSuccessMessage] = useState("")
    const [errorMessage,setErrorMessage] = useState("")
    

    const handleInputChange = (e)=>{
        const name = e.target.name
        let value = e.target.value
        if(name === "message" ){
          if(!isNaN(value)){
          value.parseInt(value)
      } else{
        value = ""
      }
      }
      setContacting({...contacting, [name]: value})
    }

    const handleSubmit =async(e) =>{
        e.preventDefault()
        try{
          const success = await addContact(contacting.clientName, contacting.phoneNumber,
                                                contacting.emailAddress,contacting.message); 
          if(success !==undefined){
            setSuccessMessage("A Message has been Sent")
            setBooking({photo: null, clientName:"", phoneNumber:"",emailAddress:"",checkInDate:"",checkInTime:"",numberOfPets:""})
            setImagePreview("")
            setErrorMessage("")
          }else{
            setErrorMessage("Error Sending Message")
          }
        }catch(error){
          setErrorMessage(error.message)
        }
        setTimeout(()=> {
          setSuccessMessage("")
          setErrorMessage("")
        },3000)
      }
    
  return (
    <>
    <Container className='mb-5'>
        <Header title={"Contact Us"}/>
        <Row>
            <h4 className='text-center mt-2'>
              <span className='product-color'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span>
              <br /><h5>Send Us A Message </h5>
            </h4>
        </Row>
        <hr />
    </Container>
    <div className='container contact'>
        <div className='row'>
            <div className=' justify-content-center'>
                <div className='card card-body mt-2 '>
                    <h4 className='product-color text-center'>Contact Us</h4>
                    <div>
                        {successMessage && (
                            <div className='alert alert-sucess fade show'>{successMessage}</div>
                        )}
                        {errorMessage && (
                            <div className='alert alert-danger fade show'>{errorMessage}</div>
                        )}
                    <Form  onSubmit={handleSubmit}>
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
                                placeholder='Enter Your Message'
                                onChange={handleInputChange}
                            />

                            <Form.Control.Feedback type='invalid'> 
                                Please Enter Your Message
                            </Form.Control.Feedback> 
                        </Form.Group>


                        <div className='form-group mt-2 mb-2 text-center'>
                            <Button variant="outline-success" className='login mt-5 w-25 ' type='submit' onClick={handleSubmit} >Submit</Button>
    
                        </div>
                    </Form>
                    </div>
                </div>
            </div>

        </div>
        
        
    </div>
    <div>
    <Row xs={1} md={2} lg={3} className='g-1 '>
            <span className='product-color gap-2'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span>
            <p className='text-center'><strong>Providing Top-Notch Veterinary Care</strong></p>
            
                <NavLink className='nav-link text-center' to={"/appointment-form"}>
                <Button variant="outline-success" className='login'>
                            Make An Appointment
                </Button>
                </NavLink>
    
    </Row>
    <hr />
    </div>
   

    </>
    
  )
}

export default ContactForm