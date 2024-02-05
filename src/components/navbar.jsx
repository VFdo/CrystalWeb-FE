import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png'
import React, {useState} from 'react'
import {Link} from 'react-scroll'
import Register from '../components/register';
import Login from '../components/login'

const navbar = () => {
  const [click,setClick]=useState(false)
  const handleClick =()=>setClick(!click)

  const closeMenu =()=> setClick(false)

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar bg='light' variant='light' expand="lg" sticky='top' className='header-upper shadow-sm'>
        <Container>
          <Navbar.Brand href="#home" className='logo'><img src={Logo} alt="logo here" className='logo'/></Navbar.Brand>
          <Navbar.Brand href="#home" className='col-4 d-flex align-items-center'><h4 className='logo-text'><span>CRYSTAL</span><br /><h6 className='text2'>Animal Hospital</h6></h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="nav-links col-4 d-flex align-items-center justify-content-center">
              <Nav.Link onClick={handleClick} href='/' className='active text-uppercase'>Home</Nav.Link>
              <Nav.Link onClick={handleClick} href='about' className='text-uppercase'>About</Nav.Link>
              <Nav.Link onClick={handleClick} href='services' className='text-uppercase'>Services</Nav.Link>
              <Nav.Link onClick={handleClick} href='shop' className='text-uppercase'>Shop</Nav.Link>
              <Nav.Link onClick={handleClick} href='contact' className='text-uppercase'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex align-items-right justify-content-between">
            <Register/>
            <Login/>
        </Form>
        </Container>
      </Navbar>
  )
}

export default navbar