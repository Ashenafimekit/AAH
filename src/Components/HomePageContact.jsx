import React from "react";
import ContactForm from "./contactUs/ContactForm";

const HomePageContact = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-start justify-center w-3/4 border border-gray-400 shadow-lg rounded-lg">
        <div className="w-full md:w-1/2">
          <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6285.232305129996!2d42.10613233203546!3d9.31183314620799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd0d7297f53d%3A0x78ed31ae63ad8fbe!2sArab%20Ali%20Hotel!5e1!3m2!1sen!2set!4v1732215046751!5m2!1sen!2set"
              width="100%"
              height="100%"
              loading="lazy"
              className="border border-black"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-5">
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default HomePageContact;
