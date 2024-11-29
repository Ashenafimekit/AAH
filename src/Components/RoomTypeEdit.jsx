import { useEffect, useState } from "react";
import axios from "axios";

const RoomTypeEdit = ({ roomType, alert, onSetAlert }) => {
  const [formState, setFormState] = useState({
    amenities: [],
    currentAmenity: "",
    price: "",
  });

  useEffect(() => {
    const fetchRoomTypeData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/room/roomTypes"
        );
        const data = response.data;
        console.log("Data", data);

        if (data.success) {
          const selectedRoom = data.rooms.find(
            (room) => room.roomType === roomType
          );
          if (selectedRoom) {
            setFormState({
              amenities: selectedRoom.amenities,
              price: selectedRoom.price,
              currentAmenity: "",
            });
          }
        }
        // console.log(formState)
      } catch (error) {
        console.log("Error fetching roomtype data", error);
      }
    };

    fetchRoomTypeData();
  }, [ roomType ]);

  const handleAddAmenity = () => {
    setFormState({
      ...formState,
      amenities: [...formState.amenities, formState.currentAmenity],
      currentAmenity: "",
    });
  };

  const handleRemoveAmenity = (index) => {
    const updatedAmenities = [...formState.amenities];
    updatedAmenities.splice(index, 1);
    setFormState({
      ...formState,
      amenities: formState.amenities.filter((_, i) => i !== index),
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await axios.put(
        `http://localhost:3000/update/${roomType}`,
        {
          amenities: formState.amenities,
          price: formState.price,
        }
      );
      if (response.data.success) {
        onSetAlert({
          message: "updated successfully!",
          type: "success",
        });
      } else {
        onSetAlert({
          message: "update failed. Please try again.",
          type: "error",
        });
      }
      console.log("Room updated", response.data);
    } catch (error) {
      console.log("Error updating room", error);
    }
  };

  return (
    <div className="max-w-lg h-full">
      <h2 className="flex justify-center text-2xl font-semibold text-blueBlack capitalize">
        Edit {roomType} room
      </h2>
      <div className="mx-auto my-4 w-full mt-8">
        <form onSubmit={handleEdit}>
          <div>
            <label className="text-medium font-medium text-blueBlack">
              Amenities
            </label>
            <div className="flex items-center p-2 border border-gray-400 rounded-md mt-1 mb-2 flex-wrap space-x-2 relative hover:border-golden">
              <div
                className="flex items-center space-x-2 overflow-auto max-h-20 w-full snap-x snap-mandatory scrollbar-hide"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {formState.amenities?.map((item, index) => (
                  <span
                    key={index}
                    className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs flex items-center snap-start whitespace-nowrap max-w-xs overflow-hidden text-ellipsis"
                    style={{ minWidth: "fit-content" }}
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
                placeholder="Add/edit amenity"
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
              name="price"
              value={formState.price}
              onChange={handleInputChange}
              placeholder="Enter price"
              className="w-full p-2 border text-gray-800 border-gray-400 rounded-md focus:outline-none focus:border-golden mt-1 mb-2"
            />
          </div>
          <div className="flex justify-end mx-auto mt-2">
            <button
              type="submit"
              className="text-lg text-green-100 px-8 py-1 rounded bg-green-500 hover:bg-green-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoomTypeEdit;
