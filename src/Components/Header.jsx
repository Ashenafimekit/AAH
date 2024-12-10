import React, { useState } from "react";
import hotel from "../assets/images/hotel.jpg";
import bedroom from "../assets/images/bedroom.jpg";
import reception from "../assets/images/receptionists.jpg";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./contactUs/Header.css";


const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Images = {
    "/": hotel,
    "/room": bedroom,
    "/service": reception,
  };

  const currentImage = Images[location.pathname] || hotel;

  return (
    <div className="w-full relative">
      <div className="w-full">
        <img
          src={currentImage}
          alt="Arab Ali Hotel image"
          className="w-full object-cover h-[40vh] sm:h-[45vh] md:h-[55vh] lg:h-[60vh] xl:h-[65vh] 2xl:h[70vh] "
        />
      </div>
      <div className="absolute inset-0 text-white">
        <div className="flex flex-row gap-5 items-start justify-start pl-8 sm:pl-20 relative">
          <div className="border-2 border-blueBlack bg-[#E0B973] py-2 px-10 sm:py-2 sm:px-10 md:py-2 md:px-10 rounded-b-2xl flex flex-col items-center font-bold text-[#14274A]">
            <h1>Arab Ali</h1>
            <h1 className="-mt-2 text-xs">Hotel</h1>
            <hr className="border border-[#14274A] w-12 mb-1 text-xs" />
            <h1 className="-mt-1 text-xs">فندق عرب علي</h1>
          </div>
          <div className="flex flex-row gap-3 absolute top-3 right-8">
            <div
              className={`md:flex md:space-x-10 md:py-5 ${
                isOpen ? "flex flex-col" : "hidden"
              } md:flex-row md:mr-10 `}
            >
              <h1 className="header">
                <Link to="/">HOME</Link>
              </h1>
              <h1 className="header">
                <Link to="/room">ROOM</Link>
              </h1>
              <h1 className="header">
                <Link to="/service">SERVICE</Link>
              </h1>
              <h1 className="header">
                <Link to="/gallery">GALLERY</Link>
              </h1>
              <h1 className="header">
                <Link to="/contact">CONTACT</Link>
              </h1>
              
            </div>
            <div className="md:hidden -ml-5 mr-10">
              <button onClick={toggleMenu}>
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start mx-10 my-10 sm:mx-16 sm:my-14 md:mx-26 md:my-20 lg:mx-40 lg:my-20">
          <h1 className=" text-lg sm:text-2xl md:text-2xl lg:text-3xl">
            WELCOME TO
          </h1>
          <h1 className=" text-2xl sm:text-5xl md:text-7xl lg:text-9xl ">
            Arab Ali
          </h1>
          <h1 className=" text-sm sm:text-xl md:text-2xl lg:text-3xl ">
            HOTEL
          </h1>
          <p className="text-md sm:text-lg">
            Book your stay and enjoy Luxury redefined at the most affordable
            rates.
          </p>
        </div>
        <div className="flex items-center justify-center ">
          <button className="bg-[#E0B973] py-3 px-5 rounded-lg hover:bg-blueBlack">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
