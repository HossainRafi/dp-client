import React from 'react';
import treatment from "../../assets/images/treatment.png"

const DentalCare = () => {
    return (
      <div class="hero min-h-screen px-10">
        <div class="hero-content flex-col lg:flex-row gap-12">
          <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 class="text-5xl font-bold text-secondary">
              Exceptional Dental Care, On Your Terms
            </h1>
            <p class="py-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              corporis explicabo saepe ullam quaerat sapiente dolores, officiis
              qui repellat ad porro provident dolorum reprehenderit ex alias
              itaque repudiandae inventore totam animi distinctio quo! Rem
              numquam deserunt repudiandae sunt, voluptate ullam!
            </p>
            <button class="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
};

export default DentalCare;