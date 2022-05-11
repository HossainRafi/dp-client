import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-32">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="bg-gray-200">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p className="text-center text-xl font-semibold text-secondary p-5">You Have Selected: {format(date, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
