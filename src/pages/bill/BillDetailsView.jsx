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

const BillDetailsView = ({ bill, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal open={true} onClose={handleClose} sx={styles.modalContent}>
      <Card sx={styles.card}>
        <CardContent>
          <Typography variant="h4" style={{ color: '#62df62', marginBottom: 20 }}>Bill Details</Typography>
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Reference ID:</span> {bill.refId}
            </Typography>
          </div>

          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Date Time:</span> {bill.dateTime}
            </Typography>
          </div>
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Client Ref ID:</span> {bill.clientId}
            </Typography>
          </div>

          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Employee Ref ID:</span> {bill.employeeId}
            </Typography>
          </div>
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Items:</span> {bill.itemsList.join(", ")}
            </Typography>
          </div>
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Services:</span> {bill.servicesList.join(", ")}
            </Typography>
          </div>
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Additional Charge:</span> {bill.additionalCharge}
            </Typography>
          </div>
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Total Price:</span> {bill.totalPrice}
            </Typography>
          </div>
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Payment Type:</span> {bill.paymentType}
            </Typography>
          </div>
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Status:</span> {bill.status}
            </Typography>
          </div>
          <div>
            <Typography variant="body1" style={styles.data}>
              <span style={styles.label}>Notes:</span> {bill.notes}
            </Typography>
          </div>

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

export default BillDetailsView;
