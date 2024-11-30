import React, { useState } from "react";
import bedroom from "../assets/images/bedroom.jpg";
import EditModal from "./EditModal";
import "../index.css";
import axios from "axios";
import Alert from "./Alert";
import RoomTypeComp from './RoomtypeComp'

const AdminRoom = () => {
  const [showAddRoomModal, setShowAddRoomModal] = React.useState(false);
  const [roomType, setRoomType] = React.useState("Single");
  const [roomNumber, setRoomNumber] = React.useState("");
  const [numberOfBeds, setNumberOfBeds] = React.useState(1);
  const [price, setPrice] = React.useState("");
  const [status, setStatus] = React.useState("available");
  const [error, setError] = React.useState("");
  const [formError, setFormError] = React.useState("");
  const [alert, setAlert] = React.useState(null);
  const [roomTypeSummary, setRoomTypeSummary] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [formState, setFormState] = React.useState({
    currentAmenity: "",
    amenities: [],
  });

  React.useEffect(() => {
    if (roomType === "Twin") {
      setNumberOfBeds(2);
    } else if(roomType === "Single") {
      setNumberOfBeds(1);
    }
  }, [roomType]);

  React.useEffect(() => {
    const fetchRoomTypeSummary = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/room/roomTypeSummary"
        );
        console.log("Response1", response);
        const data = await response.data;
        const singleRoom = data.roomSummary.find(
          (room) => room.roomType === "Single"
        );
        setRoomTypeSummary(singleRoom);
        console.log("check : ", roomTypeSummary);
      } catch (error) {
        console.error("Error fetching room type summary", error);
      }
    };
    fetchRoomTypeSummary();
  }, []);

  const handleAddAmenity = () => {
    const words = formState.currentAmenity.split(" ").filter(Boolean); // Split by spaces and remove empty words
    if (words.length > 5) {
      setFormError("Too many words! Please limit to 5 words.");
      return;
    }
    setError("");
    setFormState({
      ...formState,
      amenities: [...formState.amenities, formState.currentAmenity],
      currentAmenity: "",
    });
  };

  const handleRemoveAmenity = (index) => {
    setFormState({
      ...formState,
      amenities: formState.amenities.filter((_, i) => i !== index),
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setFormError("");
    if (!roomNumber || !price || !formState.amenities.length) {
      setFormError("Please fill all the fields");
      return;
    }
    const roomData = {
      roomType,
      roomNumber,
      numberOfBeds,
      amenities: formState.amenities,
      price,
      status,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/room/add",
        roomData
      );
      if (response.data.success) {
        setAlert({ message: "Room added successfully!", type: "success" });
        e.target.reset();
        setRoomType("Single");
        setNumberOfBeds("");
        setRoomNumber("");
        setFormState({
          currentAmenity: "",
          amenities: [],
        });
        setPrice("");
        setStatus("available");
      } else {
        setError("Failed to add Room, Please try again");
      }
      console.log(response);
    } catch (error) {
      console.error(error);
      setError("Failed to add Room, Please try again");
      setAlert({
        message: "Room creation failed. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}

      <div className="w-5/6 mt-10 flex justify-end">
        <button
          className="bg-blue-500 py-2 px-6 rounded text-blue-100 hover:bg-blue-600"
          onClick={() => setShowAddRoomModal(true)}
        >
          Add Room
        </button>
        <EditModal
          show={showAddRoomModal}
          onHandleClose={() => setShowAddRoomModal(false)}
        >
          <div className="max-w-lg h-full">
            <h2 className="flex justify-center text-2xl font-semibold text-blueBlack">
              Add Room
            </h2>
            <div className="mx-auto my-4 w-2/3 mt-8">
              <form onSubmit={handleFormSubmit}>
                <div>
                  <label className="text-medium font-medium text-blueBlack">
                    Room Type
                  </label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="w-full p-2 text-gray-800 border border-gray-400 rounded-md focus:outline-none focus:border-golden mt-1 mb-2 relative"
                  >
                    <option value="Single">Single</option>
                    <option value="King">King</option>
                    <option value="Twin">Twin</option>
                  </select>

                  {roomType === "King" && (
                    <div>
                      <label className="text-medium font-medium text-blueBlack">
                        Number of Beds
                      </label>
                      <input
                        type="number"
                        value={numberOfBeds}
                        onChange={(e) => setNumberOfBeds(e.target.value)}
                        className="w-full p-2 text-gray-800 border border-gray-400 rounded-md focus:outline-none focus:border-golden mt-1 mb-2"
                        placeholder="Enter number of beds"
                        min="1"
                      />
                    </div>
                  )}

                  <label className="text-medium font-medium text-blueBlack">
                    Room Number
                  </label>
                  <input
                    type="text"
                    value={roomNumber}
                    placeholder="Enter room number"
                    onChange={(e) => setRoomNumber(e.target.value)}
                    className="w-full p-2 text-gray-800 border border-gray-400 rounded-md focus:outline-none focus:border-golden mt-1 mb-2"
                  />

                  <label className="text-medium font-medium text-blueBlack">
                    Amenities
                  </label>
                  <div className="flex items-center p-2 border border-gray-400 rounded-md mt-1 mb-2 flex-wrap space-x-2 relative hover:border-golden">
                    <div
                      className="flex items-center space-x-2 overflow-auto max-h-20 w-full snap-x snap-mandatory scrollbar-hide"
                      style={{
                        WebkitOverflowScrolling: "touch",
                      }}
                    >
                      {formState.amenities.map((item, index) => (
                        <span
                          key={index}
                          className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs flex items-center snap-start whitespace-nowrap max-w-xs overflow-hidden text-ellipsis"
                          style={{
                            minWidth: "fit-content",
                          }}
                        >
                          {item}
                          <button
                            type="button"
                            className="ml-1 text-red-500 hover:text-red-700 text-xs"
                            onClick={() => handleRemoveAmenity(index)}
                          >
                            ✕
                          </button>
                        </span>
                      ))}
                    </div>

                    <input
                      type="text"
                      value={formState.currentAmenity}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          currentAmenity: e.target.value,
                        })
                      }
                      placeholder="Add amenity"
                      className="p-1 text-gray-800 focus:outline-none border-b border-gray-300 flex-grow focus:border-golden"
                    />
                    <button
                      type="button"
                      onClick={handleAddAmenity}
                      className="ml-2 text-blue-500 hover:text-blue-600 text-xl"
                    >
                      +
                    </button>
                  </div>

                  <label className="text-medium font-medium text-blueBlack">
                    Price
                  </label>
                  <input
                    type="text"
                    value={price}
                    placeholder="Enter price"
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-2 text-gray-800 border border-gray-400 rounded-md focus:outline-none focus:border-golden mt-1 mb-2"
                  />
                  {formError && (
                    <p className="text-red-500 text-sm">{formError}</p>
                  )}
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
                <div className="flex justify-end w-full mx-auto mt-2">
                  <button
                    type="submit"
                    className="text-lg text-green-100 px-8 py-1 rounded bg-green-500 hover:bg-green-600"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </EditModal>
      </div>

      <div className="flex flex-col w-5/6 sm:flex-row items-center justify-center gap-5 py-4 border-b-2 border-blueBlack-200 -ml-2">
        <div className="ml-2 flex flex-col items-center justify-center rounded-lg shadow-lg w-full sm:w-3/5 md:w-1/2 lg:w-1/3 max-h-[600px] overflow-auto">
          <img
            src={bedroom}
            alt="Arab Ali Hotel Room Type"
            className="rounded-t-lg w-full h-48 object-cover"
          />

          <h1 className="w-full bg-blueBlack text-center font-semibold text-gray-100 py-2 text-xl">
            SINGLE ROOM
          </h1>
          <div className="w-full flex flex-col border-b-4 rounded-lg border-blue-900">
            <div className="flex flex-col px-4 py-4 text-sm md:text-base font-medium bg-white rounded-lg space-y-1">
              <div className="flex justify-between items-center p-2 rounded-md bg-blue-50">
                <h2 className="text-gray-700">Total Rooms</h2>
                <h2 className="text-blue-700 font-semibold">
                  {roomTypeSummary.total ?? "N/A"}
                </h2>
              </div>

              <div className="flex justify-between items-center p-2 rounded-md bg-green-50">
                <h2 className="text-gray-700">Available</h2>
                <h2 className="text-green-700 font-semibold">
                  {roomTypeSummary.available}
                </h2>
              </div>

              <div className="flex justify-between items-center p-2 rounded-md bg-yellow-50">
                <h2 className="text-gray-700">Pending</h2>
                <h2 className="text-yellow-700 font-semibold">
                  {roomTypeSummary.pending}
                </h2>
              </div>

              <div className="flex justify-between items-center p-2 rounded-md bg-red-50">
                <h2 className="text-gray-700">Taken</h2>
                <h2 className="text-red-700 font-semibold">
                  {roomTypeSummary.taken}
                </h2>
              </div>
            </div>

            <div className="w-full flex justify-end pb-2 px-4 mb-2">
              <button
                className="bg-blue-500 text-gray-100 text-sm px-6 py-2 rounded-md hover:bg-blue-600"
                onClick={() => setShowSingleModal(true)}
              >
                Update
              </button>
              <EditModal
                show={showSingleModal}
                onHandleClose={() => setShowSingleModal(false)}
              >
                <RoomTypeEdit />
              </EditModal>
            </div>
          </div>
        </div>

        <div className="ml-2 card flex flex-col items-center justify-center rounded-lg shadow-lg w-3/4 sm:w-3/5 md:w-1/2 lg:w-1/3 max-h-[600px] overflow-auto">
          <img
            src={bedroom}
            alt="Arab Ali Hotel Room Type"
            className="rounded-t-lg w-full h-48 object-cover"
          />

          <h1 className="w-full bg-blueBlack text-center font-semibold text-gray-100 py-2 text-xl">
            KING ROOM
          </h1>
          <div className="w-full flex flex-col border-b-4 rounded-lg border-blue-900">
            <div className="flex flex-col px-4 py-4 text-sm md:text-base font-medium bg-white rounded-lg space-y-1">
              <div className="flex justify-between items-center p-2 rounded-md bg-blue-50">
                <h2 className="text-gray-700">Total Rooms:</h2>
                <h2 className="text-blue-700 font-semibold">20</h2>
              </div>

              <div className="flex justify-between items-center p-2 rounded-md bg-green-50">
                <h2 className="text-gray-700">Available:</h2>
                <h2 className="text-green-700 font-semibold">12</h2>
              </div>

              <div className="flex justify-between items-center p-2 rounded-md bg-yellow-50">
                <h2 className="text-gray-700">Pending:</h2>
                <h2 className="text-yellow-700 font-semibold">3</h2>
              </div>

              <div className="flex justify-between items-center p-2 rounded-md bg-red-50">
                <h2 className="text-gray-700">Taken:</h2>
                <h2 className="text-red-700 font-semibold">5</h2>
              </div>
            </div>

            <div className="w-full flex justify-end pb-2 px-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-600">
                Update
              </button>
            </div>
          </div>
        </div>

        <div className="ml-2 card flex flex-col items-center justify-center rounded-lg shadow-lg w-3/4 sm:w-3/5 md:w-1/2 lg:w-1/3 max-h-[600px] overflow-auto">
          <img
            src={bedroom}
            alt="Arab Ali Hotel Room Type"
            className="rounded-t-lg w-full h-48 object-cover"
          />

          <h1 className="w-full bg-blueBlack text-center font-semibold text-gray-100 py-2 text-xl">
            TWIN ROOM
          </h1>
          <div className="w-full flex flex-col border-b-4 rounded-lg border-blue-900">
            <div className="flex flex-col px-4 py-4 text-sm md:text-base font-medium bg-white rounded-lg space-y-1">
              <div className="flex justify-between items-center p-2 rounded-md bg-blue-50">
                <h2 className="text-gray-700">Total Rooms:</h2>
                <h2 className="text-blue-700 font-semibold">20</h2>
              </div>

              <div className="flex justify-between items-center p-2 rounded-md bg-green-50">
                <h2 className="text-gray-700">Available:</h2>
                <h2 className="text-green-700 font-semibold">12</h2>
              </div>

              <div className="flex justify-between items-center p-2 rounded-md bg-yellow-50">
                <h2 className="text-gray-700">Pending:</h2>
                <h2 className="text-yellow-700 font-semibold">3</h2>
              </div>

              <div className="flex justify-between items-center p-2 rounded-md bg-red-50">
                <h2 className="text-gray-700">Taken:</h2>
                <h2 className="text-red-700 font-semibold">5</h2>
              </div>
            </div>

            <div className="w-full flex justify-end pb-2 px-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-600">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRoom;
