import React, { useState } from 'react'

const ProductSearch = () => {
    const [SearchQuery, setSearchQuery] = useState({
        productPrice : "",
        productType : "",
    })

    const[errorMessage,setErrorMessage]=useState("")
    const[availableProducts,setAvailableProducts]=useState([])
    const[isLoading,setIsLoading] = useState(false)

    const handleSearch = (e) =>{
        
    }
  return (
    <div>ProductSearch</div>
  )
}

export default ProductSearch