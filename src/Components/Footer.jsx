import React from "react";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-around  gap-5 bg-[#14274A] text-white h-full ">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-golden">
          <h1 className="font-bold text-xl ">Arab Ali Hotel</h1>
          <h1 className="font-semibold text-lg">فندق عرب علي</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
            <h1>497 Evergreen Rd. Roseville, CA 95673</h1>
            <h1>+251987654321</h1>
            <h1>arabalihotel@gmail.com</h1>
        </div>
      </div>
      <div className="flex flex-row  md:flex-col gap-3 text-white">
        <h1 className="text-lg font-semibold">Our Social Medias</h1>
        <a href="" className="hover:text-[#E0B973]"><Facebook/> Facebook</a>
        <a href="" className="hover:text-[#E0B973]"><Instagram/> Instagram</a>
        <a href="" className="hover:text-[#E0B973]"><YouTube/> Youtube</a>
      </div>
      <div className="flex flex-col gap-2">
        <h1>Leave Your Testimonial Here</h1>
        <form className="flex flex-col gap-2">
            <input type="text" name="fullName" placeholder="Full Name" className=" border-2 border-golden bg-blueBlack rounded-md px-2 text-center"/>
            <input type="email" name="email" placeholder="Email" className=" border-2 border-golden bg-blueBlack rounded-md px-2 text-center"/>
            <textarea name="message" placeholder="Message" className="border-2 border-golden bg-blueBlack rounded-md text-center p-2"></textarea>
        </form>
        
      </div>
    </div>
  );
};

export default Footer;
