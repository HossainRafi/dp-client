import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title flex justify-center text-secondary text-2xl">
          {name}
        </h2>
        <p>
          {slots.length > 0 ? (
            <span className="flex justify-center text-lg">{slots[0]}</span>
          ) : (
            <span className="text-red-500 flex justify-center text-lg">
              No Slot Available
            </span>
          )}
        </p>
        <p className="flex justify-center">
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions pt-5 flex justify-center">
          <label
            for="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            className="btn btn-sm text-white bg-gradient-to-r from-secondary to-primary text-lg"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
