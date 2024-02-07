import React from 'react'
import { Col , Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <Col key={product.id} className='mb-4' xs={12}>
        <Card>
            <Card.Body className="d-flex flex-wrap align-items-ceneter">
                <div className='flex-shrink-0 mr-3 mb-3 mb-md-0'>
                    <Link to={`productcart/${product.id}`} className='btn btn-product btn-sm'>
                        <Card.Img
                            variant='top'
                            src={`data:image/png;base64, ${product.photo}`}
                            alt='Product Photo'
                            style={{width:"100%", maxWidth: "200px", height : "auto"}}
                        />
                    </Link>
                    
                </div>
                <div className='flex-grow-1 ml-3 px-5'>
                    <Card.Title className='product-color'>{product.catergory}</Card.Title>
                    <Card.Title className='product-price'>{product.price}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </div>
                <div className='flex-shrink-0 mt-3'>
                    <Link to={`productcart/${product.id}`} className='btn btn-product btn-sm'>
                        Add To Cart
                    </Link>

                </div>

            </Card.Body>
        </Card>
    
    </Col>
  )
}

export default ProductCard