import React, { useState } from 'react';
import { useEffect } from 'react';
import { getProductCatergory } from '../utils/ApiFunctions';

const ProductTypeSelector = ({handleProductInputChange, newProduct}) => {
    const [productTypes, setProductTypes] = useState([""]);
    const [showNewProductTypeInput, setShowNewProductTypesInput] = useState(false)
    const [newProductType, setNewProductType] = useState("")

    useEffect(()=>{
        getProductCatergory().then((data)=>{setProductTypes(data)})
    }, [])
    const handleNewProductTypeInputChange = (e) =>{
        setNewProductType(e.target.value);
    }

    const handleAddNewProductType=()=>{
        if (newProductType !==""){
            setProductTypes([...productTypes, newProductType])
            setNewProductType("");
            setShowNewProductTypesInput(false)
        }
    }
  return (
    <>
    {productTypes.length > 0 && (
        <div>
        <select 
        name="productType" 
        id="productType"
        value={newProduct.newProductType}
        onChange={(e)=>{
            if(e.target.value === "Add New"){
                setShowNewProductTypesInput(true)
            }else{
                handleProductInputChange(e)
            }
        }}
        >
            <option value={""}>select a Product Catergory</option>
            <option value={"Add New"}>Add New</option>
            {productTypes.map((type, index)=>(<option key={index} value={type}>{type}</option>))}

        </select>
        {showNewProductTypeInput && (
            <div className='input-group '>
                <input 
                    className='form-control'
                    type="text" 
                    placeholder='Enter the new product catergory here...'
                    onChange={handleNewProductTypeInputChange}
                />
                <button onClick={handleAddNewProductType} className='btn btn-product' type='button'>
                    Add
                </button>
            </div>
        )}
        </div>
    )}
    </>
  )
}

export default ProductTypeSelector