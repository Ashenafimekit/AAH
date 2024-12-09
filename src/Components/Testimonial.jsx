import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "antd";
import '../css/carousel.css'
const apiUrl = import.meta.env.VITE_API_URL;


const Testimonial = () => {
  const [testimony, setTestimony] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/testimonial/lists`
        );
        const IncomingTestimony = response.data.testimonials
        const approved = IncomingTestimony.filter((testimony)=>testimony.status === "approved")
        setTestimony(approved);
        //console.log("incoming testimony : ", testimony);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="bg-[#D9D9D9] p-4 rounded-lg mb-2 text-2xl font-semibold py-4">Testimonials</h1>
      <div className="w-1/2">
        <Carousel
          autoplay
          autoplaySpeed={3000}
          dots={true}
          effect="fade"
          className="w-full"
        >
          {testimony.map((tes, index) => (
            <div
              key={index}
              className="flex  bg-white  rounded-lg shadow-lg w-full border  "
            >
              <div className="p-10 text-center">
                <p className="text-xl italic">"{tes.message}"</p>
                <span className="font-semibold block ">{tes.fullName}</span>
                <span className="font-bold block">{tes.email}</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
