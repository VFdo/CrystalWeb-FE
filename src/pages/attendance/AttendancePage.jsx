import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AttendancePage() {
  // State to store form field values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Access the entered values
    console.log("EmployeeID:", employeeID);
    console.log("Password:", password);

    // You can now use the values as needed (e.g., send them to a server, perform validation, etc.)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="employeeID"
          placeholder="Enter Employee ID"
          value={employeeID}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AttendancePage;
