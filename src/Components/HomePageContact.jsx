import React, { useState } from "react";

const HomePageContact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-start justify-center w-3/4 border border-gray-400 shadow-lg rounded-lg">
        <div className="w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6285.232305129996!2d42.10613233203546!3d9.31183314620799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd0d7297f53d%3A0x78ed31ae63ad8fbe!2sArab%20Ali%20Hotel!5e1!3m2!1sen!2set!4v1732215046751!5m2!1sen!2set"
            width="503"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:10 w-full md:w-1/2 mt-5">
          <h1 className="text-center font-bold text-2xl">Contact Us</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-start gap-1 w-3/4 "
          >
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              className="border border-black w-3/4"
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="border border-black w-3/4"
              onChange={handleChange}
            />
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              className="border border-black w-3/4 h-28"
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="bg-[#E0B973] px-8 py-2 mt-2 mb-4 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePageContact;