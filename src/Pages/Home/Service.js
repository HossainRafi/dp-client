import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card bg-gradient-to-r from-primary to-secondary shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={service.img}
          alt=""
          className="rounded-xl w-[115px] h-[115px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl text-white font-bold">{service.name}</h2>
        <p className="text-justify text-white">{service.desc}</p>
      </div>
    </div>
  );
};

export default Service;
