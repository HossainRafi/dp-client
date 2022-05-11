import React from "react";
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
    const services = [
      {
        _id: 1,
        name: "Fluoride Treatment",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sint incidunt rerum. Vel vitae quam molestias architecto blanditiis pariatur iusto.",
        img: fluoride,
      },
      {
        _id: 2,
        name: "Cavity Filling",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sint incidunt rerum. Vel vitae quam molestias architecto blanditiis pariatur iusto.",
        img: cavity,
      },
      {
        _id: 3,
        name: "Teeth Whitening",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sint incidunt rerum. Vel vitae quam molestias architecto blanditiis pariatur iusto.",
        img: whitening,
      },
    ];
  return (
    <div className="pt-24 pb-16">
      <div className="text-center">
        <h3 className=" text-secondary text-3xl  font-bold uppercase">
          Our Services
        </h3>
        <h3 className="text-4xl font-bold font-serif text-primary py-2">
          Services We Provide
        </h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
