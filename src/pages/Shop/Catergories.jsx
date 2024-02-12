import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { FaClinicMedical, FaHospital } from 'react-icons/fa'
import { GiHairStrands } from 'react-icons/gi'
import { MdPets, MdVaccines } from 'react-icons/md'
import { TbDentalBroken } from 'react-icons/tb'
import img1 from '../../assets/food1.png'
import img2 from '../../assets/food2.png'
import img3 from '../../assets/food3.png'
import img4 from '../../assets/pedigree.jpg'
import img5 from '../../assets/Luxury_Pet_tag.jpg'
import img6 from '../../assets/Dogfood.jpg'

const Catergories = () => {
  return (
    <div>
        <hr />
        <Row xs={1} md={2} lg={3} className='g-4 mt-2'>
            <Card>
            <Card.Title className='text-center mt-2'>
                    Pet Foods
                </Card.Title>
            <Col >
                <Card  style={{width:'250px',height : '350px'}}>
                    <Card.Body className='text-center'>
                        <Card.Img variant='top' src={img1} style={{width:'200px',height : '200px'}}/>
                        <Card.Title className='text-center'>
                           Pet Food
                        </Card.Title>
                        <Card.Text>
                            Rs. 250.00
                        </Card.Text>
                        <Button variant="outline-success">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card  style={{width:'250px',height : '350px'}}>
                    <Card.Body className='text-center'>
                        <Card.Img variant='top' src={img2} style={{width:'200px',height : '200px'}}/>
                        <Card.Title className='text-center'>
                           Pet Food
                        </Card.Title>
                        <Card.Text>
                            Rs.750.00
                        </Card.Text>
                        <Button variant="outline-success">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card  style={{width:'250px',height : '350px'}}>
                    <Card.Body className='text-center'>
                        <Card.Img variant='top' src={img3} style={{width:'200px',height : '200px'}}/>
                        <Card.Title className='text-center'>
                           Pet Food
                        </Card.Title>
                        <Card.Text>
                            Rs. 450.00
                        </Card.Text>
                        <Button variant="outline-success">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card  style={{width:'250px',height : '350px'}}>
                    <Card.Body className='text-center'>
                        <Card.Img variant='top' src={img2} style={{width:'200px',height : '200px'}}/>
                        <Card.Title className='text-center'>
                           Premio Tuna Rolls
                        </Card.Title>
                        <Card.Text>
                            Rs. 1,250.00
                        </Card.Text>
                        <Button variant="outline-success">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            </Card>
            <Card>
                <Card.Title className='text-center'>
                    Pet Foods
                </Card.Title>
            <Col>
            <Card  style={{width:'250px',height : '350px'}}>
                    <Card.Body className='text-center'>
                        <Card.Img variant='top' src={img4} style={{width:'200px',height : '200px'}}/>
                        <Card.Title className='text-center'>
                           Pedigree
                        </Card.Title>
                        <Card.Text>
                            Rs. 1250.00
                        </Card.Text>
                        <Button variant="outline-success">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card  style={{width:'250px',height : '350px'}}>
                    <Card.Body className='text-center'>
                        <Card.Img variant='top' src={img5} style={{width:'200px',height : '200px'}}/>
                        <Card.Title className='text-center'>
                           Luxuary Pet Tag
                        </Card.Title>
                        <Card.Text>
                            Rs. 250.00
                        </Card.Text>
                        <Button variant="outline-success">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card  style={{width:'250px',height : '350px'}}>
                    <Card.Body className='text-center'>
                        <Card.Img variant='top' src={img6} style={{width:'200px',height : '200px'}}/>
                        <Card.Title className='text-center'>
                           Premium Dog Food
                        </Card.Title>
                        <Card.Text>
                            Rs. 750.00
                        </Card.Text>
                        <Button variant="outline-success">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card  style={{width:'250px',height : '350px'}}>
                    <Card.Body className='text-center'>
                        <Card.Img variant='top' src={img5} style={{width:'200px',height : '200px'}}/>
                        <Card.Title className='text-center'>
                           Pet Tag
                        </Card.Title>
                        <Card.Text>
                            Rs. 250.00
                        </Card.Text>
                        <Button variant="outline-success">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>

            </Card>
            <Card>
            <Card.Title className='text-center'>
                    Pet Foods
                </Card.Title>
            <Col>
            <Card  style={{width:'250px',height : '100px'}}>
                    <Card.Body className='text-center'>
                        <Card.Img variant='top' src={img4} style={{width:'200px',height : '200px'}}/>
                        <Card.Title className='text-center'>
                           Pedigree
                        </Card.Title>
                        <Card.Text>
                            Rs. 1250.00
                        </Card.Text>
                        <Button variant="outline-success">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card  style={{width:'250px',height : '350px'}}>
                    <Card.Body className='text-center'>
                        <Card.Img variant='top' src={img5} style={{width:'200px',height : '200px'}}/>
                        <Card.Title className='text-center'>
                           Luxuary Pet Tag
                        </Card.Title>
                        <Card.Text>
                            Rs. 250.00
                        </Card.Text>
                        <Button variant="outline-success">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card  style={{width:'250px',height : '350px'}}>
                    <Card.Body className='text-center'>
                        <Card.Img variant='top' src={img6} style={{width:'200px',height : '200px'}}/>
                        <Card.Title className='text-center'>
                           Premium Dog Food
                        </Card.Title>
                        <Card.Text>
                            Rs. 750.00
                        </Card.Text>
                        <Button variant="outline-success">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card  style={{width:'250px',height : '350px'}}>
                    <Card.Body className='text-center'>
                        <Card.Img variant='top' src={img5} style={{width:'200px',height : '200px'}}/>
                        <Card.Title className='text-center'>
                           Pet Tag
                        </Card.Title>
                        <Card.Text>
                            Rs. 250.00
                        </Card.Text>
                        <Button variant="outline-success">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>

            </Card>
            
        
        </Row>
        <hr />
    </div>
  )
}

export default Catergories