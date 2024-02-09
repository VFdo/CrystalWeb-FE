import React from 'react'
import Header from './Header'
import { FaClock, FaUtensils, FaWifi } from 'react-icons/fa'
import { Container, Row , Col,Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { MdPets } from "react-icons/md";
import { FaClinicMedical } from "react-icons/fa";
import { GiHairStrands } from "react-icons/gi";
import { MdVaccines } from "react-icons/md";
import { FaHospital } from "react-icons/fa";
import { TbDentalBroken } from "react-icons/tb";
import { NavLink } from 'react-router-dom'

const HospitalServices = () => {
  return (
    <>
    <hr />
    <Container className='mb-2 mt-5'>
        <Header title={"Our Services"}/>
        <Row>
            <h4 className='text-center mt-3'>
                Services at <span className='product-color gap-2'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span>
                <span className='gap-2 '>
                    <br /> <FaClock/>-24-Hour Service
                </span>
            </h4>
        </Row>
        <hr />
        <Row xs={1} md={2} lg={3} className='g-4 mt-2'>
            <Col>
                <Card>
                    <Card.Body className='text-center'>
                        <Card.Title className='product-color text-center'>
                            <MdPets/><br />
                            Pet Care
                        </Card.Title>
                        <Card.Text>A perfect pet sitter for your pet in the absence of you.
                            We provide professional care and attention to all kinds of pets.
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body className='text-center'>
                        <Card.Title className='product-color text-center'>
                            <FaClinicMedical/><br />Pet Clinic
                        </Card.Title>
                        <Card.Text> We provide medical care for pets, including routine check-ups, 
                            vaccinations, and treatments for illnesses and injuries.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body className='text-center'>
                        <Card.Title className='product-color'>
                            <GiHairStrands/><br />Grooming
                        </Card.Title>
                        <Card.Text>This includes brushing the fur , bathing the pet, trimming or 
                            clipping the fur, cleaning the ears and eyes, and trimming the nails.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body className='text-center'>
                        <Card.Title className='product-color'>
                            <MdVaccines/><br />Vaccination
                        </Card.Title>
                        <Card.Text>The process involves a consultation with a 
                            veterinarian to determine the appropriate vaccination for the animal.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body className='text-center'>
                        <Card.Title className='product-color'>
                            <FaHospital/><br />Pet Store & pharmacy
                        </Card.Title>
                        <Card.Text> variety of products for pets, including food, toys, supplies and  
                            medications for your companion.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body className='text-center'>
                        <Card.Title className='product-color'>
                            <TbDentalBroken/><br />Dental Care
                        </Card.Title>
                        <Card.Text> Regular dental care is essential for pets' overall health, as poor 
                            oral hygiene can lead to a range of health problems, .
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            
            <span className='product-color gap-2'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span>
            <p className='text-center'><strong>Providing Top-Notch Veterinary Care</strong></p>
            
                <NavLink className='nav-link text-center' to={"/appointment-form"}>
                <Button variant="outline-success" className='login'>
                            Make An Appointment
                </Button>
                </NavLink>
            
        </Row>
        <hr />
    </Container>
    </>
  )
}

export default HospitalServices