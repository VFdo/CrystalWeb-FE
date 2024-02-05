import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Grooming from '../assets/grooming.png'
import DayCare from '../assets/Daycare.png'
import Health from '../assets/Healthcare.png'
import Hyginic from '../assets/Hyginecare.png'
import Training from '../assets/Training.png'
import Dog from '../assets/dog.png'
import Paw from '../assets/paw.png'
import Appointment from '../components/appointment'

function services() {
  return (
    <section id='services' className="contact-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12 text-center">
                <img src={Paw} alt="image here"  className='paw d-flex align-items-right justify-content-between'/>
            <h1 className=" text">Services That We Offer</h1>
            <p className='text2 fs-3'>We are only a step away from you</p>
        </div>
      </div>
    </div>
    <Container>
      <Row>
      <Card style={{ width: '10rem' ,height:'10rem'}} className='card d-flex col-4  mx-auto my-2 shadow-sm rounded'>
            <Card.Img variant="top" src={DayCare} className='img'/>
            <Card.Body>
                <Card.Title className='title'>Day Care</Card.Title>
            </Card.Body>
            
        </Card>
        <Card style={{ width: '10rem' ,height:'10rem'}} className='card d-flex col-4  mx-auto my-2 shadow-sm rounded'>
            <Card.Img variant="top" src={Grooming} className='img'/>
            <Card.Body>
                <Card.Title className='title' >Grooming</Card.Title>
            </Card.Body>
            
        </Card>
        <Card style={{ width: '10rem' ,height:'10rem'}} className='card d-flex col-4  mx-auto my-2 shadow-sm rounded'>
            <Card.Img variant="top" src={Health} className='img'/>
            <Card.Body>
                <Card.Title className='title'>Health Care</Card.Title>
            </Card.Body>
            
        </Card>
        <Card style={{ width: '10rem' ,height:'10rem'}} className='card d-flex col-4  mx-auto my-2 shadow-sm rounded'>
            <Card.Img variant="top" src={Hyginic} className='img'/>
            <Card.Body>
                <Card.Title className='title'>Hyginic Care</Card.Title>
            </Card.Body>
            
        </Card>
        <Card style={{ width: '10rem' ,height:'10rem'}} className='card d-flex col-4  mx-auto my-2 shadow-sm rounded'>
            <Card.Img variant="top" src={Training} className='img'/>
            <Card.Body>
                <Card.Title className='title'>Training</Card.Title>
            </Card.Body>
            
        </Card>
        
      </Row>
    </Container>
    <Container className='service_card'>
        <Row>
            <img src={Dog} alt="image here"  className='service_img d-flex' />
            <Card style={{ width: '25rem', height:'25rem'}} className='service_card d-flex col-1  mx-auto my-2 shadow-sm rounded'>
            <Card.Body>
                <Card.Title>Dogs do speak, but only to those who know how to listen.</Card.Title>
                <Card.Text>
                Regular checkups, pet dental care, and grooming should all be a part of your family pet’s health care regimen to keep them looking and feeling their best. The goal of every pet parent is to maximise their furry friends’ health, wellbeing, 
                and quality of life, and this is made possible by providing them with the best possible preventive care.
                </Card.Text>
                <Appointment/>
            </Card.Body>
            </Card>
        </Row>
    
    </Container>
    
  </section>
  
  )
}

export default services