import { useState, useRef } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const BookingForm = () => {
  const [fullName, setFullName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numberOfRoom, setNumberOfRoom] = useState(1);
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName,
      checkInDate,
      checkOutDate,
      numberOfRoom,
    });
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
      <h2 className="text-2xl text-tealBlack font-semibold text-center mb-4">
        Book Your Room
      </h2>

      <div className="relative w-full md:w-[49%]">
        <label
          htmlFor="fullName"
          className="block text-md font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full p-3 text-md border border-gray-400 rounded-sm shadow-sm focus:outline-none mt-1 focus:border-golden"
        />
      </div>

      <div className="flex space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
        <div className="relative flex-1">
          <label
            htmlFor="checkin"
            className="block text-md font-medium text-gray-700"
          >
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 text-md border border-gray-400 rounded-sm shadow-sm focus:outline-none mt-1 focus:border-golden"
            />
          </div>
        </div>
        <div className="relative flex-1">
          <label
            htmlFor="checkout"
            className="block text-md font-medium text-gray-700"
          >
            Phone number
          </label>
          <div className="relative">
            <input
              type="text"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full p-3 text-md border border-gray-400 rounded-sm shadow-sm focus:outline-none mt-1 focus:border-golden"
            />
          </div>
        </div>
      </div>
      
      <div className="flex space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
        <div className="relative flex-1">
          <label
            htmlFor="checkin"
            className="block text-md font-medium text-gray-700"
          >
            Check-In Date
          </label>
          <div className="relative">
            <input
              type="date"
              id="checkin"
              ref={checkInRef}
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="w-full py-3 cursor-text mt-1 pl-10 pr-3 text-md border border-gray-400 rounded-sm shadow-sm focus:outline-none focus:border-golden"
            />
            <div
              className="absolute cursor-pointer inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              onClick={() => toggleDatePicker(checkInRef)}
            >
              <CalendarMonthOutlinedIcon className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <label
            htmlFor="checkout"
            className="block text-md font-medium text-gray-700"
          >
            Check-Out Date
          </label>
          <div className="relative">
            <input
              type="date"
              id="checkout"
              ref={checkOutRef}
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="w-full cursor-text py-3 mt-1 pl-10 pr-3 text-md border border-gray-400 rounded-sm shadow-sm focus:outline-none focus:border-golden"
            />
            <div
              className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none cursor-pointer"
              onClick={() => toggleDatePicker(checkOutRef)}
            >
              <CalendarMonthOutlinedIcon className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-6 justify-end">
        <button
          type="submit"
          className="w-[49%] p-3 text-white bg-golden rounded-sm shadow hover:bg-[#e3b359] focus:outline-none"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
