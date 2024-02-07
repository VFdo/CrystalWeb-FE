import React from 'react'
import Header from './Header'
import { FaUtensils } from 'react-icons/fa'
import { Container, Row , Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import About from '../../assets/man.png'

const AboutUs = () => {
  return (
    <>
    <Container className='mb-2 mt-4'>
        <Header title={"About Us"}/>
        <Row>
            <h4 className='text-center'>
                About <span className='product-color'>CRYSTAL Animal Hospital</span>
            </h4>
        </Row>
        <hr />
        <Col>
            <Row>
                <Card  style={{ width: "100vh", height:'20rem'}} className='col-2  mx-auto my-2 shadow-sm rounded'>
                    <Card.Body>
                        <Card.Title className='product-color text-center'>
                            Our Mission
                        </Card.Title>
                        <Card.Text>Regular checkups, pet dental care, and grooming should all be a part of your family pet’s health care regimen to keep them looking and feeling their best. The goal of every pet parent is to maximise their furry friends’ health, wellbeing, 
                        and quality of life, and this is made possible by providing them with the best possible preventive care.</Card.Text>

                    </Card.Body>
                </Card>
            </Row>
            <Row >
                <Card style={{ width: "100vh", height:'20rem'}} className='col-2  mx-auto my-2 shadow-sm rounded'>
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
    </Container>
    </>
  )
}

export default AboutUs