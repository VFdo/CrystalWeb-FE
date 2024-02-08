import React, {useEffect, useState} from 'react'
import { getAllProducts, deleteProduct } from '../utils/ApiFunctions';
import ProductFilter from '../common/ProductFilter';
import ProductPaginator from '../common/ProductPaginator';
import { Col,Row } from 'react-bootstrap';
import {FaTrashAlt,FaEye,FaEdit,FaPlus} from "react-icons/fa"
import {Link} from "react-router-dom"

const ExistingProducts = () => {
    const [products, setProducts] = useState([])
    const[currentPage,setCurrentPage] = useState(1)
    const[itemsPerPage, setItemsPerPage]= useState(8);
    const[isLoading, setIsloading] = useState(false) 
    const [filteredProducts,setFilteredProducts] = useState([])
    const [selectedProductType, setSelectedProductType] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

useEffect(()=>{
    fetchProducts()
},[])

const fetchProducts = async() =>{
    setIsloading(true)
    try{
        const result = await getAllProducts()
        setProducts(result)
        setIsloading(false)
    }catch(error){
        setErrorMessage(error.message)
    }
}
    useEffect(()=>{
        if(selectedProductType===""){
            setFilteredProducts(products)
        }else{
            const filtered = products.filter((product)=> product.productType === selectedProductType )
            setFilteredProducts(filtered)
        }
        setCurrentPage(1)
    },[products,selectedProductType])

const handlePaginationClick = (pageNumber) =>{
    setCurrentPage(pageNumber)
}
const handleDelete = async(productId) =>{
    try{
       const result=await deleteProduct(productId)
       if(result === ""){
        setSuccessMessage(`Deleted Product with ID: ${productId}`)
        fetchProducts()
        }else{
            console.error(`Error Deleting : ${result.message}`)
        }
    }catch(error){
        setErrorMessage(error.message)
    }
    setTimeout(()=>{
        setSuccessMessage("")
        setErrorMessage("")
    },3000)
}
const calculateTotalPages = (filteredProducts,itemsPerPage,products)=>{
    const totalProducts = filteredProducts.length > 0 ? filteredProducts.length  : products.length;
    return Math.ceil(totalProducts / itemsPerPage)
}

const indexofLastProduct = currentPage * itemsPerPage
const indexofFirstProduct = indexofLastProduct - itemsPerPage
const currentProducts = filteredProducts.slice(indexofFirstProduct, indexofLastProduct)
  return (
    <>
    <Row>
        <h3 className='text-center mt-2'>
            <span className='product-color'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span>
        </h3>
    </Row>
    <hr />
    {isLoading} ?(
        <p>Loading Existing products</p>
    ):(
        <>
        <section className='mt-5 mb-5 container'>
            
            <div className='d-flex justify-content-between mb-3 mt-5'>
                <h2>Existing  Products </h2>
            </div>
            <Row>
                <Col md ={6} className="mb-3 mb-md-0">
                    <ProductFilter data={products} setFilteredData={setFilteredProducts}/>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <Link to={"/add-product"}>
                        <FaPlus/> Add Product
                    </Link>
                </Col>
            </Row>

            

            <table className='table table-bordered table-hover'>
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>Product Catergory</th>
                        <th>Product Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {currentProducts.map((product)=>(
                    <tr key={product.id} className='text-center' >
                        <td>{product.id}</td>
                        <td>{product.productType}</td>
                        <td>{product.productPrice}</td>
                        <td className='gap-2'>
                            <Link to ={`/edit-products/${product.id}`}>View/Edit
                                <span className='btn btn-info btn-sm'><FaEye/></span>
                                <span className='btn btn-warning btn-sm'><FaEdit/></span>

                            </Link>
                            <button
                                className='btn btn-danger btn-sm'
                                onClick={()=>handleDelete(product.id)}
                            ><FaTrashAlt/></button>
                        </td>

                    </tr>
                   ))}
                </tbody>
            </table>
            <ProductPaginator
                currentPage = {currentPage}
                totalPages = {calculateTotalPages(filteredProducts,itemsPerPage,products)}
                onPageChange = {handlePaginationClick}
            />
            <hr />
        </section>
   
        </>
    )
       
    </>
  )
}

export default ExistingProducts