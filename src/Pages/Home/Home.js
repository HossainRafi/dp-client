import React from "react";
import Appoinment from "./Appoinment";
import Banner from "./Banner";
import DentalCare from "./DentalCare";
import Info from './Info';
import Services from "./Services";

const Home = () => {
  return (
    <div className="px-8">
          <Banner />
          <Info />
          <Services />
          <DentalCare />
          <Appoinment/>
    </div>
  );
};

export default Home;
