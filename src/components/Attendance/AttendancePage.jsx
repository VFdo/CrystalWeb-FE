import React, { useState } from "react";
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
      //await sendEmail(emailData);
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

  const sendEmail = (emailData) => {
    return new Promise((resolve) => {
      console.log("sending email...", emailData);
      fetch("http://localhost:8080/mail/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token"),
        },
        body: JSON.stringify(emailData),
      })
        .then((response) => {
          if (response.ok) {
            resolve(true);
            response.json().then((responseData) => {
              console.log("email sent:", responseData);
            });
          } else {
            resolve(false);
          }
        })
        .catch((error) => console.error("Error sending email:", error));
    });
  };

  // Example usage:
  const newEmail = {
    file: null,
    reciever: "janithkulatunge@gmail.com",
    //cc: "janithkulatunge@gmail.com",
    subject: "Email Subject",
    body: "Email Body",
  };

  sendEmail(newEmail)
    .then((success) => {
      if (success) {
        console.log("Email sent successfully!");
      } else {
        console.log("Failed to send email.");
      }
    })
    .catch((error) => console.error("Error:", error));

  return (
    <div>
      <AttendanceForm
        attendanceData={newAttendance}
        onClose={handleClose}
        onChange={setAttendance}
        onSave={[handleAttendanceSave, sendEmail]}
      />
    </div>
  );
};
export default AttendancePage;
