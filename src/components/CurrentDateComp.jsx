import React, { useState, useEffect } from "react";

const CurrentDateComp = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the current date every second (you can adjust the interval as needed)
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>Current Date:</h2>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );
};

export default CurrentDateComp;
