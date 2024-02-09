import React, { useEffect, useState } from 'react'
import AppointmentForm from '../Appointment/AppointmentForm'
import { getProductbyID } from '../utils/ApiFunctions'
import { useParams } from 'react-router-dom'
import { FaUtensils } from 'react-icons/fa'

const CheckOut = () => {
  const[error,setError] = useState("")
  const [isLoading,setIsloading]=useState(true)
  const [appointmentInfo,setAppointmentInfo]=useState({photo: null, clientName:"", phoneNumber:"",
                            emailAddress:"",checkInDate:"",checkInTime:"",numberOfPets:""})

  const {productId} = useParams()

useEffect(()=>{
  setTimeout(()=>{
    getProductbyID(productId).then((response)=>{
      setProductInfo(response)
      setIsloading(false)
    }).catch((error)=>{
      setError(error)
      setIsloading(false)
    })
  },1000)
},[productId])

  return (
    <div>
        <section className='Container'>
          <div className='row flex-column flex-md-row align-items-center'>
            <div className='col-md-4 mt-5 mb-5'>
              {isLoading ? (
                <p>Loading...</p>
              ):error ? (
                <p>{error}</p>
              ):(
                <div className='product-info'>
                  <img 
                  src={`data:image/png;base64,${appointmentInfo.photo}`} 
                  alt="photo" 
                  style={{width:'100%', height:'200px'}}/>
                 <table>
                  <tbody>
                    <tr>
                      <th>Product Type : </th>
                      <th>productInfo.productType</th>
                    </tr>
                    <tr>
                      <th>Product Price : </th>
                      <th>productInfo.productPrice</th>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li><FaUtensils/> Breakfast for your companion</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                 </table>

                </div>
              )}
            </div>

          </div>


        </section>
    </div>
  )
}

export default CheckOut