import { useState, useRef } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import axios from "axios";
import Alert from "../Alert";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    roomType: "",
    checkInDate: "",
    checkOutDate: "",
    mobile: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);

  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.fullName)
      newErrors.fullName = "Please fill in your full name";
    if (!formData.checkInDate)
      newErrors.checkInDate = "Please select a check-in date";
    if (!formData.checkOutDate)
      newErrors.checkOutDate = "Please select a check-out date";
    if (!formData.mobile) newErrors.mobile = "Please provide a mobile number";
    if (formData.mobile && formData.mobile.length !== 10)
      newErrors.mobile = "Mobile number should be 10 digits";
    if (!formData.email) newErrors.email = "Please enter an email address";
    if (formData.email && !strictEmailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
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
      const response = await axios.post("http://localhost:3000/book", formData);
      if (response.data.success) {
        setAlert({ type: "success", message: "Booked successfully" });
        setFormData({
          fullName: "",
          checkInDate: "",
          checkOutDate: "",
          mobile: "",
          email: "",
        });
        setErrors({});
      }
    } catch (error) {
      setAlert({ type: "error", message: "Booking failed. Please try again." });
    }
  };

  const toggleDatePicker = (ref) => {
    if (ref.current) {
      if (document.activeElement === ref.current) {
        ref.current.blur();
      } else {
        ref.current.focus();
      }
    }
  };

  return (
    <div className="px-8 sm:px-24 md:px-4 md:max-w-[800px] mx-auto mt-10 space-y-6 flex flex-col shadow-lg py-2">
      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
          onHandleClose={() => setAlert(null)}
        />
      )}
      <h2 className="text-2xl text-tealBlack font-semibold text-center mb-4">
        Book Your Room
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div className="flex space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row ">
          <div className="relative flex-1 ">
            <label
              htmlFor="fullName"
              className="block text-md font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full p-3 text-md border border-gray-400 rounded-sm shadow-sm focus:outline-none mt-1 focus:border-golden"
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">{errors.fullName}</span>
            )}
          </div>

          <div className="relative flex-1">
            <label
              htmlFor="roomType"
              className="block text-md font-medium text-gray-700"
            >
              Room Type
            </label>
            <select
              id="roomType"
              name="roomType"
              value={formData.roomType}
              onChange={handleInputChange}
              className="w-full p-3 text-md border border-gray-400 rounded-sm shadow-sm focus:outline-none mt-1 focus:border-golden"
            >
              <option value="SINGLE">Single</option>
              <option value="KING"> king</option>
              <option value="TWIN">Twin</option>
            </select>
          </div>
        </div>

        {/* Email and Phone */}
        <div className="flex space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row">
          <div className="relative flex-1">
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="textZ"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full p-3 text-md border border-gray-400 rounded-sm shadow-sm focus:outline-none mt-1 focus:border-golden"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          <div className="relative flex-1">
            <label
              htmlFor="mobile"
              className="block text-md font-medium text-gray-700"
            >
              Phone number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="w-full p-3 text-md border border-gray-400 rounded-sm shadow-sm focus:outline-none mt-1 focus:border-golden"
            />
            {errors.mobile && (
              <span className="text-red-500 text-sm">{errors.mobile}</span>
            )}
          </div>
        </div>

        {/* Check-In and Check-Out Date */}
        <div className="flex space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row">
          <div className="relative flex-1">
            <label
              htmlFor="checkin"
              className="block text-md font-medium text-gray-700"
            >
              Check-In Date
            </label>
            <input
              type="date"
              id="checkin"
              name="checkInDate"
              ref={checkInRef}
              value={formData.checkInDate}
              onChange={handleInputChange}
              className="w-full py-3 cursor-text mt-1 pl-10 pr-3 text-md border border-gray-400 rounded-sm shadow-sm focus:outline-none focus:border-golden"
            />
            {errors.checkInDate && (
              <span className="text-red-500 text-sm">{errors.checkInDate}</span>
            )}
            <div
              className="absolute cursor-pointer inset-y-0 left-0 top-6 flex items-center pl-3 pointer-events-none"
              onClick={() => toggleDatePicker(checkInRef)}
            >
              <CalendarMonthOutlinedIcon className="text-gray-400" />
            </div>
          </div>

          <div className="relative flex-1">
            <label
              htmlFor="checkout"
              className="block text-md font-medium text-gray-700"
            >
              Check-Out Date
            </label>
            <input
              type="date"
              id="checkout"
              name="checkOutDate"
              ref={checkOutRef}
              value={formData.checkOutDate}
              onChange={handleInputChange}
              className="w-full cursor-text py-3 mt-1 pl-10 pr-3 text-md border border-gray-400 rounded-sm shadow-sm focus:outline-none focus:border-golden"
            />
            {errors.checkOutDate && (
              <span className="text-red-500 text-sm">
                {errors.checkOutDate}
              </span>
            )}
            <div
              className="absolute inset-y-0 left-0 top-6 flex items-center pl-3 pointer-events-none cursor-pointer"
              onClick={() => toggleDatePicker(checkOutRef)}
            >
              <CalendarMonthOutlinedIcon className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-[49%] p-3 text-white bg-golden rounded-sm shadow hover:bg-[#e3b359] focus:outline-none my-8"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
