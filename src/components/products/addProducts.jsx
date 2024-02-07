import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import {addProduct} from "../utils/ApiFunctions"
import ProductTypeSelector from '../common/ProductTypeSelector'

const addProducts = () => {
  const [newProduct, setnewProduct] = useState({
    photo : null,
    catergory:"",
    price:"",
  })

  const [imagePreview, setImagePreview] = useState("")
  const [successMessage,setSucessMessage] = useState("")
  const [errorMessage,setErrorMessage] = useState("")

  const handleProductInputChange = (e)=>{
    const name = e.target.name
    let value = e.target.value
    if(name === "price" ){
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
      const sucess = await addProduct(newProduct.photo,newProduct.catergory, newProduct.price);
      if(sucess !==undefined){
        setSucessMessage("A new Product was added to the list")
        setnewProduct({photo: null, category:"", price:""})
        setImagePreview("")
        setErrorMessage("")
      }else{
        setErrorMessage("Error Adding a Product")
      }
    }catch(error){
      setErrorMessage(error.message)
    }
    setTimeout(()=> {
      setSucessMessage("")
      setErrorMessage("")
    },3000)
  }

  return (
    <>
    <section className='container mt-5 mb-3'>
      <div className='row justify-content-center'>
        <div className='col-md-8 col-lg-6'>
          <h2 className='mt-5 mb-2'>Add New Product</h2>
          {successMessage && (
            <div className='alert alert-sucess fade show'>{successMessage}</div>
          )}
          {errorMessage && (
            <div className='alert alert-danger fade show'>{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit} >
            <div className='mb-3'>
              <label htmlFor="catergory" className="form-label">Catergory</label>
              <div>
                <ProductTypeSelector handleProductInputChange={handleProductInputChange} newProduct={newProduct}/>
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor="price" className="form-label">Product Price</label>
              <input
                className ="form-control"
                id ="price"
                name="price"
                onChange={handleProductInputChange}
                 />
              
            </div>
            <div className='mb-3'>
              <label htmlFor="photo" className="form-label">Photo</label>
              <input 
                id='photo'
                name='photo'
                type='file'
                className='form-control'
                onChange={handleImageChange}
               />
               {imagePreview && (<img src={imagePreview} alt='product photo' style={{maxWidth:"400px", maxHeight:"400px"}}
                className='mb-3'/>
               ) }
            </div>
            <div className='d-grid d-md-flex mt-2'>
              <Link to={"/existing-products"} className="btn btn-outline-info">
                Back
              </Link>
              <button className='btn btn-outline-primary ml-5'>Save Product</button>
            </div>

          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default addProducts
