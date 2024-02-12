import React from "react";
import { Modal, Typography, Button, Card, CardContent } from "@mui/material";

const styles = {
  modalContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  card: {
    width: 400,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    textAlign: "center",
    boxSizing: "initial",
  },
  closeButton: {
    marginRight: -5,
    backgroundColor: '#62df62',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#50cc50',
    },
  },
  label: {
    fontWeight: "bold",
    width: 200, // Adjust as needed
    // display: "inline-block",
    marginBottom: 10,
    textAlign: "left",
    paddingRight: 10,
    color: '#333333',
  },
  data: {
    // display: "inline-block",
    textAlign: "left",
    marginBottom: 10,
  },
};

const InventoryDetailsView = ({ inventory, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal open={true} onClose={handleClose} sx={styles.modalContent}>
      <Card sx={styles.card}>
        <CardContent>
        <Typography variant="h4" style={{ color: '#62df62', marginBottom: 20 }}>Inventory Details</Typography>
        
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Name:</span> {inventory.name}
            </Typography>
          </div>
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Category:</span> {inventory.category}
            </Typography>
          </div>

          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Unit of Measure:</span> {inventory.unitOfMeasure}
            </Typography>
          </div>

          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Available Quantity:</span> {inventory.avaQuantity}
            </Typography>
          </div>

          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Reorder Point:</span> {inventory.rop}
            </Typography>
          </div>
      
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Unit Price:</span> {inventory.unitPrice}
            </Typography>
          </div>

          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Status:</span> {inventory.status}
            </Typography>
          </div>
          
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Expiration Date:</span> {inventory.expDate}
            </Typography>
          </div>

          {/* <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Supplier Name: </span>
              {inventory.supInfo.name}
            </Typography>
          </div>
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Supplier Phone:</span>
              {inventory.supInfo.phone.join(", ")}
            </Typography>
          </div>
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Supplier Email: </span>
              {inventory.supInfo.email}
            </Typography>
          </div>
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Supplier Notes:</span>
              {inventory.supInfo.notes}
            </Typography>
          </div> */}
          <Button
            variant="contained"
            onClick={handleClose}
            sx={styles.closeButton}
          >
            Close
          </Button>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default InventoryDetailsView;