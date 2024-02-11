import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AppointmentSummary = ({ booking, isFormValid, onConfirm }) => {
  const checkInDate = moment(booking.checkInDate);
  const checkInTime = moment(booking.checkInTime);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const navigate = useNavigate();
  const handleConfirmBooking = () => {
    setTimeout(() => {
      setIsBookingConfirmed(true);
      onConfirm();
    }, 3000);
  };

  useEffect(() => {
    if (isBookingConfirmed) {
      navigate("/booking-success");
    }
  }, [isBookingConfirmed, navigate]);

  return (
<<<<<<< HEAD
    <div className="card card-body mt-5">
      <h4>Appointment Summary</h4>

      <p>
        Full Name : <strong>{booking.clientName}</strong>
      </p>
      <p>
        Email : <strong>{booking.clientEmail}</strong>
      </p>
      <p>
        Phone Number : <strong>{booking.phoneNumber}</strong>
      </p>
      <p>
        Check In Date :{" "}
        <strong>{moment(booking.checkInDate).format("DD/MM/YYYY")}</strong>
      </p>
      <p>
        Check In Time:{" "}
        <strong>{moment(booking.checkInTime).format("HH:mm A")} </strong>
      </p>
      <p>
        Number of Pets : <strong>{booking.numberOfPets}</strong>
      </p>
      <p>
        Service Type : <strong>{booking.serviceType}</strong>
      </p>
      <p>
        Additional Info : <strong>{booking.additionalInfo}</strong>
      </p>
=======
    <div className='card card-body mt-5'>
        <h4>Appointment Summary</h4>
        <p>Photo : <strong>{booking.photo}</strong></p>
        <p>Full Name : <strong>{booking.clientName}</strong></p>
        <p>Email : <strong>{booking.clientEmail}</strong></p>
        <p>Phone Number : <strong>{booking.phoneNumber}</strong></p>
        <p>Check In Date : <strong>{moment(booking.checkInDate).format('DD/MM/YYYY')}</strong></p>
        <p>Check In Time: <strong>{moment(booking.checkInTime).format('HH:mm A')} </strong></p>
        <p>Number of Pets : <strong>{booking.numberOfPets}</strong></p>
>>>>>>> feature/common-components
    </div>
  );
};

export default AppointmentSummary;
