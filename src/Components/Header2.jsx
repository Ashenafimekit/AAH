import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./contactUs/Header.css";

function Header2(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#0d2026] h-48 md:h-72">
      <div className="flex flex-row gap-5 items-start justify-between">
        <div className="py-2 sm:py-2 px-0 sm:px-10 md:py-2 ml-10 mt-2 md:px-10 flex flex-col items-center font-bold text-[#deae54] hover:cursor-pointer">
          <h1 className="text-[#deae54] text-xl">Arab Ali</h1>
          <h1 className="text-xs text-[#deae54] tracking-widest">Hotel</h1>
          <hr className="border border-[#deae54] w-14 text-xs" />
          <h1 className="text-xs text-[#deae54]">فندق عرب علي</h1>
        </div>
        <div className="flex flex-row gap-3 items-center ml-auto mr-4">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-1 bg-[#ebf7f0] mt-4 rounded-md"
            >
              <MenuIcon />
            </button>
          </div>
          <div
            className={`md:flex md:space-x-10 md:py-5 ${
              isOpen ? "block" : "hidden"
            } md:flex text-white text-sm lg:text-lg text-opacity-90 mr-10 mt-2`}
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
              <Link to="/contact">CONTACT US</Link>
            </h1>
          </div>
        </div>
      </div>
      <div className="text-4xl md:text-6xl sm:text-5xl flex justify-center items-center pt-7 font-bold text-white text-opacity-97 uppercase">
        {props.title}
      </div>
    </div>
  );
}

export default Header2;
