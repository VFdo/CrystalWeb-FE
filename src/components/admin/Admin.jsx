import React from 'react'
import { Button, Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../common/Header'

const Admin = () => {
  return (
    <section className='container mt-5'>
        <Container className='mb-2 mt-5'>
        <Header title={"Admin Panel"} />
        <Row>
            <h4 className='text-center mt-2'>
              <span className='product-color'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span>
              <br /><h5>Welcome to Admin Panel </h5>
            </h4>
        </Row>
        <hr />
        </Container>
        <div className='d-grid d-md-flex gap-3 mt-3'>
        <h5>Pet Store Admin :</h5>
        <Button variant="outline-success" >
          <Link to = {"/add-product"} className='admin_link'>Add Products</Link>
        </Button>
        <Button variant="outline-success "  >
          <Link to = {"/existing-products"} className='admin_link '>View or Delete Products</Link>
        </Button>
        <Button variant="outline-success "  >
          <Link to = {"/book-appointment"} className='admin_link '>Make Appointments</Link>
        </Button>

        </div>
        <hr />
        
    </section>
  )
}

export default Admin