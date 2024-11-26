import axios from "axios";
import React, { useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;


const AdminBooking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    checkInDate: "",
    checkOutDate: "",
    duration: "",
    id: "",
    roomNo: "",
    tinNo: "",
    mobile: "",
    nationality: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      await axios.post(`${apiUrl}/book`, formData);
      console.log(formData);

      setFormData({
        fullName: "",
        checkInDate: "",
        checkOutDate: "",
        duration: "",
        id: "",
        roomNo: "",
        tinNo: "",
        mobile: "",
        nationality: "",
      });
    } catch (error) {
        console.log("Error: ", error)
    }

    
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full">
      <div className="">
        <h1 className="text-3xl text-center">ARAB ALI HOTEL</h1>
        <h1 className="text-2xl text-center">GUEST REGISTRATION FORM</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-5 border border-black px-10 py-4 rounded-lg w-3/4 bg-blueBlack"
      >
        <div className="flex flex-row items-center justify-center gap-3">
          <div className="flex flex-col gap-2 text-lg text-white">
            <label className="">Full Name of Guest </label>
            <label className="">Check in Date </label>
            <label className="">Check Out Date </label>
            <label className="">Duration of Stay </label>
            <label className="">Passport/Id Number</label>
            <label className="">Room Number</label>
            <label className="">Tin Number</label>
            <label className="">Mobile</label>
            <label className="">Nationality</label>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-black rounded-md w-52 text-center font-semibold h-8"
            />
            <input
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              className="border border-black rounded-md w-52 text-center font-semibold h-8"
            />
            <input
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              className="border border-black rounded-md w-52 text-center font-semibold h-8"
            />
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="border border-black rounded-md w-52 text-center font-semibold h-8"
            />
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="border border-black rounded-md w-52 text-center font-semibold h-8"
            />
            <input
              type="number"
              name="roomNo"
              value={formData.roomNo}
              onChange={handleChange}
              className="border border-black rounded-md w-52 text-center font-semibold h-8"
            />
            <input
              type="text"
              name="tinNo"
              value={formData.tinNo}
              onChange={handleChange}
              className="border border-black rounded-md w-52 text-center font-semibold h-8"
            />
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border border-black rounded-md w-52 text-center font-semibold h-8"
            />
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="border border-black rounded-md w-52 text-center font-semibold h-8"
            />
          </div>
        </div>
        <div className="">
          <button
            type="submit"
            className="bg-golden px-8 py-2 rounded-lg font-bold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminBooking;
