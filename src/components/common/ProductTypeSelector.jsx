import React, { useState } from 'react';
import { useEffect } from 'react';
import { getProductCatergory } from '../utils/ApiFunctions';

const ProductTypeSelector = ({handleProductInputChange, newProduct}) => {
    const [productTypes, setProductTypes] = useState([""]);
    const [showNewProductTypeInput, setShowNewProductTypesInput] = useState(false)
    const [newProductType, setnewProductType] = useState("")

    useEffect(()=>{
        getProductCatergory().then((data)=>{setProductTypes(data)})
    }, [])
    const handleNewProductInputChange = (e) =>{
        setnewProductType(e.target.value);
    }

    const handleAddNewProductType=()=>{
        if (newProductType !==""){
            setProductTypes(...productTypes, newProductType)
            setnewProductType("");
            setShowNewProductTypesInput(false)
        }
    }
  return (
    <>
    {productTypes.length > 0 && (
        <div>
        <select name="productType" id="productType"></select>
        </div>
    )}
    </>
  )
}

export default ProductTypeSelector