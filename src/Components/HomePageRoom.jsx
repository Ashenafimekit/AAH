import React, { useEffect } from "react";
import bedroom1 from "../assets/images/bedroom.jpg";
import bedroom2 from "../assets/images/bedroom2.jpg";
import bedroom3 from "../assets/images/bedroom3.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";

const HomePageRoom = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      offset: 100, 
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="bg-blueBlack text-white p-4 rounded-lg">
        <h1 className="font-bold text-2xl text-center ">Our Room Types</h1>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col sm:flex-row justify-center items-center gap-10 "
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="animate-slideInBottom flex flex-col items-center justify-center gap-1 shadow-xl rounded-lg w-3/4 sm:w-1/4"
        >
          <img
            src={bedroom1}
            alt="Arab Ali Hotel Room Type one"
            className="rounded-t-lg"
          />
          <h1 className="font-bold text-lg">SINGLE</h1>
          <p className="text-sm text-center p-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            impedit dolores maiores esse molestiae dolor nemo suscipit nulla
            sapiente quae?
          </p>
          <Link to={`/room-detail/Single`}>
            <button className="bg-golden p-2 text-black font-semibold rounded-lg mb-4 hover:bg-blueBlack hover:text-white">
              See More
            </button>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="animate-slideInBottom flex flex-col items-center justify-center gap-1 shadow-xl rounded-lg w-3/4 sm:w-1/4"
        >
          <img
            src={bedroom3}
            alt="Arab Ali Hotel Room Type one"
            className="rounded-t-lg "
          />
          <h1 className="font-bold text-lg">KING</h1>
          <p className="text-sm text-center p-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            impedit dolores maiores esse molestiae dolor nemo suscipit nulla
            sapiente quae?
          </p>
          <Link to={`/room-detail/King`}>
            <button className="bg-golden p-2 text-black font-semibold rounded-lg mb-4 hover:bg-blueBlack hover:text-white">
              See More
            </button>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="animate-slideInBottom flex flex-col items-center justify-center gap-1 shadow-xl rounded-lg w-3/4 sm:w-1/4"
        >
          <img
            src={bedroom2}
            alt="Arab Ali Hotel Room Type one"
            className="rounded-t-lg "
          />
          <h1 className="font-bold text-lg">TWIN</h1>
          <p className="text-sm text-center p-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            impedit dolores maiores esse molestiae dolor nemo suscipit nulla
            sapiente quae?
          </p>
          <Link to={`/room-detail/Twin`}>
            <button className="bg-golden p-2 text-black font-semibold rounded-lg mb-4 hover:bg-blueBlack hover:text-white">
              See More
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePageRoom;
