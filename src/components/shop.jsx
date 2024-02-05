import React from 'react'
import Paw from '../assets/paw.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import food1 from '../assets/food1.png';
import food2 from '../assets/food2.png';
import food3 from '../assets/food3.png';
import Navbar from '../components/navbar'

function shop () {
  return (

    <section id='shop' className="shop-wrapper p-5">
    <Navbar/>
    <div className="container-xxl">
      <div className="row">
      <div className="col-12 text-center">
            <h1 className="text">Pet Store & Pharmacy</h1>
            <p className=' text2 fs-3'>Premium  Quality Pet Food and Medicine for Your Furry Friend! </p>
        </div>
      </div>
    <Row>
        <Card style={{ width: '15rem'}} className='d-flex col-4  mx-auto my-2 shadow-sm rounded'>
        <Card.Img variant="top" src={food1} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary"  className='login'>Buy Now</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: '15rem' }} className='d-flex col-4  mx-auto my-2 shadow-sm rounded'>
        <Card.Img variant="top" src={food2} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary"  className='login'>Buy Now</Button>
        </Card.Body>
         </Card>
         <Card style={{ width: '15rem' }} className='d-flex col-4  mx-auto my-2 shadow-sm rounded'>
             <Card.Img variant="top" src={food3} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary"  className='login text-center'>Buy Now</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '15rem'}} className='d-flex col-4  mx-auto my-2 shadow-sm rounded'>
             <Card.Img variant="top" src={food2} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className='login'>Buy Now</Button>
            </Card.Body>
        </Card>
    </Row>
    <Form className="store col-12 text-center gap-4">
            <Button variant="outline-success" className='register'>Vist Store</Button>
    </Form>
    </div>
  </section>
  )
}

export default shop