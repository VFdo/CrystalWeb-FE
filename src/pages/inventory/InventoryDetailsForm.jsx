import { useState, useEffect } from "react";
import { Row, Card, Button } from 'react-bootstrap';


const InventoryForm = ({ inventoryData, onClose, onChange, onSave }) => {
  const handleChange = (field, value) => {
    onChange({ ...inventoryData, [field]: value });
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
      <Card style={{ width: '30rem', height: '60rem' }}>
        <Card.Body>
          <Card.Title className="product-color text-center">Enter Inventory Details</Card.Title>
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
                  value={inventoryData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label logo-text">
                  Category:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  value={inventoryData.category}
                  onChange={(e) => handleChange('category', e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="unitOfMeasure" className="form-label logo-text">
                  Unit of Measure:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="unitOfMeasure"
                  value={inventoryData.unitOfMeasure}
                  onChange={(e) => handleChange('unitOfMeasure', e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="avaQuantity" className="form-label logo-text">
                  Available Quantity:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="avaQuantity"
                  value={inventoryData.avaQuantity}
                  onChange={(e) => handleChange('avaQuantity', e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="rop" className="form-label logo-text">
                  Reorder Point:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="rop"
                  value={inventoryData.rop}
                  onChange={(e) => handleChange('rop', e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="unitPrice" className="form-label logo-text">
                  Unit Price:
                </label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  id="unitPrice"
                  value={inventoryData.unitPrice}
                  onChange={(e) => handleChange('unitPrice', e.target.value)}
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
                  value={inventoryData.status}
                  onChange={(e) => handleChange('status', e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="expDate" className="form-label logo-text">
                  Expiration Date:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="expDate"
                  value={inventoryData.expDate}
                  onChange={(e) => handleChange('expDate', e.target.value)}
                />
              </div>

              {/* <div className="mb-3">
                <label htmlFor="supName" className="form-label logo-text">
                  Supplier Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="supName"
                  value={inventoryData.supInfo ? inventoryData.supInfo.name : ''}
                  onChange={(e) => handleChange('supInfo.name', e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="supPhone" className="form-label logo-text">
                  Supplier Phone:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="supPhone"
                  value={inventoryData.supInfo ? inventoryData.supInfo.phone.join(",") : ''} 
                  onChange={(e) => handleChange('supInfo.phone', e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="supEmail" className="form-label logo-text">
                  Supplier Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="supEmail"
                  value={inventoryData.supInfo ? inventoryData.supInfo.email : ''}
                  onChange={(e) => handleChange('supInfo.email', e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="supNotes" className="form-label logo-text">
                  Supplier Notes:
                </label>
                <textarea
                  className="form-control"
                  id="supNotes"
                  rows="3"
                  value={inventoryData.supInfo ? inventoryData.supInfo.notes : ''}
                  onChange={(e) => handleChange('supInfo.notes', e.target.value)}
                ></textarea>
              </div> */}

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

const InventoryDetailsForm = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    unitOfMeasure: "",
    avaQuantity: 0,
    rop: 0,
    unitPrice: 0.00,
    status: "",
    expDate: "",
    supInfo: {
      name: "",
      phone: [],
      email: "",
      notes: "",
    }
  });
  
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Fetching data...");
    // Fetch inventory data from the server
    fetch("http://localhost:8080/inventory")
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
    fetch("http://localhost:8080/inventory/451c01e3-9047-4021-ae53-a9207d53c2b4", {
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
        <InventoryForm
          inventoryData={data}
          onClose={handleClose}
          onChange={setData}
          onSave={handleSave}
        />
    </div>
  );
};

export default InventoryDetailsForm;