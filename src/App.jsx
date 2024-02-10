import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import AddProduct from "./components/products/addProducts";
import ExistingProducts from "./components/products/ExistingProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/homepage";
import EditProduct from "./components/products/EditProduct";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import ProductListing from "./components/products/ProductListing";
import Admin from "./components/admin/Admin";
import CheckOut from "./components/common/CheckOut";
import HospitalServices from "./components/common/HospitalServices";
import ContactForm from "./ContactUs/ContactForm";
import AttendancePage from "./pages/attendance/AttendancePage";

function App() {
  return (
    <>
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-product/:productId" element={<EditProduct />} />
            <Route path="/existing-products" element={<ExistingProducts />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/hospital-services" element={<HospitalServices />} />
            <Route path="/book-appointment" element={<CheckOut />} />
            <Route path="/browse-all-products" element={<ProductListing />} />
            <Route path="/Admin" element={<AttendancePage />} />
            <Route path="/appointment-form" element={<ContactForm />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
