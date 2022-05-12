import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-3 top-6"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl text-secondary text-center">
            Booking For: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="pt-7 pb-3 grid grid-cols-1 gap-5 justify-items-center"
          >
            <input
              type="text"
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs text-lg"
              readOnly
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs text-lg"
            >
              {slots.map((slot) => (
                <option value={slot} key={treatment._id}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered w-full max-w-xs text-lg"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full max-w-xs text-lg"
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter Your Phone Number"
              className="input input-bordered w-full max-w-xs text-lg"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary text-lg w-1/3 text-white max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
