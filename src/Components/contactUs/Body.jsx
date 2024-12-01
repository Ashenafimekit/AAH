import react from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "../../index.css";
import ContactForm from "./ContactForm";

function Body() {
  return (
    <div className="flex flex-col items-center mt-5 ">
      <div className="w-full max-w-[100%] sm:max-w-[700px] md:max-w-[1000px] lg:max-w-[1100px] xl:max-w-[1200px] mx-auto">
        <div className="flex">
          <div className="flex flex-col px-8 lg:p-2">
            <h2 className="text-4xl lg:text-5xl text-[#0d2026]">
              WE ARE HERE FOR YOU
            </h2>
            <p className="text-lg text-[#0d2026]">
              At Luxury Hotels, we take our customers seriously. Do you have any
              enquiries, complaints or requests, please forward it to our
              support desk and we will get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex flex-auto justify-center p-2 px-8 lg:p-2 w-1/2">
            <div className="text-[#0d2026] leading-relaxed flex flex-col mt-8">
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
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
