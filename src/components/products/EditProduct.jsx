import React, { useState } from 'react';
import { getProductbyID,updateProduct } from '../utils/ApiFunctions';
import { Link, useParams } from 'react-router-dom';
import ProductTypeSelector from '../common/ProductTypeSelector'

const EditProduct = () => {
    const [productData, setProductData] = useState({
        photo : null,
        productType:"",
        productPrice:"",
      })
    
      const [imagePreview, setImagePreview] = useState("")
      const [successMessage,setSuccessMessage] = useState("")
      const [errorMessage,setErrorMessage] = useState("")

      const{productId} = useParams()

      const handleImageChange=(e) =>{
        const selectedImage = e.target.files[0]
        setProductData({...productData, photo : selectedImage})
        setImagePreview(URL.createObjectURL(selectedImage))
      }

      const handleInputChange = (event)=>{
        const {name,value} = event.target
        setProductData({...productData, [name]: value})
      }
      useEffect(()=>{
        const fetchProduct = async() =>{
            try{
                const productData = await getProductbyID(productId)
                setProductData(productData)
                setImagePreview(productData.photo)
            }catch(error){
                console.error(error)
            }
        }

        fetchProduct()
    },[productId])
      
      const handleSubmit =async(event) =>{
        event.preventDefault()
        try{
          const response = await updateProduct(productId, productData);
          if(response.status === 200){
            setSuccessMessage("Product Updated Successfully")
            const updatedProductData = await getProductbyID(productId)
            setProductData(updatedProductData)
            setImagePreview(updatedProductData.photo)
            setErrorMessage("")
          }else{
            setErrorMessage("Error updating the Product")
          }
        }catch(error){
          setErrorMessage(error.message)
          console.error(error)
          setErrorMessage('Error updating product')
        }
        setTimeout(()=> {
          setSuccessMessage("")
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
                    <ProductTypeSelector handleProductInputChange={handleInputChange} product={productData}/>
                  </div>
                </div>
                <div className='mb-3'>
                  <label htmlFor="price" className="form-label">Product Price</label>
                  <input
                    type='number'
                    className ="form-control"
                    id ="price"
                    name="price"
                    value={productData.productPrice}
                    onChange={handleInputChange}
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
                    className='mt-3'/>
                   ) }
                </div>
                <div className='d-grid d-md-flex mt-2'>
                    <Link to={"/existing-products"} className='btn btn-outline-info ml-5'></Link>
                  <button className='btn btn-outline-primary ml-5' type='submit'>Edit Product</button>
                </div>
    
              </form>
            </div>
          </div>
        </section>
        </>
      )
    }

export default EditProduct