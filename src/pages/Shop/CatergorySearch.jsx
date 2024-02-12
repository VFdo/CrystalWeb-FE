import React, { useEffect } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import ProductFilter from '../../components/common/ProductFilter'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProductPaginator from '../../components/common/ProductPaginator'
import { getAllProducts } from '../../components/utils/ApiFunctions';

   
    

const CatergorySearch = () => {
  return (
    <section className='mt-5 mb-5 container'>
        <hr />
            <Row>
                <Col lassName='d-flex justify-content-between mb-3 mt-5'>
                
                    <h2 >Trending  Products </h2>
                
                </Col>
                
                <Col className='d-flex justify-content-end'>
                    <Link to={"/add-product"} > 
                        <FaCartPlus className='product-color  cart-icon' size={40} />
                    </Link>
                </Col>
            </Row>
            <div>
            
            <hr />
            </div>
        </section>
       
  )
}

export default CatergorySearch