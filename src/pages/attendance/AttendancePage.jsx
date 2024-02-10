import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../../components/common/Header";
import Footer from "../../components/layout/Footer";
import CustomModal from "../../components/common/Modal";
import CurrentDateComp from "../../components/CurrentDateComp";

function AttendancePage() {
  // State to store form field values
  const [employeeID, setEmployeeID] = useState("");
  const [password, setPassword] = useState("");
  const [time, setTime] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Access the entered values
    console.log("EmployeeID:", employeeID);
    console.log("Password:", password);

    // You can now use the values as needed (e.g., send them to a server, perform validation, etc.)
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="contact-wrapper p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className=" text">Employee Attendance Check-in Portal</h3>
              <p className=" text fs-4">
                Please enter your Employee ID, password and Check in time
              </p>
              <CurrentDateComp />
            </div>
          </div>
        </div>
      </section>
      <div className="contact-message p-0">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
              <div className="card p-5">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formEmployeeID">
                    <Form.Label>Employee ID</Form.Label>
                    <Form.Control
                      type="employeeID"
                      placeholder="Enter Employee ID"
                      value={employeeID}
                      onChange={(e) => setEmployeeID(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Check in Time</Form.Label>
                    <Form.Control
                      type="time"
                      placeholder="Time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        show={showModal}
        handleClose={handleCloseModal}
        message="Attendance Successful!"
      />

      <Footer className="fixed-bottom" />
    </>
  );
}

export default AttendancePage;
