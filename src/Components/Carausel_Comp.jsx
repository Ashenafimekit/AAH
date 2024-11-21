import React from "react";
import { Carousel } from "antd";
import bd1 from '../assets/images/bedroom.jpg'
import bd2 from '../assets/images/bedroom2.jpg'
import bd3 from '../assets/images/bedroom3.jpg'

const Carousel_Comp = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 py- shadow-lg ">
      <div className="font-bold text-2xl">
        <h2>Showcase</h2>
      </div>
      <div className="w-full md:w-2/3 lg:w-2/3 max-w-screen-lg overflow-hidden rounded-lg shadow-lg relative">
        <Carousel
          autoplay
          arrows 
          speed={3000}
          pauseOnHover
          centerMode
          
          centerPadding="100px" 
        >
          <div className="flex items-center justify-center h-64 md:h-72 lg:h-80 p-2">
            <img
              src={bd1}
              alt="Highway"
              className="carousel-item object-cover w-full h-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex items-center justify-center h-64 md:h-72 lg:h-80 p-2">
            <img
              src={bd2}
              alt="Mountains"
              className="carousel-item object-cover w-full h-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex items-center justify-center h-64 md:h-72 lg:h-80 p-2">
            <img
              src={bd3}
              alt="Road 1"
              className="carousel-item object-cover w-full h-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex items-center justify-center h-64 md:h-72 lg:h-80 p-2">
            <img
              src={bd1}
              alt="Road 2"
              className="carousel-item object-cover w-full h-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex items-center justify-center h-64 md:h-72 lg:h-80 p-2">
            <img
              src={bd3}
              alt="Winding Road"
              className="carousel-item object-cover w-full h-full rounded-2xl shadow-lg"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Carousel_Comp;
