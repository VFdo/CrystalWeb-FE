import React, { useState } from "react";
import { addAttendance } from "../utils/ApiFunctions";
import { Form, Row, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Header from "../common/Header";

const AttendanceForm = () => {
  const [booking, setBooking] = useState({
    employeeID: "",
    password: "",
    checkInDate: "",
    checkInTime: "",
  });
  const [bookingInfo, setBookingInfo] = useState({
    employeeID: "",
    password: "",
    checkInDate: "",
    checkInTime: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleProductInputChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await addAttendance(
        booking.employeeID,
        booking.password,
        booking.checkInDate,
        booking.checkInTime
      );
      if (success !== undefined) {
        setSuccessMessage("Your attendance has been recorded");
        setBooking({
          employeeID: "",
          password: "",
          checkInDate: "",
          checkInTime: "",
        });

        setErrorMessage("");
      } else {
        setErrorMessage("Error in Attendance registration");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 3000);
  };

  return (
    <>
      <div className="container mb-5 ">
        <Header title={"Mark Employee Attendance"} />
        <hr />
        <Row>
          <h4 className="text-center">
            <span className="product-color gap-2">
              <span className="logo-text">CRYSTAL</span> Animal Hospital
            </span>
            <span className="gap-2 ">
              <br /> Mark Attendance
            </span>
          </h4>
        </Row>
        <hr />

        <div className="justify-content-center">
          <div className="">
            <div className="row justify-content-center">
              <Card style={{ width: "45rem", height: "45rem" }}>
                <Card.Body>
                  <Card.Title className="product-color text-center">
                    Attendance form
                  </Card.Title>
                  <Card.Text>
                    <div>
                      {successMessage && (
                        <div className="alert alert-sucess fade show">
                          {successMessage}
                        </div>
                      )}
                      {errorMessage && (
                        <div className="alert alert-danger fade show">
                          {errorMessage}
                        </div>
                      )}
                      <Form onSubmit={handleSubmit}>
                        <Form.Group>
                          <Form.Label htmlFor="employeeID">
                            Employee ID :{" "}
                          </Form.Label>
                          <Form.Control
                            required
                            type="text"
                            id="employeeID"
                            name="employeeID"
                            value={booking.employeeID}
                            placeholder="Enter Employee ID"
                            onChange={handleProductInputChange}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please Enter Your Employee ID
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                          <Form.Label htmlFor="password">
                            {" "}
                            Employee Password :{" "}
                          </Form.Label>
                          <Form.Control
                            required
                            type="text"
                            id="password"
                            name="password"
                            value={booking.password}
                            placeholder="Enter Your Employee Password"
                            onChange={handleProductInputChange}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please Enter Your Password
                          </Form.Control.Feedback>
                        </Form.Group>

                        <fieldset style={{ border: "2px" }}>
                          <legend className="logo-text">
                            Attendance Date and Time-:
                          </legend>
                          <div className="row">
                            <div className="col-6">
                              <Form.Label htmlFor="checkInDate">
                                Check-In Date :{" "}
                              </Form.Label>
                              <Form.Control
                                required
                                type="date"
                                id="checkInDate"
                                name="checkInDate"
                                placeholder="Check In date"
                                onChange={handleProductInputChange}
                              />

                              <Form.Control.Feedback type="invalid">
                                please select a check-in-date
                              </Form.Control.Feedback>
                            </div>

                            <div className="col-6">
                              <Form.Label htmlFor="checkInTime">
                                Check-In Time :{" "}
                              </Form.Label>
                              <Form.Control
                                required
                                type="time"
                                id="checkInTime"
                                name="checkInTime"
                                placeholder="Check In Time"
                                onChange={handleProductInputChange}
                              />

                              <Form.Control.Feedback type="invalid">
                                please select a check-in-time
                              </Form.Control.Feedback>
                            </div>
                            {errorMessage && (
                              <p className="error-message text-danger">
                                {errorMessage}
                              </p>
                            )}
                          </div>
                        </fieldset>

                        <div className="d-grid d-md-flex gap-3 mt-3">
                          <NavLink className="nav-link mt-5" to={"/admin"}>
                            <Button variant="outline-success" className="/">
                              Back
                            </Button>
                          </NavLink>
                          <Button
                            variant="outline-success"
                            className="login mt-5"
                            type="submit"
                          >
                            Submit Attendance
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendanceForm;
