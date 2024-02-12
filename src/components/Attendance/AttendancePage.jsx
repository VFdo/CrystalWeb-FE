import React, { useState } from "react";
import { addAttendance } from "../utils/ApiFunctions";
import { Form, Row, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";

import AttendanceForm from "./AttendanceForm";

const AttendancePage = () => {
  const [newAttendance, setAttendance] = useState({
    employeeRefId: "",
    password: "",
    date: "",
    inTime: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  // const [open, setOpen] = useState(true);
  const open = true;

  const navigate = useNavigate(null);

  // const handleOpen = () => setOpen(true);
  const handleClose = () => {
    sessionStorage.removeItem("attendanceId");
    navigate("/attendance");
  };

  const handleAttendanceSave = async (e) => {
    e.preventDefault();
    const success = await saveAttendance(newAttendance);
    if (success) {
      console.log("attendance details saved successfully!");
      navigate("/attendance");
      // window.location.reload()
    } else {
      console.log("An error has occured!");
      setErrorMessage("Unable to update user");
    }
    setTimeout(() => {
      setErrorMessage("");
    }, 4000);
  };

  const saveAttendance = (newAttendance) => {
    return new Promise((resolve) => {
      console.log("saving attendance...", newAttendance);
      fetch("http://localhost:8080/attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token"),
        },
        body: JSON.stringify(newAttendance),
      })
        .then((response) => {
          if (response.ok) {
            resolve(true);
            response.json().then((responseData) => {
              console.log("attendance data saved:", responseData);
            });
          } else {
            resolve(false);
          }
        })
        .catch((error) => console.error("Error saving attendance:", error));
    });
  };

  return (
    <div>
      <AttendanceForm
        attendanceData={newAttendance}
        onClose={handleClose}
        onChange={setAttendance}
        onSave={handleAttendanceSave}
      />
    </div>
  );
};
export default AttendancePage;
