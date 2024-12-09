import React from "react";
import gym from "../assets/images/gym.png";
import meeting from "../assets/images/meeting.png";
import restaurant from "../assets/images/restaurant.jpg";

const HomePageService = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="bg-[#D9D9D9] p-4 rounded-lg">
        <h1 className="font-bold text-2xl text-center">
          Our Services
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-10">
        <div className="flex flex-col items-center justify-center shadow-xl rounded-lg w-3/4 md:w-1/3">
          <img
            src={restaurant}
            alt="Arab Ali Hotel Room Type one"
            className="rounded-t-lg "
          />
          <div className="bg-[#14274A] text-white rounded-b-lg p-3">
            <h1 className="font-semibold text-lg text-center">Restaurant</h1>
            <p className="text-sm text-justify p-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              impedit dolores maiores esse molestiae dolor nemo suscipit nulla
              sapiente quae?
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center shadow-xl rounded-lg w-3/4 md:w-1/3">
          <img
            src={gym}
            alt="Arab Ali Hotel Room Type one"
            className="rounded-t-lg object-cover"
          />
          <div className="bg-[#14274A] text-white rounded-b-lg p-3">
            <h1 className="font-semibold text-lg text-center">
              Fitness Center
            </h1>
            <p className="text-sm text-justify p-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              impedit dolores maiores esse molestiae dolor nemo suscipit nulla
              sapiente quae?
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center shadow-xl rounded-lg w-3/4 md:w-1/3">
          <img
            src={meeting}
            alt="Arab Ali Hotel Room Type one"
            className="rounded-t-lg "
          />
          <div className="bg-[#14274A] text-white rounded-b-lg p-3">
            <h1 className="font-semibold text-lg text-center">
              Meeting Rooms and Conference Halls
            </h1>
            <p className="text-sm text-justify p-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              impedit dolores maiores esse molestiae dolor nemo suscipit nulla
              sapiente quae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageService;
