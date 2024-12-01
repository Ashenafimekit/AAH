import axios from "axios";
import React, { useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setMessage("")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
      .post(`${apiUrl}/contact/send`, formData)
      .then((res) => {
        setStatus(res.data.sucess)
        if (status == true) {
          setMessage("Thank You For Contacting Us")
        } else {
          setMessage("Please try again!")
        }
      });
      console.log("sending Data : ", formData);
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log("Error : ", error);
      setMessage("Please try again!")
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-10 w-full ">
      <p className={`text-center -mb-5 ${status ? "text-green-500" : "text-red-500"}`}>{message}</p>
      <h1 className="text-center font-bold text-2xl -mb-6">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center md:items-start justify-center gap-1 w-3/4   "
      >
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          className="border-2 border-gray-200 w-3/4  focus:border-golden outline-none text-center"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          className="border-2 border-gray-200 w-3/4  focus:border-golden outline-none text-center"
          onChange={handleChange}
        />
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          className="border-2 border-gray-200 w-3/4 h-28 focus:border-golden outline-none text-center"
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="bg-[#E0B973] px-8 py-2 mt-2 mb-4 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
