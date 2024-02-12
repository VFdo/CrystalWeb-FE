import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import AddProduct from "./components/products/addProducts"
import ExistingProducts from "./components/products/ExistingProducts";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/Home/homepage"
import EditProduct from "./components/products/EditProduct";
import  NavBar from './components/layout/NavBar';
import ProductListing from "./components/products/ProductListing";
import CheckOut from "./components/common/CheckOut";
import HospitalServices from "./components/common/HospitalServices";
import ContactForm from "./ContactUs/ContactForm";
import AboutUs from "./components/common/AboutUs";
import ContactSucess from "./ContactUs/ContactSucess"
import AppointmentForm from "./components/Appointment/AppointmentForm";
import ExistingAppointments from "./components/Appointment/ExistingAppointments";
import TestiMonials from "./components/Testimonials/TestiMonials";
import Login from "./components/Auth/Login.jsx";
import Registraion from "./components/Auth/Registration.jsx";
import Profile from "./components/Auth/Profile.jsx";
import InventoryHistory from "./pages/inventory/InventoryHistory.jsx";
import InventoryDetailsForm from "./pages/inventory/InventoryDetailsForm.jsx";
import AdminView from "./pages/employee/AdminView.jsx";
import EmployeeHistory from "./pages/employee/EmployeeHistory.jsx";
import EmployeeDetailsForm from "./pages/employee/EmployeeDetailsForm.jsx";
import BillHistory from "./pages/bill/BillHistory.jsx";
import AttendanceHistory from "./pages/employee/AttendanceHistory.jsx";
import BillDetailsForm from "./pages/bill/BillDetailsForm.jsx";


function App() {  
  return (
    <>
    <main>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/edit-product/:productId" element={<EditProduct/>}/>
          <Route path="/existing-products" element={<ExistingProducts/>}/>
          <Route path="/add-product" element={<AddProduct/>}/>
          <Route path="/hospital-services" element={<HospitalServices/>}/>
          <Route path="/book-appointment" element={<AppointmentForm/>}/>
          <Route path="/existing-appointments" element={<ExistingAppointments/>}/>
          <Route path="/products/all-products" element={<ProductListing/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contact-form" element={<ContactForm/>}/>
          <Route path="/testimonials" element={<TestiMonials/>}/>
          <Route path="/message-success" element={<ContactSucess/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Registraion/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/employee-create" element={<EmployeeDetailsForm/>}/>
          <Route path="/employee-update" element={<EmployeeDetailsForm/>}/>
          <Route path="/employee-history" element={<EmployeeHistory/>}/>
          <Route path="/bill-create" element={<BillDetailsForm/>}/>
          <Route path="/bill-update" element={<BillDetailsForm/>}/>
          <Route path="/bill-history" element={<BillHistory/>}/>
          <Route path="/inventory-create" element={<InventoryDetailsForm/>}/>
          <Route path="/inventory-update" element={<InventoryDetailsForm/>}/>
          <Route path="/inventory-history" element={<InventoryHistory/>}/>
          



          
        </Routes>
      </Router>
    </main>
    
    </>
  )
  
   
}

export default App
