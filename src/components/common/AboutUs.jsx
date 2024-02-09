import React from 'react'
import Header from './Header'
import { FaUtensils } from 'react-icons/fa'
import { Container, Row , Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import About from '../../assets/man.png'

const AboutUs = () => {
  return (
    <>
    <Container className='mb-2 mt-5'>
        <Header title={"About Us"} />
        <Row>
            <h4 className='text-center mt-2'>
               About Us <span className='product-color'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span>
            </h4>
        </Row>
        <hr />
        <Col>
            <Row className='about gap-4 mb-4'>
                <Card  style={{ width: "80vh", height:'15rem'}} >
                    <Card.Body>
                        <Card.Title className='product-color text-center'>
                            Our Mission
                        </Card.Title>
                        <Card.Text>Regular checkups, pet dental care, and grooming should all be a part of your family pet’s health care regimen to keep them looking and feeling their best. The goal of every pet parent is to maximise their furry friends’ health, wellbeing, 
                        and quality of life, and this is made possible by providing them with the best possible preventive care.</Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: "80vh", height:'15rem'}} >
                    <Card.Body>
                        <Card.Title className='product-color text-center'>
                            Our Story
                        </Card.Title>
                        <Card.Text>Regular checkups, pet dental care, and grooming should all be a part of your family pet’s health care regimen to keep them looking and feeling their best. The goal of every pet parent is to maximise their furry friends’ health, wellbeing, 
                and quality of life, and this is made possible by providing them with the best possible preventive care.</Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Col>
        <hr />
    </Container>
    </>
  )
}

export default AboutUs