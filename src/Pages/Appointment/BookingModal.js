import React from "react";
import { format } from "date-fns";
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, date, setTreatment,refetch }) => {
  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
 const formattedDate = format(date, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(_id,name,slot);

const booking = {
  treatmentId: _id,
  treatment: name,
  date: formattedDate,
  slot,
  patient: user.email,
  patientName: user.displayName,
  phone: e.target.phone.value,
    };
    
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Appointment is set on ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch()
        // For close the modal
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
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
              {slots.map((slot,index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs text-lg"
            />
            <input
              type="text"
              name="email"
              disabled
              value={user?.email || ""}
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
