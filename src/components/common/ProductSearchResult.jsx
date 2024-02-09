import React, { useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import ProductCard from '../products/ProductCard'
import ProductPaginator from './ProductPaginator'

const ProductSearchResult = ({results, onClearSearch}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const resultsPerPage = 3
    const totalResults = results.length()
    const totalPages = Math.ceil(totalResults / resultsPerPage)


    const handlePageChange = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage
    const paginatedResult = results.slice(startIndex,endIndex)
  return (
    <>
    {results.length > 0 ? (
        <>
        <h5 className='text-center mt-5'>Search Results</h5>
        <Row>
            {paginatedResult.map((product)=>{
                <ProductCard  key={product._id} product={product} />
            })}
        </Row>
        <Row>
            {totalResults > resultsPerPage && (
                <ProductPaginator
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}/>
            )}
             <Button variant='secondary' onClick={onClearSearch}>
                clear Search
            </Button>
        </Row>
        </>
    ):(
        <p></p>
    )}
   
    </>
  )
}

export default ProductSearchResult