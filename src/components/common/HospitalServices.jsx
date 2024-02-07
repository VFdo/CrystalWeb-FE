import React from 'react'
import Header from './Header'
import { FaClock, FaUtensils, FaWifi } from 'react-icons/fa'
import { Container, Row , Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const HospitalServices = () => {
  return (
    <>
    <Container className='mb-2'>
        <Header title={"Our Services"}/>
        <Row>
            <h4 className='text-center'>
                Services at <span className='product-color'>CRYSTAL Animal Hospital</span>
                <span className='gap-2 '>
                    <FaClock/> - 24-Hour Service
                </span>
            </h4>
        </Row>
        <hr />
        <Row xs={1} md={2} lg={3} className='g-4 mt-2'>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className='product-color'>
                            <FaWifi/>Pet Store
                        </Card.Title>
                        <Card.Text>Stay Connected with Us</Card.Text>

                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className='product-color'>
                            <FaUtensils/>Pet Care
                        </Card.Title>
                        <Card.Text>Stay Connected with Us</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className='product-color'>
                            <FaUtensils/>Pet Care
                        </Card.Title>
                        <Card.Text>Stay Connected with Us</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className='product-color'>
                            <FaUtensils/>Pet Care
                        </Card.Title>
                        <Card.Text>Stay Connected with Us</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className='product-color'>
                            <FaUtensils/>Pet Care
                        </Card.Title>
                        <Card.Text>Stay Connected with Us</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default HospitalServices