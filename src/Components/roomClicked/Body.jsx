import React from "react";
import Carusel_Comp from "../Carausel_Comp";
import WcIcon from '@mui/icons-material/Wc';

function body() {
  return (
    <div>
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

        <Carusel_Comp />
        <div className="flex justify-center mt-10 h-screen">
            <div className="flex items-center divide-x divide-gray-300 text-gray-700">
              <div className="flex items-center space-x-1 pr-4">
                <span>max person:</span>
                <WcIcon />
              </div>
              <div className="flex items-center space-x-1 px-4">
                <span>room bed:</span>
                <span>1 king bed</span>
              </div>
              <div className="flex items-center space-x-1 pl-4">
                <span>room size:</span>
                <span>35-40sqm</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default body;
