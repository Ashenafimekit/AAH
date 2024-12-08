import React, { useEffect, useState } from "react";
import bedroom from "../assets/images/bedroom.jpg";
import bedroom2 from "../assets/images/bedroom2.jpg";
import bedroom3 from "../assets/images/bedroom3.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const Room = () => {
  const [roomPrice, setRoomPrice] = useState([]);
  const [singleRoomPrice, setSingleRoomPrice] = useState(0);
  const [kingRoomPrice, setKingRoomPrice] = useState(0);
  const [twinRoomPrice, setTwinRoomPrice] = useState(0);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(`${apiUrl}/room/getPrice`);
        const roomDetails = response.data.roomDetail;

        // Update room prices based on room type
        roomDetails.forEach((room) => {
          if (room.roomType === "Single") {
            setSingleRoomPrice(room.price);
            console.log("single room price : ", room.price);
          } else if (room.roomType === "King") {
            setKingRoomPrice(room.price);
            console.log("king room price : ", room.price);
          } else if (room.roomType === "Twin") {
            setTwinRoomPrice(room.price);
            console.log("twin room price : ", room.price);
          }
        });

        setRoomPrice(roomDetails);
        console.log("room price array: ", roomDetails);
      } catch (error) {
        console.log("Error : ", error);
      }
    };

    fetchPrice();
  }, []);

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
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-3/4">
        <div className="card relative flex flex-col items-center justify-center rounded-lg shadow-lg w-3/4 sm:w-3/5 md:w-1/2 lg:w-1/3">
          <div className="">
            <img
              src={bedroom}
              alt="Arab Ali Hotel Room Type"
              className="rounded-t-lg"
            />
          </div>
          <div>
            <span className="bg-golden p-2 rounded-b-lg absolute top-0 right-0">
              <p>{singleRoomPrice}ETB</p>
            </span>
          </div>
          <div className="w-full bg-blueBlack text-center font-semibold text-white py-2">
            <h1>SINGLE ROOM</h1>
          </div>
          <div className="border-2 border-gray-500 rounded-b-lg w-full flex flex-col items-center justify-between">
            <div className="p-5">
              <Link to={`/room-detail/Single`}>
                <button className="bg-golden py-2 px-10 rounded-lg font-semibold ">
                  BOOK
                </button>
              </Link>
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
            <span className="bg-golden p-2 rounded-b-lg absolute top-0 right-0">
              <p>{kingRoomPrice}ETB</p>
            </span>
          </div>
          <div className="w-full bg-blueBlack text-center font-semibold text-white py-2">
            <h1>KING ROOM</h1>
          </div>
          <div className="border-2 border-gray-500 rounded-b-lg w-full flex flex-col items-center justify-between">
            <div className="p-6">
              <Link to={`/room-detail/King`}>
                <button className="bg-golden py-2 px-10 rounded-lg font-semibold ">
                  BOOK
                </button>
              </Link>
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
            <span className="bg-golden p-2 rounded-b-lg absolute top-0 right-0">
              <p>{twinRoomPrice}ETB</p>
            </span>
          </div>
          <div className="w-full bg-blueBlack text-center font-semibold text-white py-2">
            <h1>TWIN ROOM</h1>
          </div>
          <div className="border-2 border-gray-500 rounded-b-lg w-full flex flex-col items-center justify-between">
            <div className="p-5">
              <Link to={`/room-detail/Twin`}>
                <button className="bg-golden py-2 px-10 rounded-lg font-semibold ">
                  BOOK
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
