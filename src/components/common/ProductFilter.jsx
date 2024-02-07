import React, {useState} from 'react'


const ProductFilter = ({data, setFilteredData}) => {
    const [filter,  setFilter] = useState('')

    const handleSelectChange = (e) =>{
        const selectedProductType = e.target.value
        setFilter(selectedProductType)
        const filteredProducts = data.filter((product)=> product.type.toLowerCase().includes(selectedProductType.toLowerCase()))
        setFilteredData(filteredProducts)
    }
    const clearFilter = () =>{
        setFilter("")
        setFilteredData(data)
    }
    const productTypes = ["",...new Set(data.map((product)=>product.type))]
  return (
    <div className='input-group mb-3'>
        <span className="input-group-text" id='room-type-filter'>
            Filter Products By Catergory
        </span>
        <select 
            className='form-select'
            value={filter}
            onChange={handleSelectChange}>
                <option value={""}>Select a Catergory</option>
                {productTypes.map((type,index)=>(
                    <option key={index} value={String(type)}>
                        {String(type)}
                    </option>
                ))} 
        </select>
        <button className='btn btn-product' type='button' onClick={clearFilter}>Clear Filter</button>
    </div>
  )
}

export default ProductFilter