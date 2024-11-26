import React, { useState } from "react";
import bedroom from "../assets/images/bedroom.jpg";
import bedroom2 from "../assets/images/bedroom2.jpg";
import bedroom3 from "../assets/images/bedroom3.jpg";

const Room = () => {
  const [roomPrice, setRoomPrice] = useState([]);
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full">
      <div className="w-3/5 flex flex-col gap-3 items-center justify-center">
        <h1 className="font-semibold text-3xl text-center">ROOMS AND RATES</h1>
        <p className="text-sm text-center">
          Each of our bright, light-flooded rooms come with everything you could
          possibly need for a comfortable stay. And yes, comfort isn’t our only
          objective, we also value good design, sleek contemporary furnishing
          complemented by the rich tones of nature’s palette as visible from our
          rooms’ sea-view windows and terraces.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-5 w-3/4">
        <div className="card relative flex flex-col items-center justify-center rounded-lg shadow-lg w-3/4 sm:w-3/5 md:w-1/2 lg:w-1/3">
          <div className="">
            <img
              src={bedroom}
              alt="Arab Ali Hotel Room Type"
              className="rounded-t-lg"
            />
          </div>
          <div>
            <button className="bg-golden p-2 rounded-b-lg absolute top-0 right-0">
              <p>1800ETB</p>
            </button>
          </div>
          <div className="w-full bg-blueBlack text-center font-semibold text-white py-2">
            <h1>SINGLE ROOM</h1>
          </div>
          <div className="border-2 border-gray-500 rounded-b-lg w-full flex flex-col items-center justify-between">
            <div className="p-5">
              <button className="bg-golden py-2 px-10 rounded-lg font-semibold ">
                BOOK
              </button>
            </div>
          </div>
        </div>
        <div className="card relative flex flex-col items-center justify-center rounded-lg shadow-lg w-3/4 sm:w-3/5 md:w-1/2 lg:w-1/3">
          <div className="">
            <img
              src={bedroom3}
              alt="Arab Ali Hotel Room Type"
              className="rounded-t-lg"
            />
          </div>
          <div>
            <button className="bg-golden p-2 rounded-b-lg absolute top-0 right-0">
              <p>2500ETB</p>
            </button>
          </div>
          <div className="w-full bg-blueBlack text-center font-semibold text-white py-2">
            <h1>KING ROOM</h1>
          </div>
          <div className="border-2 border-gray-500 rounded-b-lg w-full flex flex-col items-center justify-between">
            <div className="p-6">
              <button className="bg-golden py-2 px-10 rounded-lg font-semibold ">
                BOOK
              </button>
            </div>
          </div>
        </div>
        <div className="card relative flex flex-col items-center justify-center rounded-lg shadow-lg w-3/4 sm:w-3/5 md:w-1/2 lg:w-1/3 ">
          <div className="">
            <img
              src={bedroom2}
              alt="Arab Ali Hotel Room Type"
              className="rounded-t-lg"
            />
          </div>
          <div>
            <button className="bg-golden p-2 rounded-b-lg absolute top-0 right-0">
              <p>3000ETB</p>
            </button>
          </div>
          <div className="w-full bg-blueBlack text-center font-semibold text-white py-2">
            <h1>TWIN ROOM</h1>
          </div>
          <div className="border-2 border-gray-500 rounded-b-lg w-full flex flex-col items-center justify-between">
            <div className="p-5">
              <button className="bg-golden py-2 px-10 rounded-lg font-semibold ">
                BOOK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
