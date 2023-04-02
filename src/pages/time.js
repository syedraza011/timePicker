import React, { useState } from "react";
import TimePicker from "react-datepicker";
import styles from "../styles/Home.module.css";
import "react-datepicker/dist/react-datepicker.css";

const Time = () => {
  const [arrivetime, setArrivetime] = useState(null);

  const handleTimeChange = (arrivetime) => {
    setArrivetime(arrivetime);
  };

  return (
    <div>
      <TimePicker
        placeholderText="Select Arrival Time"
        selected={arrivetime}
        onChange={handleTimeChange}
        showTimeSelect
        isClearable
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="hh:mm:ss aa"
      />
      {arrivetime && (
        <p>
          Arrival time:{" "}
          {new Date(arrivetime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </p>
      )}
    </div>
  );
};

export default Time;
