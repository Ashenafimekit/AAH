import axios from "axios";
import React, { useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const AdminBooking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    roomType: "",
    checkInDate: "",
    checkOutDate: "",
    id: "",
    roomNo: "",
    tinNo: "",
    mobile: "",
    nationality: "",
    status: "confirmed",
  });
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("check ", formData);

    try {
      await axios.post(`${apiUrl}/book`, formData).then((res) => {
        console.log(res.data.status);
        setStatus(res.data.success);
        if (status === true) {
          setMessage("Successfully Booked");
        } else {
          setMessage("Please try again!");
        }
      });
      console.log(formData);
      setFormData({
        fullName: "",
        roomType: "",
        checkInDate: "",
        checkOutDate: "",
        id: "",
        roomNo: "",
        tinNo: "",
        mobile: "",
        nationality: "",
      });
    } catch (error) {
      if (error.response) {
        //  console.log(error.response.status, ": status code");
        if (error.response.status === 400) {
          setMessage("Checkout Date must be greater than Checkin Date");
        } else {
          console.log("Error: ", error);
          setMessage("Server Error");
        }
      }
    }
  };

  return (
    <div className="h-[85vh] w-full">
      <div className="flex flex-col border mx-8 h-full w-full">
        <h1 className="text-2xl text-center uppercase font-semibold flex justify-center">
          GUEST REGISTRATION FORM
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-blueBlack rounded-md w-full max-w-2xl h-11/12 flex flex-col justify-start items-center mx-auto mt-2 py-2 overflow-y-auto"
        >
          <div className="w-full max-w-lg">
            {/* Full Name */}
            <div className="flex flex-col">
              <label
                htmlFor="fullName"
                className="text-white text-lg font-normal mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleChange}
                className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
              />
            </div>

            {/* Room Type */}
            <div className="flex flex-col mt-2">
              <label
                htmlFor="roomType"
                className="text-white text-lg font-normal mb-1"
              >
                Room Type
              </label>
              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
              >
                <option value="Single">Single</option>
                <option value="King">King</option>
                <option value="Twin">Twin</option>
              </select>
            </div>

            {/* Date Inputs (Check-in and Check-out) */}
            <div className="flex flex-row space-x-4 mt-2 relative">
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="checkInDate"
                  className="text-white text-lg font-normal mb-1"
                >
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                  className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50 text-center"
                />
                <div className="absolute inset-y-0 -left-1 top-8 flex items-center pl-3 pointer-events-none cursor-pointer">
                  <CalendarMonthOutlinedIcon className="text-gray-400" />
                </div>
              </div>
              <div className="flex flex-col w-1/2 relative">
                <label
                  htmlFor="checkOutDate"
                  className="text-white text-lg font-normal mb-1"
                >
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkOutDate"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleChange}
                  className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50 text-center"
                />
                <div className="absolute inset-y-0 -left-1 top-8 flex items-center pl-3 pointer-events-none cursor-pointer">
                  <CalendarMonthOutlinedIcon className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* Room Number */}
            <div className="flex flex-col mt-2">
              <label
                htmlFor="roomNumber"
                className="text-white text-lg font-normal mb-1"
              >
                Room Number
              </label>
              <input
                type="number"
                id="roomNo"
                name="roomNo"
                placeholder="Enter Room Number"
                value={formData.roomNo}
                onChange={handleChange}
                className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
              />
            </div>

            {/* Phone Number & Tin Number */}
            <div className="flex flex-row space-x-4 mt-2">
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="mobile"
                  className="text-white text-lg font-normal mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="mobile"
                  placeholder="Enter phone number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="tinNo"
                  className="text-white text-lg font-normal mb-1"
                >
                  Tin Number
                </label>
                <input
                  type="text"
                  id="tinNo"
                  name="tinNo"
                  value={formData.tinNo}
                  onChange={handleChange}
                  className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
                />
              </div>
            </div>

            {/* Passport/ID Number & Nationality */}
            <div className="flex flex-row space-x-4 mt-2">
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="id"
                  className="text-white text-lg font-normal mb-1"
                >
                  Passport/Id Number
                </label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  placeholder="Enter Passport/ID"
                  value={formData.id}
                  onChange={handleChange}
                  className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="nationality"
                  className="text-white text-lg font-normal mb-1"
                >
                  Nationality
                </label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  placeholder="Enter nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white text-lg py-2 px-6 rounded-md mt-6 w-full hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminBooking;
