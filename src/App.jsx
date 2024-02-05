import './App.css';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Logo from './assets/logo.png';
import { useRef } from 'react';
import Register from './components/register';
import Login from './components/login'
import Appointment from './components/appointment'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Paw from './assets/paw.png'
import About from './assets/man.png'
import Grooming from './assets/grooming.png'
import DayCare from './assets/Daycare.png'
import Health from './assets/Healthcare.png'
import Hyginic from './assets/Hyginecare.png'
import Training from './assets/Training.png'
import Dog from './assets/dog.png'
import Row from 'react-bootstrap/Row';
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import playstore from './assets/play.jpg'
import appstore from './assets/app.jpg'
import visa from './assets/pay.png'
import map from './assets/map.png'


function App() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });

  };
  return (
    <div>
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
      <section id='home' className="banner">
        <div className="container-xxl">
          <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column justify-content-center ">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                      <div className='back-details'>
                      <p className='mb-3 text '> </p>
                      <h1>The Best Animal Hospital</h1>
                      <h2>For Your Companion</h2>

                      <p className='mb-3'>No one appreciates the very special genius of your conversation <br />as the pet does.</p>
                      <Appointment/>
                      </div>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>
      <section id='about' className="about-wrapper p-4">
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
    <section id='services' className="contact-wrapper p-5">
        <div className="container-xxl">
          <div className="row">
          <div className="col-12 text-center">
                    <img src={Paw} alt="image here"  className='paw d-flex align-items-right justify-content-between'/>
                <h1 className=" text">Services That We Offer</h1>
                <p className='text2 fs-3'>We are only a step away from you</p>
            </div>
          </div>
        </div>
        <Container>
          <Row>
          <Card style={{ width: '10rem' ,height:'10rem'}} className='card d-flex col-4  mx-auto my-2 shadow-sm rounded'>
                <Card.Img variant="top" src={DayCare} className='img'/>
                <Card.Body>
                    <Card.Title className='title'>Day Care</Card.Title>
                </Card.Body>
                
            </Card>
            <Card style={{ width: '10rem' ,height:'10rem'}} className='card d-flex col-4  mx-auto my-2 shadow-sm rounded'>
                <Card.Img variant="top" src={Grooming} className='img'/>
                <Card.Body>
                    <Card.Title className='title' >Grooming</Card.Title>
                </Card.Body>
                
            </Card>
            <Card style={{ width: '10rem' ,height:'10rem'}} className='card d-flex col-4  mx-auto my-2 shadow-sm rounded'>
                <Card.Img variant="top" src={Health} className='img'/>
                <Card.Body>
                    <Card.Title className='title'>Health Care</Card.Title>
                </Card.Body>
                
            </Card>
            <Card style={{ width: '10rem' ,height:'10rem'}} className='card d-flex col-4  mx-auto my-2 shadow-sm rounded'>
                <Card.Img variant="top" src={Hyginic} className='img'/>
                <Card.Body>
                    <Card.Title className='title'>Hyginic Care</Card.Title>
                </Card.Body>
                
            </Card>
            <Card style={{ width: '10rem' ,height:'10rem'}} className='card d-flex col-4  mx-auto my-2 shadow-sm rounded'>
                <Card.Img variant="top" src={Training} className='img'/>
                <Card.Body>
                    <Card.Title className='title'>Training</Card.Title>
                </Card.Body>
                
            </Card>
            
          </Row>
        </Container>
        <Container className='service_card'>
            <Row>
                <img src={Dog} alt="image here"  className='service_img d-flex' />
                <Card style={{ width: '25rem', height:'25rem'}} className='service_card d-flex col-1  mx-auto my-2 shadow-sm rounded'>
                <Card.Body>
                    <Card.Title>Dogs do speak, but only to those who know how to listen.</Card.Title>
                    <Card.Text>
                    Regular checkups, pet dental care, and grooming should all be a part of your family pet’s health care regimen to keep them looking and feeling their best. The goal of every pet parent is to maximise their furry friends’ health, wellbeing, 
                    and quality of life, and this is made possible by providing them with the best possible preventive care.
                    </Card.Text>
                    <Appointment/>
                </Card.Body>
                </Card>
            </Row>
        
        </Container>
        
      </section>
      <section ref={ref} id='contact' className="contacts-wrapper p-5">
          <div className="container-xxl">
            <div className="row">
            <div className="col-12 text-center">
                  <h1 className="text">Reach Out to Us</h1>
                  <p className=' text2 fs-3'>We are only a step away from you</p>
                  <img src={Paw} alt="image here"  className='paw d-flex align-items-right justify-content-between'/>
              </div>
            </div>
          </div>
        </section>

        <div className="contact-message p-0">
          <div className="container-xxl">
            <div className="row">
              <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
              <div className="card p-5">
              <h2 className='text-center mb-4'>Leave Us A message</h2>
              <div className=" d-flex align-items-center justify-content-center">
              <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                    <div className='col-12'>
                    <label htmlFor="exampleFormControlInput1" className="form-label mb-3">Enter Your Email address</label>
                          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                        
                    </div>
                    <div className="col-12">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Type in your message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      <div className='col-12 text-center gap-2'>
                      <button onClick={handleClick} id='button-link' type="submit" className='submit'>Submit</button>
                      </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </div>
        </div>
        <section className="news-letter p-5">
          <div className="container-xxl">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="d-flex flex-column align-items-center">
                  <h2 className='mb-3'>Sign Up for a Newsletter</h2>
                  <h5>Get email updates on all our <Link>special offers</Link></h5>
                </div>
              </div>
              <div className="col-md-6 details d-flex flex-column justify-content-center">
                <div className="input-group mb-2">
                  <input type="text" id='news-input' className="form-control" placeholder="@example.com" aria-label="@example.com" aria-describedby="basic-addon2" />
                  <Button className="login">Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id='footer' className='footer p-3'>
      <div className="container-xxl">
        <div className="row">
          <div className="row justify-content-center justify-content-md-start">
          <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
            <h2 className='footer-title mb-3'>Contact</h2>
            <div className='mb-2'>Address:  Muruthalawa, Peradeniya </div>
            <div className='mb-2'>Phone:  <a className='footer-tel' href="tel:+94767022508">Call us at +94 (76) 7022508</a> </div>
            <div className='mb-2'>Hours:  From 8 a.m To 6 p.m </div>
            <div className='mb-2'>Follow Us </div>
            <div className="socials d-flex gap-3">
              <Nav.Link to='https://twitter.com' id='footer-link' target='_blank' className='gap-3'><AiFillTwitterCircle /></Nav.Link>
              <Nav.Link to='https://facebook.com' id='footer-link' target='_blank' className='gap-3'><BsFacebook /></Nav.Link>
              <Nav.Link to='https://whatsapp.com' id='footer-link' target='_blank' className='gap-3'><BsFacebook /></Nav.Link>
          </div>
          </div>
          <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
            <h2 className='footer-title mb-2'>About</h2>
            <div className='mb-3'> <Nav.Link to='/about' id='footer-links'>About Us</Nav.Link>  </div>
            <div className='mb-3'> <Nav.Link id='footer-links'>Privacy Policy</Nav.Link>  </div>
            <div className='mb-3'> <Nav.Link id='footer-links'>Terms & Conditions</Nav.Link>  </div>
            <div className='mb-3'> <Nav.Link id='footer-links'>Fee Policy</Nav.Link>  </div>
          </div>
          <div className="col-md-2 col-lg-4">
            <h2 className='footer-title mb-2'>Install App</h2>
            <p className='mb-3'>Available On Google Play Services & App Store</p>
            <div className="className='mb-3 col-md-6 col-12 pay">
            <div className='mb-3'>
              <Nav.Link to='https://play.google.com' target='_blank'>
              <img src={playstore} alt="" />
              </Nav.Link>
          </div>
            <div className='mb-3'>
                <Nav.Link to='https://www.apple.com/app-store/' target='_blank'>
                  <img src={appstore} alt="" />
                </Nav.Link>
          </div>
          </div>
            <p className="mb-3">
              Payment Methods
            </p>
          <div className="pay">
            <Nav.Link to='https://www.paypal.com/signin' target='_blank'>
              <img src={visa} alt="" />
            </Nav.Link>
          </div>
          </div>
          <div className="map col-md-1 col-lg-1 mb-1 mb-md-0">
            <Nav.Link to='https://www.paypal.com/signin' target='_blank'>
              <img src={map} alt="" />
            </Nav.Link>
          </div>
          <hr className='my-4' />
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="text-center text-md-start">&copy;Developed by Ruwindya Dilshan 2023</p>
            </div>
            <div className="col-12 col-md-6">
            <ul className="list-inline text-center text-md-end">
              <li className="list-inline-item"><Nav.Link to="#" className="text-dark">Privacy Policy</Nav.Link></li>
              <li className="list-inline-item"><Nav.Link to="#" className="text-dark">Terms of Use</Nav.Link></li>
              <li className="list-inline-item"><Nav.Link to="#" className="text-dark">Contact Us</Nav.Link></li>
            </ul>
          </div>
          </div>
        </div>
      
      </div>
      </div>
    </footer>
    </div>
    
  )
}

export default App