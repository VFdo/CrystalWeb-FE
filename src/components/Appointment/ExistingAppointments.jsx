import React, {useEffect, useState} from 'react'
import { getAllAppointments, deleteAppointment } from '../utils/ApiFunctions';
import ProductPaginator from '../common/ProductPaginator';
import { Col,Row } from 'react-bootstrap';
import {FaTrashAlt,FaEye,FaEdit,FaPlus} from "react-icons/fa"
import {Link} from "react-router-dom"
import AppointmentFilter from '../common/AppointmentFilter';

const ExistingAppointments = () => {
    const [appointments, setAppointments] = useState([])
    const[currentPage,setCurrentPage] = useState(1)
    const[itemsPerPage, setItemsPerPage]= useState(8);
    const[isLoading, setIsloading] = useState(false) 
    const [filteredAppointments,setFilteredAppointments] = useState([])
    const [selectedCheckInDate, setSelectedCheckInDate] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

useEffect(()=>{
    fetchAppointments()
},[])

const fetchAppointments = async() =>{
    setIsloading(true)
    try{
        const result = await getAllAppointments()
        setAppointments(result)
        setIsloading(false)
    }catch(error){
        setErrorMessage(error.message)
    }
}
    useEffect(()=>{
        if(selectedCheckInDate===""){
            setSelectedCheckInDate(appointments)
        }else{
            const filtered = appointments.filter((appointment)=> appointment.checkInDate === selectedCheckInDate )
            setFilteredProducts(filtered)
        }
        setCurrentPage(1)
    },[appointments,selectedCheckInDate])

const handlePaginationClick = (pageNumber) =>{
    setCurrentPage(pageNumber)
}
const handleDelete = async(appointmentId) =>{
    try{
       const result=await deleteAppointment(appointmentId)
       if(result === ""){
        setSuccessMessage(`Deleted Appointment with ID: ${appointmentId}`)
        fetchAppointments()
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
const calculateTotalPages = (filteredAppointments,itemsPerPage,appointments)=>{
    const totalProducts = filteredAppointments.length > 0 ? filteredAppointments.length  : appointments.length;
    return Math.ceil(totalProducts / itemsPerPage)
}

const indexofLastProduct = currentPage * itemsPerPage
const indexofFirstProduct = indexofLastProduct - itemsPerPage
const currentProducts = filteredAppointments.slice(indexofFirstProduct, indexofLastProduct)
  return (
    <>
    <Row>
        <h3 className='text-center mt-2'>
            <span className='product-color'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span>
        </h3>
    </Row>
    <hr />
    {isLoading} ?(
        <p>Loading Existing Appointments</p>
    ):(
        <>
        <section className='mt-5 mb-5 container'>
            
            <div className='d-flex justify-content-between mb-3 mt-5'>
                <h2>Existing  Appointments </h2>
            </div>
            <Row>
                <Col md ={6} className="mb-3 mb-md-0">
                    <AppointmentFilter data={appointments} setFilteredData={setFilteredAppointments}/>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <Link to={"/book-appointment"}>
                        <FaPlus/> Add an Appointment
                    </Link>
                </Col>
            </Row>

            

            <table className='table table-bordered table-hover'>
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>Client Name</th>
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                        <th>Numer of Pets</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {currentProducts.map((appointment)=>(
                    <tr key={appointment.id} className='text-center' >
                        <td>{appointment.id}</td>
                        <td>{appointment.clientName}</td>
                        <td>{appointment.checkInDate}</td>
                        <td>{appointment.checkInTime}</td>
                        <td>{appointment.numberOfPets}</td>
                        <td>{appointment.emailAddress}</td>
                        <td>{appointment.phoneNumber}</td>
                        <td className='gap-2'>
                            <Link to ={`/edit-appointments/${product.id}`}>View/Edit
                                <span className='btn btn-info btn-sm'><FaEye/></span>
                                <span className='btn btn-warning btn-sm'><FaEdit/></span>

                            </Link>
                            <button
                                className='btn btn-danger btn-sm'
                                onClick={()=>handleDelete(appointment.id)}
                            ><FaTrashAlt/></button>
                        </td>

                    </tr>
                   ))}
                </tbody>
            </table>
            <ProductPaginator
                currentPage = {currentPage}
                totalPages = {calculateTotalPages(filteredAppointments,itemsPerPage,products)}
                onPageChange = {handlePaginationClick}
            />
            <hr />
        </section>
   
        </>
    )
       
    </>
  )
}

export default ExistingAppointments