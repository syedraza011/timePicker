import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateComponent = () => {
  const [startDate, setStartDate] = useState(null);


  const handleDateChange = (date) => {
    setStartDate(date);
    onSelectDate(moment(e.target.value).format("YYYY-MM-DD"));
  };

  return (
    <div>
      <DatePicker
        placeholderText="Select Start Date"
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        isClearable
        showYearDropdown
        scrollableYearDropdown
      />
      {startDate && (
        <p>Selected date: {startDate.toLocaleDateString("en-US")}</p>
      )}
    </div>
  );
};

export default DateComponent;
