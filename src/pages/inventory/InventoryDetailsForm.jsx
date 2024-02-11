import { useState, useEffect } from "react";
import { Button, Modal, TextField, Stack, FormControl, FormLabel, Typography } from "@mui/material";

const styles = {
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 800,
    bgcolor: "#ffffff",
    border: "2px solid #62df62",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    p: 5,
  },
  formContainer: {
    textAlign: "center",
  },
  formControl: {
    gap: 20,
    marginBottom: 20,
  },
  input: {
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
    '& input': {
      padding: '10px',
      color: '#333333',
    },
  },
  label: {
    color: '#333333',
    fontWeight: 'bold',
    width: 200,
    textAlign: 'right',
    paddingRight: 10,
  },
  button: {
    marginRight: 10,
    backgroundColor: '#62df62',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#50cc50',
    },
  },
};

const InventoryForm = ({ inventoryData, onClose, onChange, onSave }) => {
  const handleChange = (field, value) => {
    onChange({ ...inventoryData, [field]: value });
  };

  const handleSave = () => {
    onSave();
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose} sx={styles.modalBox} hideBackdrop>
      <div style={styles.formContainer}>
        <Typography variant="h4" style={{ color: '#62df62', marginBottom: 20 }}>Enter Inventory Details</Typography>
        <FormControl style={styles.formControl}>
          <Stack direction="row" spacing={2} alignItems="center">
            <FormLabel style={styles.label}>Name:</FormLabel>
            <TextField style={styles.input} value={inventoryData.name} onChange={(e) => handleChange("name", e.target.value)} />
          </Stack>
        </FormControl>

        <FormControl style={styles.formControl}>
        <Stack direction="row" spacing={2} alignItems="center">
            <FormLabel style={styles.label}>Category:</FormLabel>
            <TextField style={styles.input} value={inventoryData.category} onChange={(e) => handleChange("category", e.target.value)} />
        </Stack>
        </FormControl>

        <FormControl style={styles.formControl}>
        <Stack direction="row" spacing={2} alignItems="center">
            <FormLabel style={styles.label}>Unit of Measure:</FormLabel>
            <TextField style={styles.input} value={inventoryData.unitOfMeasure} onChange={(e) => handleChange("unitOfMeasure", e.target.value)} />
        </Stack>
        </FormControl>

        <FormControl style={styles.formControl}>
        <Stack direction="row" spacing={2} alignItems="center">
            <FormLabel style={styles.label}>Available Quantity:</FormLabel>
            <TextField style={styles.input} type="number" value={inventoryData.avaQuantity} onChange={(e) => handleChange("avaQuantity", e.target.value)} />
        </Stack>
        </FormControl>

        <FormControl style={styles.formControl}>
        <Stack direction="row" spacing={2} alignItems="center">
            <FormLabel style={styles.label}>Reorder Point:</FormLabel>
            <TextField style={styles.input} type="number" value={inventoryData.rop} onChange={(e) => handleChange("rop", e.target.value)} />
        </Stack>
        </FormControl>

        <FormControl style={styles.formControl}>
        <Stack direction="row" spacing={2} alignItems="center">
            <FormLabel style={styles.label}>Unit Price:</FormLabel>
            <TextField style={styles.input} type="number" value={inventoryData.unitPrice} onChange={(e) => handleChange("unitPrice", e.target.value)} />
        </Stack>
        </FormControl>

        <FormControl style={styles.formControl}>
        <Stack direction="row" spacing={2} alignItems="center">
            <FormLabel style={styles.label}>Status:</FormLabel>
            <TextField style={styles.input} value={inventoryData.status} onChange={(e) => handleChange("status", e.target.value)} />
        </Stack>
        </FormControl>

        <FormControl style={styles.formControl}>
        <Stack direction="row" spacing={2} alignItems="center">
            <FormLabel style={styles.label}>Expiration Date:</FormLabel>
            <TextField style={styles.input} type="date" value={inventoryData.expDate} onChange={(e) => handleChange("expDate", e.target.value)} />
        </Stack>
        </FormControl>

        <FormControl style={styles.formControl}>
        <Stack direction="row" spacing={2} alignItems="center">
            <FormLabel style={styles.label}>Supplier Name:</FormLabel>
            <TextField style={styles.input} value={inventoryData.supInfo ? inventoryData.supInfo.name : ''} onChange={(e) => handleChange("supInfo.name", e.target.value)} />
        </Stack>
        </FormControl>

        <FormControl style={styles.formControl}>
        <Stack direction="row" spacing={2} alignItems="center">
            <FormLabel style={styles.label}>Supplier Phone:</FormLabel>
            <TextField style={styles.input} value={inventoryData.supInfo ? inventoryData.supInfo.phone.join(",") : ''} onChange={(e) => handleChange("supInfo.phone", e.target.value.split(","))} />
        </Stack>
        </FormControl>

        <FormControl style={styles.formControl}>
        <Stack direction="row" spacing={2} alignItems="center">
            <FormLabel style={styles.label}>Supplier Email:</FormLabel>
            <TextField style={styles.input} value={inventoryData.supInfo ? inventoryData.supInfo.email : ''} onChange={(e) => handleChange("supInfo.email", e.target.value)} />
        </Stack>
        </FormControl>

        <FormControl style={styles.formControl}>
        <Stack direction="row" spacing={2} alignItems="center">
            <FormLabel style={styles.label}>Supplier Notes:</FormLabel>
            <TextField style={{ ...styles.input, maxWidth: "none" }} multiline maxRows={4} value={inventoryData.supInfo ? inventoryData.supInfo.notes : ''} onChange={(e) => handleChange("supInfo.notes", e.target.value)} />
        </Stack>
        </FormControl>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 5, sm: 5, md: 12 }} justifyContent="center">
          <Button variant="outlined" style={styles.button} onClick={onClose}>Cancel</Button>
          <Button variant="contained" style={styles.button} onClick={handleSave}>Save</Button>
        </Stack>
      </div>
    </Modal>
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
    fetch("http://localhost:8080/inventory/3499bee0-fe64-4762-967a-c19f63cf20d9")
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
    fetch("http://localhost:8080/inventory/3499bee0-fe64-4762-967a-c19f63cf20d9", {
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
      <Button onClick={handleOpen} style={{ backgroundColor: '#62df62', color: '#ffffff' }}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <InventoryForm
          inventoryData={data}
          onClose={handleClose}
          onChange={setData}
          onSave={handleSave}
        />
      </Modal>
    </div>
  );
};

export default InventoryDetailsForm;
