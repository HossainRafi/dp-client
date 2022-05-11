import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import map from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-3">
      <InfoCard
        cardTitle="Opening Hour"
        img={clock}
        bgColor="bg-gradient-to-r from-secondary to-primary"
      />
      <InfoCard cardTitle="Our Location" img={map} bgColor="bg-accent" />
      <InfoCard
        cardTitle="Contact Us"
        img={phone}
        bgColor="bg-gradient-to-r from-secondary to-primary"
      />
    </div>
  );
};

export default Info;
