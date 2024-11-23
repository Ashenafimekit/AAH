import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Testimonial = () => {
  const [testimony, setTestimony] = useState([]);

  useEffect(()=>{

  },[])


  return (
    <div className="flex items-center justify-center w-full ">
      <div className="flex flex-col items-center justify-center gap-5 w-3/4 p-14 shadow-lg rounded-md border border-gray-300">
        <h1 className="font-bold text-3xl ">Testimonials</h1>
        <div>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          consectetur quidem earum iste quisquam neque."
        </p>
        <p className="text-sm text-center italic">Full Name</p>
        </div>
        <div className="space-x-6">
            <button className="bg-[#E0B973] px-2 rounded-md text-center"><ArrowBackIosIcon/></button>
            <button className="bg-[#E0B973] px-2 rounded-md text-center"><ArrowForwardIosIcon/></button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
