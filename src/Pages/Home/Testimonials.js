import React from 'react';
import people1 from "../../assets/images/people1.png"
import people2 from "../../assets/images/people2.png"
import people3 from "../../assets/images/people3.png"
import quote from "../../assets/icons/quote.svg"
import Review from './Review';

const Testimonials = () => {
    const reviews = [
      {
        _id: 1,
        name: "John Doe",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi labore, ab excepturi illo itaque doloribus.",
        location: "California",
        img: people2,
      },
      {
        _id: 2,
        name: "Larry Page",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi labore, ab excepturi illo itaque doloribus.",
        location: "Washington",
        img: people1,
      },
      {
        _id: 3,
        name: "Jeremy Taylor",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi labore, ab excepturi illo itaque doloribus.",
        location: "California",
        img: people3,
      },
    ];
    return (
      <section className="my-28">
        <div className="flex justify-between">
          <div>
            <h4 className="text-2xl text-primary font-bold">Testimonials</h4>
            <h2 className="text-3xl font-bold">What Our Patients Says</h2>
          </div>
          <div>
            <img src={quote} className="w-24 lg:w-48" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </section>
    );
};

export default Testimonials;