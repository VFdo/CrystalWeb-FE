import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import AddProduct from "./components/products/addProducts";
import ExistingProducts from "./components/products/ExistingProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/homepage";
import EditProduct from "./components/products/EditProduct";
import NavBar from "./components/layout/NavBar";
import ProductListing from "./components/products/ProductListing";
import CheckOut from "./components/common/CheckOut";
import HospitalServices from "./components/common/HospitalServices";
import ContactForm from "./ContactUs/ContactForm";
import AboutUs from "./components/common/AboutUs";
import ContactSucess from "./ContactUs/ContactSucess";
import AppointmentForm from "./components/Appointment/AppointmentDetailsForm.jsx";
import ExistingAppointments from "./components/Appointment/ExistingAppointments";
import TestiMonials from "./components/Testimonials/TestiMonials";
import Registraion from "./components/Auth/Registration.jsx";
import Profile from "./components/Auth/Profile.jsx";
import AttendanceForm from "./components/Attendance/AttendanceForm.jsx";
import AppointmentHistory from "./pages/pet/AppointmentHistory.jsx";
import AttendancePage from "./components/Attendance/AttendancePage.jsx";
import PetDetailsForm from "./pages/pet/PetDetailsForm.jsx";
import PetPage from "./pages/pet/PetPage.jsx";
import TreatementHistory from "./pages/pet/TreatementHistory.jsx";
import AddPetForm from "./pages/pet/AddPetForm.jsx";
import ChatComponent from "./pages/pet/ChatComponent.jsx";
import AppointmentDetailsForm from "./components/Appointment/AppointmentDetailsForm.jsx";
import Login from "./components/Auth/Login.Jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/layout/Footer.jsx";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#228B22",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <main>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/edit-product/:productId"
                element={<EditProduct />}
              />
              <Route path="/existing-products" element={<ExistingProducts />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/hospital-services" element={<HospitalServices />} />
              <Route
                path="/book-appointment"
                element={<AppointmentDetailsForm />}
              />
              <Route
                path="/existing-appointments"
                element={<ExistingAppointments />}
              />
              <Route
                path="/products/all-products"
                element={<ProductListing />}
              />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-form" element={<ContactForm />} />
              <Route path="/testimonials" element={<TestiMonials />} />
              <Route path="/message-success" element={<ContactSucess />} />
              {/* <Route path="/login" element={<Login/>}/> */}
              <Route path="/register" element={<Registraion />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/pet" element={<PetPage />} />
              <Route path="/medical-records" element={<TreatementHistory />} />
              <Route path="/pet-update" element={<PetDetailsForm />} />
              <Route path="/pet-add" element={<AddPetForm />} />
            </Routes>
          </Router>
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
