import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../utils/ApiFunctions'
import ProductCard from './ProductCard'
import ProductFilter from '../common/ProductFilter'
import ProductPaginator from '../common/ProductPaginator'
import { Container , Row , Col } from 'react-bootstrap'

const Product = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const[currentPage,setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(6)
    const [filteredData, setFilteredData] = useState([{id:""}])

useEffect(() =>{
    setIsLoading(true)
    getAllProducts().then((data) => {
        setData(data)
        setFilteredData(data)
        setIsLoading(false)
    }).catch((error)=>{
        setError(error.message)
        setIsLoading(false)

    })
}, [])
    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div className='text-danger'>Error: {error}</div> 
    }

    const handlePageChange = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    const totalPages = Math.ceil(filteredData.length/ itemsPerPage)

    const renderProducts = () => {
        const startIndex = (currentPage -1) * itemsPerPage
        const endIndex = currentPage * itemsPerPage
        return filteredData
        .slice(startIndex, endIndex)
        .map((product)=> <ProductCard key={product.id} product={product}/>)
    }

  return (
    <Container>
        <Row>
            <Col md={6} className='mb-3 mb-md-0'>
                <ProductFilter data={data} setFilteredData={setFilteredData}/>
            </Col>

            <Col md={6} className="d-flex align-items-center justify-content-end">
                <ProductPaginator 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </Col>
        </Row>

        <Row>{renderProducts()}</Row>

        <Col md={6} className="d-flex align-items-center justify-content-end">
                <ProductPaginator 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
        </Col>
    </Container>
  )
}

export default Product