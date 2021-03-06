import React from 'react';
import doctor from "../../assets/images/doctor.png"
import appointment from "../../assets/images/appointment.png"
import PrimaryButton from '../Shared/PrimaryButton';

const Appoinment = () => {
    return (
      <section
        style={{
          background: `url(${appointment})`,
        }}
        className="flex justify-center items-center"
      >
        <div className="flex-1 hidden lg:block">
          <img className="mt-[-120px]" src={doctor} alt="" />
        </div>
        <div className="flex-1 p-8">
          <h3 className="text-2xl text-primary font-bold">Appointment</h3>
          <h2 className="text-3xl text-white">Make An Appointment Today</h2>
          <p className="text-white pb-10 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            earum ab cupiditate autem accusantium expedita sequi, temporibus,
            aut illo doloribus quaerat explicabo, assumenda consectetur est vel
            ad sed maiores doloremque consequatur. Amet consequuntur quibusdam
            autem, quod maxime qui itaque quaerat.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </section>
    );
};

export default Appoinment;