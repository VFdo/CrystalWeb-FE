import React, { useState } from 'react'
import { addAppointment } from '../utils/ApiFunctions'
import { Form,Row,Card,Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Header from '../common/Header'


const AppointmentForm = () => {
    const [booking, setBooking] = useState({
        photo : null,
        clientName:"",
        phoneNumber: "",
        emailAddress: "" ,
        checkInDate:"",
        checkInTime:"", 
        numberOfPets:"",
    })
    const [bookingInfo, setBookingInfo] = useState({
        photo : null,
        clientName:"",
        phoneNumber: "",
        emailAddress: "" ,
        checkInDate:"",
        checkInTime:"", 
        numberOfPets:"",
    })
    const [imagePreview, setImagePreview] = useState("")
    const [successMessage,setSuccessMessage] = useState("")
    const [errorMessage,setErrorMessage] = useState("")

    const handleImageChange=(e) =>{
        const selectedImage = e.target.files[0]
        setBooking({...booking, photo : selectedImage})
        setImagePreview(URL.createObjectURL(selectedImage))
    }

    const handleProductInputChange = (e)=>{
        const name = e.target.name
        let value = e.target.value
        if(name === "numberOfPets" ){
          if(!isNaN(value)){
          value.parseInt(value)
      } else{
        value = ""
      }
      }
      setBooking({...booking, [name]: value})
      }

    
    const handleSubmit =async(e) =>{
        e.preventDefault()
        try{
          const success = await addAppointment(booking.photo,booking.clientName, booking.phoneNumber,
                                                booking.emailAddress,booking.checkInDate,booking.checkInTime,
                                                booking.numberOfPets);
          if(success !==undefined){
            setSuccessMessage("An Appointment has been Created")
            setBooking({photo: null, clientName:"", phoneNumber:"",emailAddress:"",checkInDate:"",checkInTime:"",numberOfPets:""})
            setImagePreview("")
            setErrorMessage("")
          }else{
            setErrorMessage("Error Booking an Appointment")
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

    <div className='container mb-5 '>
    <Header title={"Book An Appointment"} />
    <hr />
            <Row>
              <h4 className='text-center'>
                 <span className='product-color gap-2'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span>
                  <span className='gap-2 '>
                      <br /> Book An Appointment
                  </span>
              </h4>
            </Row>
        <hr />
        
        <div className='justify-content-center'>
            
            <div className=''>
            <div className='row justify-content-center'>
                <Card  style={{ width: "45rem", height:'45rem'}}>
                    <Card.Body>
                        <Card.Title className='product-color text-center'>
                        Book An Appointment
                        </Card.Title>
                        <Card.Text >
                        <div>
                        {successMessage && (
                            <div className='alert alert-sucess fade show'>{successMessage}</div>
                        )}
                        {errorMessage && (
                            <div className='alert alert-danger fade show'>{errorMessage}</div>
                        )}
                        <Form  onSubmit={handleSubmit}>
                        <Form.Group>
                            <legend className='logo-text'>Client Details-:</legend>
                            <Form.Label htmlFor="photo">Add Photo : </Form.Label>
                        <Form.Control
                            
                            type='file'
                            id='photo'
                            name='photo'
                            placeholder='Insert an Image of your Pet'
                            onChange={handleImageChange}
                        />
                        {imagePreview && (<img src={imagePreview} alt='product photo' style={{maxWidth:"0", maxHeight:"0"}}
                            className='mb-3'/>
                        ) }
                        <Form.Group>
                        <Form.Control.Feedback type='invalid'> 
                            Please Insert an Image
                        </Form.Control.Feedback> 
                        </Form.Group>
                        <Form.Label htmlFor="clientName">Full Name : </Form.Label>
                        <Form.Control
                            required
                            type='text'
                            id='clientName'
                            name='clientName'
                            value={booking.clientName}
                            placeholder='Enter Your Full Name'
                            onChange={handleProductInputChange}
                        />

                        <Form.Control.Feedback type='invalid'> 
                            Please Enter Your FullName
                        </Form.Control.Feedback> 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="clientEmail"> Email Address : </Form.Label>
                            <Form.Control
                                required
                                type='email'
                                id='clientEmail'
                                name='clientEmail'
                                value={booking.clientEmail}
                                placeholder='Enter Your Full Email'
                                onChange={handleProductInputChange}
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
                                onChange={handleProductInputChange}
                            />

                            <Form.Control.Feedback type='invalid'> 
                                Please Enter Your phone Number
                            </Form.Control.Feedback> 
                        </Form.Group>

                        <fieldset style={{border:"2px"}}>
                            <legend className='logo-text'>Appointment Date and Time-:</legend>
                            <div className='row'>
                                <div className='col-6'>
                                    <Form.Label htmlFor="checkInDate">Check-In Date : </Form.Label>
                                    <Form.Control
                                        required
                                        type='date'
                                        id='checkInDate'
                                        name='checkInDate'
                                        placeholder='Check In date'
                                        onChange={handleProductInputChange}
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
                                        placeholder='Check In Time'
                                        onChange={handleProductInputChange}
                                    />

                                    <Form.Control.Feedback type='invalid'> 
                                        please select a check-in-time
                                    </Form.Control.Feedback> 
                                    
                                </div>
                                {errorMessage && <p className='error-message text-danger'>{errorMessage}</p> }
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend className='logo-text'>Number of Pets-:</legend>
                            <div className='row'>
                                <div className='col-6'>
                                    <Form.Label htmlFor="numberOfPets">Number of Pets : </Form.Label>
                                    <Form.Control
                                        required
                                        type='number'
                                        id='numberOfPets'
                                        name='numberOfPets'
                                        min={1}
                                        placeholder='0'
                                        onChange={handleProductInputChange}
                                        
                                    />

                                    <Form.Control.Feedback type='invalid'> 
                                        please select at least one pet
                                    </Form.Control.Feedback> 
                                    
                                </div>
                            </div>
                        </fieldset>
                        <div className='d-grid d-md-flex gap-3 mt-3'>
                  <NavLink className='nav-link mt-5' to={"/admin"}>
                  <Button variant="outline-success" className='/'>
                      Back
                  </Button>
                  </NavLink>
                  <Button variant="outline-success" className='login mt-5' type='submit'>Book Appointment</Button>
                </div>
                        
                    </Form>
                    </div>
                    </Card.Text >
                    </Card.Body>
                    </Card>
                    
                 </div >  
            </div>

        </div>
    </div>

    </>
    
  )
}

export default AppointmentForm