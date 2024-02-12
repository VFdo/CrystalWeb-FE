import { useState, useEffect } from "react";
import { Row, Card, Button } from 'react-bootstrap';

const BillForm = ({ billData, onClose, onChange, onSave }) => {
  const handleChange = (field, value) => {
    onChange({ ...billData, [field]: value });
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
      <Card style={{ width: '30rem', height: '80rem' }}>
        <Card.Body>
          <Card.Title className="product-color text-center">Enter Bill Details</Card.Title>
          <Card.Text>
            <form>

            <div className="mb-3">
              <label htmlFor="dateTime" className="form-label logo-text">
                Date Time:
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="dateTime"
                value={billData.dateTime}
                onChange={(e) => handleChange("dateTime", e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="itemsList" className="form-label logo-text">
                Items List:
              </label>
              <input
                type="text"
                className="form-control"
                id="itemsList"
                value={billData.itemsList ? billData.itemsList.join(",") : ''} 
                onChange={(e) => handleChange("itemsList", e.target.value.split(", "))}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="servicesList" className="form-label logo-text">
                Services List:
              </label>
              <input
                type="text"
                className="form-control"
                id="servicesList"
                value={billData.servicesList ? billData.servicesList.join(",") : ''} 
                onChange={(e) => handleChange("servicesList", e.target.value.split(", "))}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="additionalCharge" className="form-label logo-text">
                Additional Charge:
              </label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                id="additionalCharge"
                value={billData.additionalCharge}
                onChange={(e) => handleChange("additionalCharge", parseFloat(e.target.value))}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="totalPrice" className="form-label logo-text">
                Total Price:
              </label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                id="totalPrice"
                value={billData.totalPrice}
                onChange={(e) => handleChange("totalPrice", parseFloat(e.target.value))}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="paymentType" className="form-label logo-text">
                Payment Type:
              </label>
              <input
                type="text"
                className="form-control"
                id="paymentType"
                value={billData.paymentType}
                onChange={(e) => handleChange("paymentType", e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="status" className="form-label logo-text">
                Status:
              </label>
              <input
                type="text"
                className="form-control"
                id="status"
                value={billData.status}
                onChange={(e) => handleChange("status", e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="notes" className="form-label logo-text">
                Notes:
              </label>
              <textarea
                className="form-control"
                id="notes"
                rows="3"
                value={billData.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="clientId" className="form-label logo-text">
                Client ID:
              </label>
              <input
                type="text"
                className="form-control"
                id="clientId"
                value={billData.clientId}
                onChange={(e) => handleChange("clientId", e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="employeeId" className="form-label logo-text">
                Employee ID:
              </label>
              <input
                type="text"
                className="form-control"
                id="employeeId"
                value={billData.employeeId}
                onChange={(e) => handleChange("employeeId", e.target.value)}
              />
            </div>


            <div className="d-grid d-md-flex gap-3 mt-3">
                <Button variant="outline-success" className="login mt-5" onClick={() => {}}>
                  Cancel
                </Button>
                <Button variant="outline-success" className="login mt-5" onClick={handleSave}>
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

const BillDetailsForm = () => {
  const [data, setData] = useState({
    dateTime: "", // Initialize with current date and time if needed
    clientRefId: "",
    employeeRefId: "",
    itemList: [],
    servicesList: [],
    additionalCharge: 0.00,
    totalPrice: 0.00,
    paymentType: "",
    status: "",
    notes: ""
  });
  
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Fetching data...");
    // Fetch bill data from the server
    fetch("http://localhost:8080/bill")
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
    // Save bill data to the server
    fetch("http://localhost:8080/bill", {
      method: "POST",
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
        <BillForm
          billData={data}
          onClose={handleClose}
          onChange={setData}
          onSave={handleSave}
        />
    </div>
  );
};

export default BillDetailsForm;
