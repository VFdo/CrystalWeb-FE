import React, {useState} from 'react'


const AppointmentFilter = ({data, setFilteredData}) => {
    const [filter,  setFilter] = useState('')

    const handleSelectChange = (e) => {
        const selectedDate = e.target.value
        setFilter(selectedDate)
        const filteredProducts = data.filter((appointment) => {
          const appointmentDate = new Date(appointment.date)
          const appointmentDateObj = new Date(appointmentDate)
          return appointmentDate.getFullYear() === appointmentDateObj.getFullYear() &&
          appointmentDate.getMonth() === appointmentDateObj.getMonth() &&
          appointmentDate.getDate() === appointmentDateObj.getDate()
        })
        setFilteredData(filteredProducts)
      }
    const clearFilter = () =>{
        setFilter("")
        setFilteredData(data)
    }
    const dateOptions = ["", ...new Set(data.map((product) => product.date))]
  return (
    <div className='input-group mb-3'>
        <span className="input-group-text" id='room-type-filter'>
            Filter Products By Catergory
        </span>
        <select 
            className='date-select'
            value={filter}
            onChange={handleSelectChange}>
                <option value={""}>Select a Date</option>
                {dateOptions.map((type,index)=>(
                    <option key={index} value={String(type)}>
                        {String(type)}
                    </option>
                ))} 
        </select>
        <button className='btn btn-product' type='button' onClick={clearFilter}>Clear Filter</button>
    </div>
  )
}

export default AppointmentFilter