import React from 'react'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {addProduct} from "../utils/ApiFunctions"
import ProductTypeSelector from '../common/ProductTypeSelector'
import { Row ,Card,Button} from 'react-bootstrap'
import Header from '../common/Header'

const addProducts = () => {
  const [newProduct, setnewProduct] = useState({
    photo : null,
    productType:"",
    productPrice:"",
  })

  const [imagePreview, setImagePreview] = useState("")
  const [successMessage,setSuccessMessage] = useState("")
  const [errorMessage,setErrorMessage] = useState("")

  const handleProductInputChange = (e)=>{
    const name = e.target.name
    let value = e.target.value
    if(name === "productPrice" ){
      if(!isNaN(value)){
      value.parseInt(value)
  } else{
    value = ""
  }
  }
  setnewProduct({...newProduct, [name]: value})
  }
  
  const handleImageChange=(e) =>{
    const selectedImage = e.target.files[0]
    setnewProduct({...newProduct, photo : selectedImage})
    setImagePreview(URL.createObjectURL(selectedImage))
  }

  const handleSubmit =async(e) =>{
    e.preventDefault()
    try{
      const success = await addProduct(newProduct.photo,newProduct.productType, newProduct.productPrice);
      if(success !==undefined){
        setSuccessMessage("A new Product was added to the list")
        setnewProduct({photo: null, productType:"", productPrice:""})
        setImagePreview("")
        setErrorMessage("")
      }else{
        setErrorMessage("Error Adding a Product")
      }
    }catch(error){
      setErrorMessage(error.message)
    }
    setTimeout(()=> {
      setSuccessMessage("")
      setErrorMessage("")
    },3000)
  }

  return (
    <>
    <section className='container mt-5 mb-3'>
          <Row>
              <h4 className='text-center'>
                 <span className='product-color gap-2'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span>
                  <span className='gap-2 '>
                      <br /> Admin Panel - Add Products
                  </span>
              </h4>
          </Row>
        <hr />
      
      <div className='row justify-content-center'>
      <Card  style={{ width: "30rem", height:'32rem'}}>
          <Card.Body>
            <Card.Title className='product-color text-center'>
              Add New Product
            </Card.Title>
            <Card.Text >
            <div >
              {successMessage && (
                <div className='alert alert-sucess fade show'>{successMessage}</div>
              )}
              {errorMessage && (
                <div className='alert alert-danger fade show'>{errorMessage}</div>
              )}

              <form onSubmit={handleSubmit} >
                <div className='mb-3'>
                  <label htmlFor="productType" className="form-label logo-text">Catergory</label>
                  <div>
                    <ProductTypeSelector handleProductInputChange={handleProductInputChange} newProduct={newProduct}/>
                  </div>
                </div>
                <div className='mb-3'>
                  <label htmlFor="productPrice" className="form-label logo-text">Product Price</label>
                  <input
                    required
                    className ="form-control"
                    id ="productPrice"
                    name="productPrice"
                    onChange={handleProductInputChange}
                    />
                  
                </div>
                
                <div className='mb-3'>
                  <label htmlFor="photo" className="form-label logo-text">Photo</label>
                  <input 
                    id='photo'
                    name='photo'
                    type='file'
                    className='form-control'
                    onChange={handleImageChange}
                  />
                  {imagePreview && (<img src={imagePreview} alt='product photo' style={{maxWidth:"0", maxHeight:"0"}}
                    className='mb-3'/>
                  ) }
                </div>
                <div className='d-grid d-md-flex gap-3 mt-3'>
                  <NavLink className='nav-link mt-5' to={"/admin"}>
                  <Button variant="outline-success" className='login'>
                      Back
                  </Button>
                  </NavLink>
                  <Button variant="outline-success" className='login mt-5' onClick={handleSubmit}>Save Product</Button>
                </div>

              </form>
            </div>
            </Card.Text>
          </Card.Body>
        </Card>
        
      </div>
      <hr />
    </section>
    </>
  )
}

export default addProducts
