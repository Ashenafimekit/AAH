import React from "react";
import bedroom from "../assets/images/bedroom.jpg";
import bedroom2 from "../assets/images/bedroom2.jpg";
import bedroom3 from "../assets/images/bedroom3.jpg";

const AdminRoom = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 border">
      <div className="text-center font-semibold text-4xl">
        <h1>Room Statistics</h1>
      </div>

      <div className="flex flex-row items-center justify-center gap-5 w-5/6 py-10">
        <div className="card  flex flex-col items-center justify-center rounded-lg shadow-lg w-3/4 sm:w-3/5 md:w-1/2 lg:w-1/3">
          <div className="">
            <img
              src={bedroom}
              alt="Arab Ali Hotel Room Type"
              className="rounded-t-lg"
            />
          </div>

          <div className="w-full bg-blueBlack text-center font-semibold text-white py-2">
            <h1>SINGLE ROOM</h1>
          </div>
          <div className="border-2 border-gray-500 rounded-b-lg w-full flex flex-col items-center justify-between">
            <div className="p-5 text-lg font-semibold">
              <h1>Total Rooms : </h1>
              <h1>Available : </h1>
              <h1>Taken :</h1>
            </div>
          </div>
        </div>
        <div className="card flex flex-col items-center justify-center rounded-lg shadow-lg w-3/4 sm:w-3/5 md:w-1/2 lg:w-1/3">
          <div className="">
            <img
              src={bedroom3}
              alt="Arab Ali Hotel Room Type"
              className="rounded-t-lg"
            />
          </div>

          <div className="w-full bg-blueBlack text-center font-semibold text-white py-2">
            <h1>KING ROOM</h1>
          </div>
          <div className="border-2 border-gray-500 rounded-b-lg w-full flex flex-col items-center justify-between">
            <div className="p-6 text-lg font-semibold">
              <h1>Total Rooms : </h1>
              <h1>Available : </h1>
              <h1>Taken :</h1>
            </div>
          </div>
        </div>
        <div className="card flex flex-col items-center justify-center rounded-lg shadow-lg w-3/4 sm:w-3/5 md:w-1/2 lg:w-1/3 ">
          <div className="">
            <img
              src={bedroom2}
              alt="Arab Ali Hotel Room Type"
              className="rounded-t-lg"
            />
          </div>

          <div className="w-full bg-blueBlack text-center font-semibold text-white py-2">
            <h1>TWIN ROOM</h1>
          </div>
          <div className="border-2 border-gray-500 rounded-b-lg w-full flex flex-col items-center justify-between">
            <div className="p-5 text-lg font-semibold">
              <h1>Total Rooms : </h1>
              <h1>Available : </h1>
              <h1>Taken :</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRoom;
