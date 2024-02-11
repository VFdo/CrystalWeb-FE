/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControl, FormLabel } from "@mui/material";
import { Stack } from "@mui/material";
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';


const styles = {
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 5,
  },
  formContainer: {
    textAlign: "center",
  },
  formControl: {
    gap: 30,
  },
};

const EmployeeForm = ({ employeeData, onClose, onChange, onSave }) => {
  const handleNameChange = (event) => {
    onChange({ ...employeeData, name: event.target.value });
  };
  const handleNICChange = (event) => {
    onChange({ ...employeeData, nic: event.target.value });
  };
  const handleEmailChange = (event) => {
    onChange({ ...employeeData, email: event.target.value });
  };
  const handleAgeChange = (event) => {
    onChange({ ...employeeData, age: event.target.value });
  };
  const handleGenderChange = (event) => {
    onChange({ ...employeeData, gender: event.target.value });
  };
  const handleBasicSalaryChange = (event) => {
    onChange({ ...employeeData, basicSalary: event.target.value });
  };
  const handleContactNoChange = (event) => {
    onChange({ ...employeeData, contactNo: event.target.value });
  };
  const handleAddressChange = (event) => {
    onChange({ ...employeeData, address: event.target.value });
  };
  const handleCoreSkillsChange = (event) => {
    onChange({ ...employeeData, skills: event.target.value });
  };

  return (
    <Box sx={styles.modalBox}>
      <div style={styles.formContainer}>
        <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
          Enter Employee Details
        </Typography>
        <FormControl style={styles.formControl}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <FormLabel sx={{ minWidth: 100 }}>Name</FormLabel>
            <TextField value={employeeData.name} onChange={handleNameChange} />
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <FormLabel sx={{ minWidth: 100 }}>NIC</FormLabel>
            <TextField value={employeeData.nic} onChange={handleNICChange} />
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <FormLabel sx={{ minWidth: 100 }}>Email</FormLabel>
            <input type="email"
              value={employeeData.email}
              onChange={handleEmailChange}
            />
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <FormLabel sx={{ minWidth: 100 }}>Age</FormLabel>
            <input type="number"
              value={employeeData.age}
              onChange={handleAgeChange}
            />
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <FormLabel sx={{ minWidth: 100 }}>Gender</FormLabel>
            <input type="radio"
              value={employeeData.gender}
              onChange={handleGenderChange} 
              checked
            /> Male
            <input type="radio"
              value={employeeData.gender}
              onChange={handleGenderChange} 
            /> Female
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <FormLabel sx={{ minWidth: 100 }}>Basic Salary</FormLabel>
            <input type="number" 
              value={employeeData.basicSalary}
              onChange={handleBasicSalaryChange}
            />
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <FormLabel sx={{ minWidth: 100 }}>Contact No</FormLabel>
            <input type="number" 
              value={employeeData.contactNo}
              onChange={handleContactNoChange}
            />
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <FormLabel sx={{ minWidth: 100 }}>Address</FormLabel>
            <TextField
              multiline
              maxRows={4}
              value={employeeData.address}
              onChange={handleAddressChange}
            />
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <FormLabel sx={{ minWidth: 100 }}>Core Skills</FormLabel>
            <TextField
              multiline
              maxRows={5}
              value={employeeData.skills}
              onChange={handleCoreSkillsChange}
            />
          </Stack>

          <br></br>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 5, sm: 5, md: 12 }}
            justifyContent="center"
          >
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>

            <Button variant="contained" onClick={onSave}>
              Save
            </Button>
          </Stack>
        </FormControl>
      </div>
    </Box>
  );
};

const EmployeeDetailsForm = () => {
  const [data, setData] = useState({
    name: "",
    nic: "",
    email: "",
    age: "",
    gender: "",
    basicSalary: "",
    contactNo: "",
    address: "",
    skills: "",
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Fetching data...");
    fetch("http://localhost:8080/employee/d4c9b823-928a-453b-8163-5184843625cb")
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
    console.log("saving...", data);
    fetch("http://localhost:8080/pet/d4c9b823-928a-453b-8163-5184843625cb", {
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