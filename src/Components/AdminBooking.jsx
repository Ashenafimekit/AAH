import axios from "axios";
import { useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Alert from "./Alert";

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
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName)
      newErrors.fullName = "Please fill in your full name";
    if (!formData.checkInDate)
      newErrors.checkInDate = "Please select a check-in date";
    if (!formData.checkOutDate)
      newErrors.checkOutDate = "Please select a check-out date";
    if (!formData.mobile) newErrors.mobile = "Please provide a mobile number";
    if (formData.mobile && formData.mobile.length !== 10)
      newErrors.mobile = "Mobile number should be 10 digits";
    if (!formData.id) newErrors.id = "Please provide an ID number";
    if (!formData.roomNo) newErrors.roomNo = "Please provide a room number";
    if (!formData.nationality)
      newErrors.nationality = "Please provide nationality";
    if (
      formData.checkInDate &&
      formData.checkOutDate &&
      formData.checkInDate > formData.checkOutDate
    ) {
      newErrors.checkOutDate =
        "Check-out date should be greater than check-in date";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await axios.post(`${apiUrl}/book`, formData);
      if (response.data.success) {
        setAlert({ type: "success", message: "Booked successfully" });
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
        setErrors({});
      } else {
        setAlert({
          type: "error",
          message: "Booking failed. Please try again.",
        });
      }
    } catch (error) {
      setAlert({ type: "error", message: "Booking failed. Please try again." });
    }
  };

  return (
    <div className="h-[85vh] w-full">
      <div className="flex flex-col mx-8 h-full">
        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
            onHandleClose={() => setAlert(null)}
          />
        )}
        <h1 className="text-2xl text-center uppercase font-semibold flex justify-center">
          GUEST REGISTRATION FORM
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-blueBlack rounded-md w-full max-w-3xl h-11/12 flex flex-col justify-start items-center mx-auto mt-2 py-2 overflow-y-auto"
        >
          <div className="flex flex-col space-x-4 ">
            {/* Full Name */}
            <div className="flex flex-col ">
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
              {errors.fullName && (
                <span className="text-red-500 text-xs">{errors.fullName}</span>
              )}
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
                <option value="SINGLE">Single</option>
                <option value="KING"> king</option>
                <option value="TWIN">Twin</option>
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
                  className="border pl-8 text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
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
                  className="border pl-8 text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
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
                id="roomNumber"
                name="roomNo"
                min="1"
                placeholder="Enter Room Number"
                value={formData.roomNo}
                onChange={handleChange}
                className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
              />
              {errors.roomNo && (
                <span className="text-red-500 text-xs">{errors.roomNo}</span>
              )}
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
                  className="border text-lg rounded-md px-3 py-1 w-full focus:outline-none border-golden bg-blue-50"
                />
                {errors.mobile && (
                  <span className="text-red-500 text-xs">{errors.mobile}</span>
                )}
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
                  className="border text-lg rounded-md px-3 py-1 w-full focus:outline-none border-golden bg-blue-50"
                />
                {errors.tinNo && (
                  <span className="text-red-500 text-xs">{errors.tinNo}</span>
                )}
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
                  className="border text-lg rounded-md px-3 py-1 w-full focus:outline-none border-golden bg-blue-50"
                />
                {errors.id && (
                  <span className="text-red-500 text-xs">{errors.id}</span>
                )}
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
                  className="border text-lg rounded-md px-3 py-1 w-full focus:outline-none border-golden bg-blue-50"
                />
                {errors.nationality && (
                  <span className="text-red-500 text-xs">
                    {errors.nationality}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white text-lg py-1 px-6 rounded-md mt-6 w-full hover:bg-blue-600"
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
