import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Paw from '../assets/paw.png'
import About from '../assets/man.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from '../components/navbar'

const about = () => {
  return (
    <section id='about' className="about-wrapper p-4">
    <Navbar/>
    <div className="container-xxl">
      <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-center">
            <h1 className="about">About Us</h1>
            <img src={Paw} alt="image here"  className='paw d-flex align-items-right justify-content-between'/>
        </div>
      </div>
    </div>
    <Container className='service_card'>
        <Row>
            <Card style={{ width: '35rem', height:'20rem'}} className='service_card d-flex col-1  mx-auto my-2 shadow-sm rounded'>
            <Card.Body>
                <Card.Title>Dogs do speak, but only to those who know how to listen.</Card.Title>
                <Card.Text>
                Regular checkups, pet dental care, and grooming should all be a part of your family pet’s health care regimen to keep them looking and feeling their best. The goal of every pet parent is to maximise their furry friends’ health, wellbeing, 
                and quality of life, and this is made possible by providing them with the best possible preventive care.
                </Card.Text>
                <Button variant="primary" className='login'>Learn More</Button>
            </Card.Body>
            </Card>
            <img src={About} alt="image here"  className='about_img d-flex' />
        </Row>
    
    </Container>
    </section>
    
  )
}

export default about