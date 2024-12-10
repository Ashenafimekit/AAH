import react from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ContactForm from "./ContactForm";

function Body() {
  return (
    <div className="flex flex-col">
      <div className="px-5">
        <h2 className="text-4xl lg:text-5xl text-[#0d2026]">
          WE ARE HERE FOR YOU
        </h2>
        <p className="text-lg text-[#0d2026]">
          At Luxury Hotels, we take our customers seriously. Do you have any
          enquiries, complaints or requests, please forward it to our support
          desk and we will get back to you as soon as possible.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 border">
        <div className="">
          <address className="not-italic">
            <p className="text-shadow-small text-md md:text-2xl lg:text-2xl tracking-wide">
              497 Evergreen Rd. Roseville, <br />
              CA 95673
            </p>
          </address>
          <div>
            <p className="text-shadow-small text-md md:text-2xl lg:text-2xl mt-10 tracking-wide">
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
          <div className="flex items-center space-x-2 cursor-pointer text-[#0d2026] hover:underline font-bold text-xl md:text-2xl mt-4">
            <span>View on map</span>
            <ArrowDownwardIcon />
          </div>
        </div>
        <div className="w-4/6  ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Body;
