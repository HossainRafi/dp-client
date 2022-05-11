import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const DentalCare = () => {
  return (
    <div className="hero min-h-screen px-1 pb-24">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <img
          src={treatment}
          className="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold text-secondary">
            Exceptional Dental Care, On Your Terms
          </h1>
          <p className="py-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            corporis explicabo saepe ullam quaerat sapiente dolores, officiis
            qui repellat ad porro provident dolorum reprehenderit ex alias
            itaque repudiandae inventore totam animi distinctio quo! Rem numquam
            deserunt repudiandae sunt, voluptate ullam!
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
