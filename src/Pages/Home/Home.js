import React from "react";
import Appointment from "./Appointment";
import Banner from "./Banner";
import Contact from "./Contact";
import DentalCare from "./DentalCare";
import Info from './Info';
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="px-8">
          <Banner />
          <Info />
          <Services />
          <DentalCare />
          <Appointment />
          <Testimonials />
          <Contact/>
    </div>
  );
};

export default Home;
