import { useState, useEffect } from "react";
import { Row, Card, Button } from "react-bootstrap";

const AppointmentForm = ({ appointmentData, onClose, onChange, onSave }) => {
  const handleChange = (field, value) => {
    onChange({ ...appointmentData, [field]: value });
  };

  const handleSave = () => {
    onSave();
    onClose();
  };

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

        <div className="row justify-content-center">
          <Card style={{ width: "30rem", height: "60rem" }}>
            <Card.Body>
              <Card.Title className="product-color text-center">
                Enter Appointment Details
              </Card.Title>
              <Card.Text>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label logo-text">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={appointmentData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label logo-text">
                      Email:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      value={appointmentData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phoneNo" className="form-label logo-text">
                      Phone No:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNo"
                      value={appointmentData.phoneNo}
                      onChange={(e) => handleChange("phoneNo", e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="date" className="form-label logo-text">
                      Date:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      value={appointmentData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="time" className="form-label logo-text">
                      Time:
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="time"
                      value={appointmentData.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="noOfPets" className="form-label logo-text">
                      Number of Pets:
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      id="noOfPets"
                      value={appointmentData.noOfPets}
                      onChange={(e) => handleChange("noOfPets", e.target.value)}
                    />
                  </div>

                  <div className="d-grid d-md-flex gap-3 mt-3">
                    <Button
                      variant="outline-success"
                      className="login mt-5"
                      onClick={() => {}}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="outline-success"
                      className="login mt-5"
                      onClick={handleSave}
                    >
                      Save
                    </Button>
                  </div>
                </form>
              </Card.Text>
            </Card.Body>
          </Card>
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

  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Fetching data...");
    // Fetch inventory data from the server
    fetch("http://localhost:8080/appointment")
      .then((res) => res.json())
      .then((fetchedData) => {
        console.log("Data received:", fetchedData);
        setData(fetchedData);
      })
      .catch((err) => {
        console.error("Error during fetch:", err);
      });
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    console.log("Saving...", data);
    // Save inventory data to the server
    fetch("http://localhost:8080/appointment", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => console.log("Data saved:", responseData))
      .catch((error) => console.error("Error saving data:", error));
  };

  return (
    <div>
      <AppointmentForm
        appointmentData={data}
        onClose={handleClose}
        onChange={setData}
        onSave={handleSave}
      />
    </div>
  );
};

export default AppointmentDetailsForm;
