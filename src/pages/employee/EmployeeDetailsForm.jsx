import { useState, useEffect } from "react";
import { Button, Modal, TextField, Stack, FormControl, FormLabel, Typography } from "@mui/material";

const styles = {
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height : 800,
    bgcolor: "#ffffff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 5,
  },
  formContainer: {
    textAlign: "center",
  },
  formControl: {
    gap: 50,
  },
};

const EmployeeForm = ({ employeeData, onClose, onChange, onSave }) => {
  const handleChange = (field, value) => {
    onChange({ ...employeeData, [field]: value });
  };

  const handleSave = () => {
    onSave();
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose} sx={styles.modalBox} hideBackdrop>
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
        </FormControl><br/>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 5, sm: 5, md: 12 }} justifyContent="center">
          <Button variant="outlined" onClick={onClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </Stack>
      </div>
    </Modal>
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
    fetch("http://localhost:8080/employee/ca406b63-896b-4574-a1a5-9a82e0482ec8")
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
    fetch("http://localhost:8080/employee/ca406b63-896b-4574-a1a5-9a82e0482ec8", {
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
    
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EmployeeForm
           employeeData={data}
           onClose={handleClose}
           onChange={setData}
           onSave={handleSave}
        />
      </Modal>
    </div>
  );
};

export default EmployeeDetailsForm;
