import { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "../../index.css";

function Body() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className="flex flex-col mt-12 border ">
      <div className="flex justify-center">
        <div className="flex flex-col max-w-5xl justify-center">
          <h2 className="text-5xl font-Alata text-[#0d2026]">
            WE ARE HERE FOR YOU
          </h2>
          <p className="text-lg font-Montserrat text-[#0d2026]">
            At Luxury Hotels, we take our customers seriously. Do you have any
            enquiries, complaints or requests, please forward it to our support
            desk and we will get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className="flex flex-row mt-20">
        <div className="sm:w-1/2 flex justify-center ml-5">
          <div className="text-[#0d2026] leading-relaxed flex flex-col ml-24">
            <address className="not-italic">
              <p className="text-shadow-xl text-3xl tracking-wide">
                497 Evergreen Rd. Roseville, <br />
                CA 95673
              </p>
            </address>

            <div>
              <p className="text-shadow-xl text-2xl mt-10 tracking-wide">
                <strong>Phone:</strong> +44 345 678 903
                <br />
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:luxury_hotels@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  arabAliHotel@gmail.com
                </a>
              </p>
            </div>

            <div className="flex items-center space-x-2 cursor-pointer text-[#0d2026] hover:underline font-bold text-2xl mt-4">
              <span>View on map</span>
              <ArrowDownwardIcon />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="w-1/2 mr-24">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <label htmlFor="name" className="flex flex-col font-medium">
                Full name
                <input
                  id="name"
                  className="bg-[#fafcfc] shadow-sm outline-none py-2 px-3 border-2 border-gray-200 font-normal rounded-sm placeholder:font-normal" 
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="flex flex-col font-medium" htmlFor="email">
                Email
                <input
                  id="email"
                  className="bg-[#fafcfc] shadow-sm  outline-none py-2 px-3 rounded-sm border-2 font-normal border-gray-200 placeholder:font-normal"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="flex flex-col font-medium" htmlFor="message">
                Message
                <textarea
                  className="bg-[#fafcfc] h-32 outline-none py-2 px-3 rounded-sm shadow-sm border-2 border-gray-200 resize-none overflow-auto font-normal placeholder:font-normal"
                  placeholder="write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
              <button type="submit" className="bg-[#deae54] text-white text-lg px-3 py-2 rounded-sm hover:bg-[#e3b359]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
