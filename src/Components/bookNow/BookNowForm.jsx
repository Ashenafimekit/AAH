import { useState, useRef } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { ArrowDropDown } from "@mui/icons-material";

const BookNowForm = () => {
  const [name, setName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [message, setMessage] = useState("");

  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  const [selectedOption, setSelectedOption] = useState("Single");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Single", "Double", "Premium"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      selectedOption,
      checkInDate,
      checkOutDate,
      rooms,
      adults,
      children,
      message,
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
    <div className="px-8 sm:px-24 md:px-4 mx-auto w-4/5 lg:w-3/5 space-y-6 flex flex-col shadow-lg py-2">
      <h2 className="text-2xl text-tealBlack font-semibold text-center mb-4">
        Book Your Room
      </h2>

      <div className="relative w-full md:w-[49%]">
        <label
          htmlFor="name"
          className="block text-md font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full p-3 text-md border border-gray-400 rounded-sm shadow-sm focus:outline-none mt-1 focus:border-golden"
        />
      </div>

      <div className="relative w-full md:w-[49%]">
        <div
          className="flex items-center justify-between p-4 border border-gray-400 rounded-sm cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-md">{selectedOption}</span>
          <ArrowDropDown sx={{ fontSize: "20px", color: "#4b5563" }} />
        </div>

        {isOpen && (
          <div className="absolute z-10 w-full bg-white bg-opacity-95 border border-gray-300 rounded-sm shadow-md top-full mt-1">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  selectedOption === option ? "bg-gray-200" : ""
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className=" space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
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

      <div className="relative w-full md:w-[49%]">
        <label
          htmlFor="rooms"
          className="block text-md font-medium text-gray-700"
        >
          Number of Rooms
        </label>
        <input
          type="number"
          id="rooms"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
          min="1"
          className="w-full p-3 text-md border border-gray-400 rounded-sm shadow-sm focus:outline-none focus:border-golden"
        />
      </div>

      <div className="flex space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row">
        <div className="relative flex-1">
          <label
            htmlFor="adults"
            className="block text-md font-medium text-gray-700"
          >
            Number of Adults
          </label>
          <input
            type="number"
            id="adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            min="1"
            className="w-full p-3 text-md border border-gray-400 rounded-sm shadow-sm focus:outline-none focus:border-golden"
          />
        </div>
        <div className="relative flex-1">
          <label
            htmlFor="children"
            className="block text-md font-medium text-gray-700"
          >
            Number of Children
          </label>
          <input
            type="number"
            id="children"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            min="0"
            className="w-full p-3 text-md border border-gray-400 rounded-sm shadow-sm focus:outline-none focus:border-golden"
          />
        </div>
      </div>

      <label className="flex flex-col font-medium" htmlFor="message">
        Notes
        <textarea
          className="h-32 outline-none py-2 px-3 rounded-sm shadow-sm border border-gray-400 focus:border-golden resize-none overflow-auto font-normal placeholder-gray-300"
          placeholder="write your notes here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

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

export default BookNowForm;
