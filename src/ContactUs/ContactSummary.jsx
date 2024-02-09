
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate,NavLink } from 'react-router-dom'

const ContactSummary = ({contacting, isFormValid, onConfirm}) => {
    const [isContactingConfirmed, setIsContactingConfirmed] = useState(false)

    const  navigate = useNavigate()
    const handleConfirmcontacting= ()=>{
        setTimeout(()=>{
            setIsContactingConfirmed(true)
            onConfirm()
        },3000)
    }

    useEffect(()=>{
        if (isContactingConfirmed){
            navigate("/message-success")
        }
    },[isContactingConfirmed, navigate])

  return (
    <div className='card card-body mt-5'>
        <h4>Contact Summary</h4>

        <p>Full Name : <strong>{contacting.clientName}</strong></p>
        <p>Email : <strong>{contacting.clientEmail}</strong></p>
        <p>Phone Number : <strong>{contacting.phoneNumber}</strong></p>
        <p>Additional Info : <strong>{contacting.message}</strong></p>
        <div>
            {isFormValid && !isContactingConfirmed ?(
                
                <NavLink className='nav-link text-center' to={"/message-success"}>
                <Button variant="outline-success" className='login' onClick={handleConfirmcontacting}>
                            Send Message
                </Button>
                </NavLink>
            ):isContactingConfirmed(
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='spinner-border text-primary' role='status'>
                        <span className='sr-only'>Sent Sucessfully</span>

                    </div>
                </div>
            )}
        </div>
    </div>

    
    
  )
}

export default ContactSummary