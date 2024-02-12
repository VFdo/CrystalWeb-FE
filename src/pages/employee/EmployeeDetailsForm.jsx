import { useState, useEffect } from "react";
// import { Button, Modal, TextField, Stack, FormControl, FormLabel, Typography } from "@mui/material";
import { Row, Card, Button } from 'react-bootstrap';

// const styles = {
//   modalBox: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 800,
//     height : 800,
//     bgcolor: "#ffffff",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 5,
//   },
//   formContainer: {
//     textAlign: "center",
//   },
//   formControl: {
//     gap: 50,
//   },
// };

const EmployeeForm = ({ employeeData, onClose, onChange, onSave }) => {
  const handleChange = (field, value) => {
    onChange({ ...employeeData, [field]: value });
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
      <label htmlFor="employeeName" className="form-label logo-text">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="employeeName"
          value={employeeData.employeeName}
          onChange={(e) => handleChange("employeeName", e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="employeeNIC" className="form-label logo-text">
          NIC:
        </label>
        <input
          type="text"
          className="form-control"
          id="employeeNIC"
          value={employeeData.employeeNIC}
          onChange={(e) => handleChange("employeeNIC", e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="employeeEmail" className="form-label logo-text">
          Email:
        </label>
        <input
          type="text"
          className="form-control"
          id="employeeEmail"
          value={employeeData.employeeEmail}
          onChange={(e) => handleChange("employeeEmail", e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="employeeRoleId" className="form-label logo-text">
          Role:
        </label>
        <input
          type="text"
          className="form-control"
          id="employeeRoleId"
          value={employeeData.employeeRoleId}
          onChange={(e) => handleChange("employeeRoleId", e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="employeeDob" className="form-label logo-text">
          Date of Birth:
        </label>
        <input
          type="date"
          className="form-control"
          id="employeeDob"
          value={employeeData.employeeDob}
          onChange={(e) => handleChange("employeeDob", e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label logo-text">Gender:</label>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="maleGender"
            checked={employeeData.employeeGender === "Male"}
            onChange={(e) => handleChange("employeeGender", "Male")}
          />
          <label htmlFor="maleGender" className="form-check-label">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="femaleGender"
            checked={employeeData.employeeGender === "Female"}
            onChange={(e) => handleChange("employeeGender", "Female")}
          />
          <label htmlFor="femaleGender" className="form-check-label">
            Female
          </label>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="employeeBasicSalary" className="form-label logo-text">
          Basic Salary:
        </label>
        <input
          type="number"
          className="form-control"
          id="employeeBasicSalary"
          value={employeeData.employeeBasicSalary}
          onChange={(e) => handleChange("employeeBasicSalary", e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="employeeHourlyPay" className="form-label logo-text">
          Hourly Pay:
        </label>
        <input
          type="number"
          className="form-control"
          id="employeeHourlyPay"
          value={employeeData.employeeHourlyPay}
          onChange={(e) => handleChange("employeeHourlyPay", e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="employeeRequiredDailyHours" className="form-label logo-text">
          Required Daily Hours:
        </label>
        <input
          type="number"
          className="form-control"
          id="employeeRequiredDailyHours"
          value={employeeData.employeeRequiredDailyHours}
          onChange={(e) => handleChange("employeeRequiredDailyHours", e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="employeePhoneList" className="form-label logo-text">
          Phone List:
        </label>
        <input
          type="text"
          className="form-control"
          id="employeePhoneList"
          value={employeeData.employeePhoneList ? employeeData.employeePhoneList.join(",") : ""}
          onChange={(e) => handleChange("employeePhoneList", e.target.value.split(","))}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="employeeAddress" className="form-label logo-text">
          Address:
        </label>
        <textarea
          className="form-control"
          id="employeeAddress"
          rows="3"
          value={employeeData.employeeAddress}
          onChange={(e) => handleChange("employeeAddress", e.target.value)}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="employeeSkillList" className="form-label logo-text">
          Core Skills:
        </label>
        <textarea
          className="form-control"
          id="employeeSkillList"
          rows="3"
          value={employeeData.employeeSkillList ? employeeData.employeeSkillList.join(",") : ""}
          onChange={(e) => handleChange("employeeSkillList", e.target.value.split(","))}
        ></textarea>
      </div> 


    {/*<Modal open={true} onClose={onClose} sx={styles.modalBox} hideBackdrop>
      <div style={styles.formContainer}>
        <Typography variant="h4">Enter Employee Details</Typography>
         <FormControl style={styles.formControl}>
          <Stack direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
            <FormLabel>Name</FormLabel>
            <TextField value={employeeData.employeeName} onChange={(e) => handleChange("employeeName", e.target.value)} />
          </Stack>
        </FormControl>

        <br/>

        <FormControl>
          <Stack direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
            <FormLabel>NIC</FormLabel>
            <TextField value={employeeData.employeeNIC} onChange={(e) => handleChange("employeeNIC", e.target.value)} />
          </Stack>
        </FormControl> <br/>

        <FormControl>
          <Stack direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
            <FormLabel>Email</FormLabel>
            <TextField value={employeeData.employeeEmail} onChange={(e) => handleChange("employeeEmail", e.target.value)} />
          </Stack>
        </FormControl><br/>

        <FormControl>
          <Stack direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
            <FormLabel>Role</FormLabel>
            <TextField value={employeeData.employeeRoleId} onChange={(e) => handleChange("employeeRoleId", e.target.value)} />
          </Stack>
        </FormControl><br/>

        <FormControl>
        <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <FormLabel>Date of Birth</FormLabel>
            <TextField type="date" value={employeeData.employeeDob} onChange={(e) => handleChange("employeeDob", e.target.value)} />
          </Stack>
        </FormControl><br/>

        <FormControl>
        <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <FormLabel>Gender</FormLabel>
            <Stack direction="row" spacing={1}>
            <input type="radio"
              value={employeeData.employeeGender} onChange={(e) => handleChange("employeeGender", "Male")} /> Male
            <input type="radio"
              value={employeeData.employeeGender} onChange={(e) => handleChange("employeeGender", "Female")} /> Female
            </Stack>
          </Stack>
        </FormControl><br/>

        <FormControl>
          <Stack direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
            <FormLabel>Basic Salary</FormLabel>
            <TextField type="number" value={employeeData.employeeBasicSalary} onChange={(e) => handleChange("employeeBasicSalary", e.target.value)} />
          </Stack>
        </FormControl><br/>

        <FormControl>
          <Stack direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
            <FormLabel>Hourly Pay</FormLabel>
            <TextField type="number" value={employeeData.employeeHourlyPay} onChange={(e) => handleChange("employeeHourlyPay", e.target.value)} />
          </Stack>
        </FormControl><br/>

        <FormControl>
          <Stack direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
            <FormLabel>Required Daily Hours</FormLabel>
            <TextField type="number" value={employeeData.employeeRequiredDailyHours} onChange={(e) => handleChange("employeeRequiredDailyHours", e.target.value)} />
          </Stack>
        </FormControl><br/>

        <FormControl>
          <Stack direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
            <FormLabel>Phone List</FormLabel>
            <TextField value={employeeData.employeePhoneList ? employeeData.employeePhoneList.join(",") : ""} onChange={(e) => handleChange("employeePhoneList", e.target.value.split(","))} />
          </Stack>
        </FormControl><br/>

        <FormControl>
          <Stack direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
            <FormLabel>Address</FormLabel>
            <TextField multiline maxRows={4} value={employeeData.employeeAddress} onChange={(e) => handleChange("employeeAddress", e.target.value)} />
          </Stack>
        </FormControl><br/>

        <FormControl>
          <Stack direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
            <FormLabel>Core Skills</FormLabel>
            <TextField multiline maxRows={4} value={employeeData.employeeSkillList ? employeeData.employeeSkillList.join(",") : ""} onChange={(e) => handleChange("employeeSkillList", e.target.value.split(","))} />
          </Stack>
        </FormControl><br/> */}


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


const EmployeeDetailsForm = () => {
  const [data, setData] = useState({
    employeeName: "",
    employeeNIC : "",
    employeeRoleId : "",
    employeeDob :"",
    employeeGender :"",
    employeePhoneList :[],
    employeeEmail :"",
    employeeAddress :"",
    employeeBasicSalary :0.00,
    employeeHourlyPay :0.00,
    employeeRequiredDailyHours :0,
    employeeSkillList :[]
  });
  
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Fetching data...");
    fetch("http://localhost:8080/employee")
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
    fetch("http://localhost:8080/employee", {
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
    
      {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > */}
        <EmployeeForm
           employeeData={data}
           onClose={handleClose}
           onChange={setData}
           onSave={handleSave}
        />
      {/* </Modal> */}
    </div>
  );
};

export default EmployeeDetailsForm;
