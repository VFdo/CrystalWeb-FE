import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const clientSidebar = ({ title }) => {
  return (
    <header className="my-4">
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1 className="text-primary display-4 fw-bold">{title}</h1>
          </Col>
        </Row>
      </Container>
      <Navbar bg="light" expand="lg" className="mb-4">
      <Container fluid>
        <Navbar.Brand href="#">Bacolod Animal Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#">Dashboard</Nav.Link>
            <Nav.Link href="#">Clients</Nav.Link>
            <Nav.Link href="#">Medicines</Nav.Link>
            <Nav.Link href="#">Inventory</Nav.Link>
            <Nav.Link href="#">Reports</Nav.Link>
            <Nav.Link href="#">Schedule</Nav.Link>
            <Nav.Link href="#">Employees</Nav.Link>
            <Nav.Link href="#">UserAccounts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    
  )
}

export default clientSidebar