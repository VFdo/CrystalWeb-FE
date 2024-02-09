import { Link } from "react-router-dom";
import React from 'react';
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <footer >
      <div className="footer container-fluid bg-light text-dark">
        <div className="row ">
          <div className="col-md-3 py-3">
            <div className="h6"><span className='product-color gap-2'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span></div>
            <hr />
            <p className="text-justify">
            Crystal Animal Hospital is a veterinary facility that provides medical care for pets. It may offer a range of services, including routine check-ups, vaccinations, dental care, diagnostic testing, surgery, treatment for illnesses and injuries, microchipping, grooming, 
            and boarding. The hospital's staff may include veterinarians, veterinary technicians, and receptionists.
            </p>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6 product-color"><span>Navigate</span></div>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-light text-white">
                <Link
                  to={"/"}
                  className="text-decoration-none text-dark stretched-link"
                >
                 Home
                </Link>
              </li>
              <li className="list-group-item bg-light text-white ">
                <Link
                  to={"/about-us"}
                  className="text-decoration-none text-dark stretched-link"
                >
                  About Us
                </Link>
              </li>
              <li className="list-group-item bg-light text-white ">
                <Link
                  to={"/hospital-services"}
                  className="text-decoration-none text-dark stretched-link"
                >
                  Services
                </Link>
              </li>
              <li className="list-group-item bg-light text-white ">
                <Link
                  to={"/browse-all-products"}
                  className="text-decoration-none text-dark stretched-link"
                >
                  Pet Store & Pharmacy
                </Link>
              </li>
              <li className="list-group-item bg-light text-dark ">
                <Link
                  to={"/contact-form"}
                  className="text-decoration-none text-dark stretched-link"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6 product-color">Policy</div>
            <hr />
            <ul className="list-group list-group-flush">
            <li className="list-group-item bg-light text-light ">
                <Link
                  to={"/"}
                  className="text-decoration-none text-dark stretched-link"
                >
                  Return Policy
                </Link>
                </li>
              <li className="list-group-item bg-light text-light ">
                <Link
                  to={"/"}
                  className="text-decoration-none text-dark stretched-link"
                >
                  Terms & Condition
                </Link>
                </li>
              
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6 product-color">Address</div>
            <hr />
            <address>
              <strong><span className='product-color g'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span></strong>
              <br />
                No:81,Murathalawa Road,
              <br />
                Peradeniya.
              <br />
    
            </address>
            <div className="h6 product-color">Customer Care</div>
            <hr />
            <i className="bi bi-telephone"><FaPhoneAlt/></i> +94 76 7022 508 
            <br />
            <i className="bi bi-envelope"><FaMailBulk/></i> crystalanimalclinic@email.com
          </div>
        </div>
      </div>
      <div className="container-fluid bg-secondary text-white text-center">
        <div className="row  ">
          <div className="py-2 ">
            {new Date().getFullYear()} @ <span className='product-color gap-2'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span> All rights reserved.
          </div>
          
        </div>
      </div>
    </footer>
  );
};
export default Footer;
