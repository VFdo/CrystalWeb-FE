import React from 'react'
import Header from '../common/Header'
import {  FaAddressCard, FaClock, FaPhoneAlt, FaUtensils } from 'react-icons/fa'
import { Container, Row , Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const HomeContainer = () => {
  return (
    <>
    <Container className='mb-3'>
        
        <Row xs={1} md={2} lg={3} className='g-4 mt-2'>
            <Col>
                <Card className='card'>
                    <Card.Body>
                        <Card.Title className='product-color text-center'>
                            <FaPhoneAlt/> Call Us To Make Appointment
                        </Card.Title>
                        <Card.Text className='text-center'>+94 76 7022508 / +94  118 999999</Card.Text>

                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className='product-color text-center'>
                            <FaAddressCard/> Visit Us
                        </Card.Title>
                        <Card.Text className='text-center'>Murathalawa,Peradeniya</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className='product-color text-center'>
                            <FaClock/> Working Hours
                        </Card.Title>
                        <Card.Text className='text-center'>8.30 a.m - 5.00 p.m</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            
        </Row>
    </Container>
    </>
  )
}

export default HomeContainer