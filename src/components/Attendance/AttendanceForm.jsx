import React, { useState } from "react";
import { addAttendance } from "../utils/ApiFunctions";
import { Form, Row, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Header from "../common/Header";

const AttendanceForm = ({ attendanceData, onClose, onChange, onSave }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmployeeIDChange = (event) => {
    onChange({ ...attendanceData, employeeRefId: event.target.value });
  };
  const handlePasswordChange = (event) => {
    onChange({ ...attendanceData, password: event.target.value });
  };
  const handleDateChange = (event) => {
    onChange({ ...attendanceData, date: event.target.value });
  };

  const handleTimeChange = (event) => {
    onChange({ ...attendanceData, inTime: event.target.value });
  };
  const handleProductInputChange = (e) => {
    onChange({ ...attendanceData, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     onSave(); // Assuming onSave is supposed to handle form submission
  //   };

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
                      <Form>
                        <Form.Group>
                          <Form.Label htmlFor="employeeRefId">
                            Employee ID :{" "}
                          </Form.Label>
                          <Form.Control
                            required
                            type="text"
                            id="employeeRefId"
                            name="employeeRefId"
                            value={attendanceData.employeeRefId}
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
                            value={attendanceData.password}
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
                              <Form.Label htmlFor="date">
                                Check-In Date :{" "}
                              </Form.Label>
                              <Form.Control
                                required
                                type="date"
                                id="date"
                                name="date"
                                placeholder="Check In date"
                                value={attendanceData.date}
                                onChange={handleProductInputChange}
                              />

                              <Form.Control.Feedback type="invalid">
                                please select a check-in-date
                              </Form.Control.Feedback>
                            </div>

                            <div className="col-6">
                              <Form.Label htmlFor="inTime">
                                Check-In Time :{" "}
                              </Form.Label>
                              <Form.Control
                                required
                                type="time"
                                id="inTime"
                                name="inTime"
                                placeholder="Check In Time"
                                value={attendanceData.inTime}
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
                            <Button
                              variant="outline-success"
                              className="/"
                              onClick={onClose}
                            >
                              Back
                            </Button>
                          </NavLink>
                          <Button
                            variant="outline-success"
                            className="login mt-5"
                            type="submit"
                            onClick={onSave}
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
