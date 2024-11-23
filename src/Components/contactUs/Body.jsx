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
    <div className="flex flex-col items-center mt-24">
      <div className="w-full max-w-[100%] sm:max-w-[700px] md:max-w-[1000px] lg:max-w-[1100px] xl:max-w-[1200px] mx-auto">
        <div className="flex">
          <div className="flex flex-col px-8 lg:p-2">
            <h2 className="text-4xl lg:text-5xl font-Alata text-[#0d2026]">
              WE ARE HERE FOR YOU
            </h2>
            <p className="text-lg font-Montserrat text-[#0d2026]">
              At Luxury Hotels, we take our customers seriously. Do you have any
              enquiries, complaints or requests, please forward it to our
              support desk and we will get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-auto justify-center p-2 px-8 lg:p-2 -ml-10">
            <div className="text-[#0d2026] leading-relaxed flex flex-col mt-8">
              <address className="not-italic">
                <p className="text-shadow-small text-2xl lg:text-2xl tracking-wide">
                  497 Evergreen Rd. Roseville, <br />
                  CA 95673
                </p>
              </address>

              <div>
                <p className="text-shadow-small text-2xl lg:text-2xl mt-10 tracking-wide">
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
          <div className="flex-auto flex justify-center">
            <div className="w-2/3 md:w-5/6">
              <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-3">
                <label htmlFor="name" className="flex flex-col font-medium">
                  Full name
                  <input
                    id="name"
                    className="shadow-sm outline-none py-2 px-3 border-2 border-gray-200 focus:border-golden font-normal rounded-sm placeholder-gray-300"
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
                    className="shadow-sm outline-none py-2 px-3 rounded-sm border-2 font-normal border-gray-200 focus:border-golden placeholder-gray-300"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label className="flex flex-col font-medium" htmlFor="message">
                  Message
                  <textarea
                    className="h-32 outline-none py-2 px-3 rounded-sm shadow-sm border-2 border-gray-200 focus:border-golden resize-none overflow-auto font-normal placeholder-gray-300"
                    placeholder="write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
                <button
                  type="submit"
                  className="bg-[#deae54] text-white text-lg px-3 py-2 rounded-sm hover:bg-[#e3b359]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
