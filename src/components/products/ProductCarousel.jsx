import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../utils/ApiFunctions'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'

const ProductCarousel = () => {

    const [product, setProducts] = useState([{Id:",productType",price:"", photo: ""}]) //default state for product array. 
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

useEffect(()=>{
    setIsLoading(true)
    getAllProducts().then((data)=>{
        setProducts(data)
        setIsLoading(false)
    }).catch((error)=>{
        setErrorMessage(error.message)
        setIsLoading(false)
    })
}, [])

if(isLoading){
    return <div className='mt-5'>Loading Products...</div>
}
if(errorMessage){
    return <div className='text-danger mt-5'> Error : {errorMessage}</div>
}
return (
    <section className='bg-light mb-5 mt-5 shadow'>
        <Link to={"/browse-all-products"} className='product-color text-center'>
            Browse all Products
        </Link>

        <Container>
            <Carousel indicators={false}>
                {[...Array(Math.ceil(product.length/4))].map((_, index)=>(
                    <Carousel.Item key={index}>
                        <Row>
                            {product.slice(index*4, index*4 + 4).map((product)=>{
                                <Col key={product.Id} className="mb-4" xs={12} md={6} lg={3}>
                                    <Card>
                                        <Link to={`/buy-product/${product.Id}`}>
                                            <Card.Img
                                                variant ='top'
                                                src={`data:image/png;base64, ${product.photo}`}
                                                alt = 'product photo'
                                                className='w-100'
                                                style={{height: "200px"}}
                                            />
                                        </Link>
                                        <Card.Body>


                                        </Card.Body>
                                    </Card>
                                </Col>
                            })}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    </section>
  )
}

export default ProductCarousel