import React, { useState } from "react";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import axios from "axios";

const Footer = () => {
  const [testimony, setTestimony] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status ,setStatus] = useState(false)
  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    setTestimony({
      ...testimony,
      [e.target.name]: e.target.value,
    });
    setMessage("")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(testimony);

    try {
      await axios
        .post("http://localhost:3000/testimonial/create", testimony)
        .then((res) => {
          setStatus(res.data.sucess)
          if (status == true) {
            setMessage("Succesfully submited!")
          }
          else{
            setMessage("Please try again!")
          }
          //console.log("sucess : ", success)
        });
    } catch (error) {
      console.log("Error : ",error);
      setMessage("Please try again!")

    }

    setTestimony({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row h-full md:gap-5 items-center justify-around bg-[#14274A] text-white">
      <div className="flex flex-col gap-4 mt-8 md:mt-0">
        <div className="text-golden text-center">
          <h1 className="font-bold text-xl">Arab Ali Hotel</h1>
          <h1 className="font-semibold text-lg">فندق عرب علي</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1>497 Evergreen Rd. Roseville, CA 95673</h1>
          <h1>+251987654321</h1>
          <h1>arabalihotel@gmail.com</h1>
        </div>
      </div>
      <div className="flex flex-row  md:flex-col gap-3 text-white p-3 md:p-0">
        <h1 className="text-lg font-semibold">Our Social Medias</h1>
        <a href="" className="hover:text-[#E0B973]">
          <Facebook /> Facebook
        </a>
        <a href="" className="hover:text-[#E0B973]">
          <Instagram /> Instagram
        </a>
        <a href="" className="hover:text-[#E0B973]">
          <YouTube /> Youtube
        </a>
      </div>
      <div className="flex flex-col gap-4 p-5">
        <h1>Leave Your Testimonial Here</h1>
        <p className={`-mt-5 text-center ${status ? "text-green-500" : "text-red-500"}`}>{message}</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="fullName"
            value={testimony.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className=" border-2 border-golden bg-blueBlack rounded-md px-2 text-center"
          />
          <input
            type="email"
            name="email"
            value={testimony.email}
            onChange={handleChange}
            placeholder="Email"
            className=" border-2 border-golden bg-blueBlack rounded-md px-2 text-center"
          />
          <textarea
            name="message"
            value={testimony.message}
            onChange={handleChange}
            placeholder="Message"
            className="border-2 border-golden bg-blueBlack rounded-md text-center p-2"
          ></textarea>
          <button type="submit" className="bg-golden p-2 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
