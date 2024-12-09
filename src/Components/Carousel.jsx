import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../css/swiperCarousel.css";

import bd1 from "../assets/images/bedroom.jpg";
import bd2 from "../assets/images/bedroom2.jpg";
import bd3 from "../assets/images/bedroom3.jpg";

const Carousel = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="bg-[#D9D9D9] p-4 rounded-lg">
        <h1 className="text-2xl text-center font-bold">
          ShowCase
        </h1>
      </div>
      <div className="carousel-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide>
            <div className="slide">
              <img src={bd1} alt="Arab Ali Hotel" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src={bd2} alt="Arab Ali Hotel" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src={bd3} alt="Arab Ali Hotel" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src={bd1} alt="Arab Ali Hotel" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
