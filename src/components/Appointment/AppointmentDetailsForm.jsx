import { useState, useEffect } from "react";
import { Form, Row, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const AppointmentForm = ({ appointmentData, onClose, onChange, onSave }) => {
  const [errorMessage, setErrorMessage] = useState("");
  // const handleNameChange = (event) => {
  //   onChange({ ...attendanceData, employeeRefId: event.target.value });
  // };
  // const handlePasswordChange = (event) => {
  //   onChange({ ...attendanceData, password: event.target.value });
  // };
  // const handleDateChange = (event) => {
  //   onChange({ ...attendanceData, date: event.target.value });
  // };

  // const handleTimeChange = (event) => {
  //   onChange({ ...attendanceData, inTime: event.target.value });
  // };

  const handleProductInputChange = (e) => {
    onChange({ ...appointmentData, [e.target.name]: e.target.value });
  };

  // const handleSave = () => {
  //   onSave();
  //   onClose();
  // };

  return (
    <>
      <section className="container mt-5 mb-3">
        <Row>
          <h4 className="text-center">
            <span className="product-color gap-2">
              <span className="logo-text">CRYSTAL</span> Animal Hospital
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
                    Appoinment form
                  </Card.Title>
                  <Card.Text>
                    <div>
                      <Form>
                        <Form.Group>
                          <Form.Label htmlFor="name">Name: </Form.Label>
                          <Form.Control
                            required
                            type="text"
                            id="name"
                            name="name"
                            value={appointmentData.name}
                            placeholder="Enter Name"
                            onChange={handleProductInputChange}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please Enter Your Name
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                          <Form.Label htmlFor="email"> Email : </Form.Label>
                          <Form.Control
                            required
                            type="text"
                            id="email"
                            name="email"
                            value={appointmentData.email}
                            placeholder="Enter Your Email"
                            onChange={handleProductInputChange}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please Enter Your Email
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                          <Form.Label htmlFor="phoneNo">
                            {" "}
                            Phone Number :{" "}
                          </Form.Label>
                          <Form.Control
                            required
                            type="text"
                            id="phoneNo"
                            name="phoneNo"
                            value={appointmentData.phoneNo}
                            placeholder="Enter Your Phone number"
                            onChange={handleProductInputChange}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please Enter Your Phone number
                          </Form.Control.Feedback>
                        </Form.Group>

                        <fieldset style={{ border: "2px" }}>
                          <legend className="logo-text">
                            Appointment Date-:
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
                                value={appointmentData.date}
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
                                id="time"
                                name="time"
                                placeholder="Check In Time"
                                value={appointmentData.time}
                                onChange={handleProductInputChange}
                              />

                              <Form.Control.Feedback type="invalid">
                                please select a check-in-time
                              </Form.Control.Feedback>
                            </div>

                            <div className="col-6">
                              <Form.Label htmlFor="noOfPets">
                                Number of Pets:{" "}
                              </Form.Label>
                              <Form.Control
                                required
                                type="int"
                                id="noOfPets"
                                name="noOfPets"
                                placeholder="Pets"
                                value={appointmentData.noOfPets}
                                onChange={handleProductInputChange}
                              />

                              <Form.Control.Feedback type="invalid">
                                please select Number of pets
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
                            Submit Appointment
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

        <hr />
      </section>
    </>
  );
};

const AppointmentDetailsForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    date: "",
    time: "",
    noOfPets: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  // const [open, setOpen] = useState(true);
  const open = true;

  const navigate = useNavigate(null);

  // const handleOpen = () => setOpen(true);
  const handleClose = () => {
    sessionStorage.removeItem("appointmentId");
    navigate("/appointment");
  };

  const handleAppointmentSave = async (e) => {
    e.preventDefault();
    const success = await saveAppointment(data);
    if (success) {
      console.log("appointment details saved successfully!");
      //await sendEmail(emailData);
      navigate("/appointment");
      // window.location.reload()
    } else {
      console.log("An error has occured!");
      setErrorMessage("Unable to update user");
    }
    setTimeout(() => {
      setErrorMessage("");
    }, 4000);
  };

  const saveAppointment = (data) => {
    return new Promise((resolve) => {
      console.log("saving appointment...", data);
      fetch("http://localhost:8080/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token"),
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            resolve(true);
            response.json().then((responseData) => {
              console.log("appointment data saved:", responseData);
            });
          } else {
            resolve(false);
          }
        })
        .catch((error) => console.error("Error saving appointment:", error));
    });
  };

  return (
    <div>
      <AppointmentForm
        appointmentData={data}
        onClose={handleClose}
        onChange={setData}
        onSave={handleAppointmentSave}
      />
    </div>
  );
};

export default AppointmentDetailsForm;
