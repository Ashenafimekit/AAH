import { useState } from "react";
import Carusel_Comp from "../Carausel_Comp";
import WcIcon from "@mui/icons-material/Wc";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import BookingForm from "./BookingForm";

function Body({ roomTypeF }) {
  const [selectedTab, setSelectedTab] = useState("Features");
  const [isView, setView] = useState([false, false, true, true, true]);

  const togglePolicies = (index) => {
    setView((prev) => prev.map((view, i) => (i === index ? !view : view)));
  };

  return (
    <div>
      <div className="w-full max-w-[100%] sm:max-w-[700px] md:max-w-[1000px] lg:max-w-[1100px] xl:max-w-[1200px] mx-auto">
        <div className="flex">
          <div className="flex flex-col px-4 lg:p-2">
            <h2 className="text-xl sm:text-3xl text-[#0d2026]">
              WE ARE HERE FOR YOU
            </h2>
            <p className="text-md sm:text-lg text-[#0d2026]">
              At Luxury Hotels, we take our customers seriously. Do you have any
              enquiries, complaints or requests, please forward it to our
              support desk and we will get back to you as soon as possible.
            </p>
          </div>
        </div>

        <Carusel_Comp />
        <div className="flex justify-center mt-10">
          <div className="border-t border-b border-dashed border-gray-400">
            <div className="flex divide-x-[2px] divide-gray-700 text-gray-700 sm:text-base text-xs">
              <div className="flex items-center sm:space-x-2 pr-2 sm:pr-6">
                <span>max person:</span>
                <WcIcon className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div className="flex items-center sm:space-x-2 px-2 sm:px-6">
                <span>
                  <strong className="text-sm sm:text-base">1</strong> king size
                  bed
                </span>
              </div>
              <div className="flex items-center sm:space-x-2 pl-2 sm:pl-6">
                <span>
                  <strong className="text-sm sm:text-base">35-40sqm</strong>{" "}
                  room size
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* start of content */}
        <div className="max-w-[1100px] border px-4 md:p flex items-center justify-center">
          <div className="w-full md:w-2/3 max-h-[500px] shadow-md ml md:ml-2 mt-10 border p-4">
            <div className="flex flex-row justify-center mx-4 sm:mx-2 md:mx-24 border">
              <div
                className={`w-full flex justify-start px-2 sm:px-4 py-3 cursor-pointer ${
                  selectedTab === "Features" ? "bg-golden" : ""
                } text-tealBlack text-lg sm:text-xl md:text-2xl font-medium`}
                onClick={() => setSelectedTab("Features")}
              >
                <div className="flex flex-row gap-1 sm:gap-2 items-center">
                  Features
                  <StarRoundedIcon
                    sx={{
                      fontSize: window.innerWidth < 768 ? "20px" : "24px",
                      marginTop: "4px",
                    }}
                  />
                </div>
              </div>

              <div
                className={`w-full flex justify-start px-2 sm:px-4 py-3 cursor-pointer ${
                  selectedTab === "Policies" ? "bg-golden" : ""
                } text-tealBlack text-lg sm:text-xl md:text-2xl font-medium`}
                onClick={() => setSelectedTab("Policies")}
              >
                <div className="flex flex-row gap-1 sm:gap-2 items-center">
                  Policies
                  <div className="rotate-45">
                    <LibraryBooksRoundedIcon
                      sx={{
                        fontSize: window.innerWidth < 768 ? "20px" : "24px",
                        marginTop: "-2px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex m-10 h-full -ml-2 sm:ml-2">
              {selectedTab === "Features" ? (
                <div className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-x-8 gap-y-2">
                  {/* Column 1 */}
                  <div className="flex flex-col gap-2">
                    {Array(5)
                      .fill("24 hour room service")
                      .map((item, index) => (
                        <div className="flex items-center gap-2" key={index}>
                          <StarRoundedIcon
                            sx={{
                              fontSize:
                                window.innerWidth < 768 ? "20px" : "24px",
                            }}
                          />
                          <span className="text-xl font-medium">{item}</span>
                        </div>
                      ))}
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col gap-2">
                    {Array(3)
                      .fill("24 hour room service")
                      .map((item, index) => (
                        <div className="flex items-center gap-2" key={index}>
                          <StarRoundedIcon
                            sx={{
                              fontSize:
                                window.innerWidth < 768 ? "20px" : "24px",
                            }}
                          />
                          <span className="text-xl font-medium">{item}</span>
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="cursor-pointer"
                        onClick={() => togglePolicies(0)}
                      >
                        {isView[0] ? (
                          <AddBoxRoundedIcon
                            sx={{ fontSize: "30px", marginTop: "-2px" }}
                          />
                        ) : (
                          <IndeterminateCheckBoxRoundedIcon
                            sx={{ fontSize: "30px", marginTop: "-2px" }}
                          />
                        )}
                      </div>
                      <span className="text-xl font-medium text-golden">
                        Check-in
                      </span>
                    </div>

                    <div className={`${isView[0] ? "hidden" : "block"} pl-8`}>
                      <span className="text-lg font-medium">From 14:00</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="cursor-pointer"
                        onClick={() => togglePolicies(1)}
                      >
                        {isView[1] ? (
                          <AddBoxRoundedIcon
                            sx={{ fontSize: "30px", marginTop: "-2px" }}
                          />
                        ) : (
                          <IndeterminateCheckBoxRoundedIcon
                            sx={{ fontSize: "30px", marginTop: "-2px" }}
                          />
                        )}
                      </div>
                      <span className="text-xl font-medium text-golden">
                        Check-out
                      </span>
                    </div>

                    <div className={`${isView[1] ? "hidden" : "block"} pl-8`}>
                      <span className="text-lg font-medium">Until 10 AM</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="cursor-pointer"
                        onClick={() => togglePolicies(2)}
                      >
                        {isView[2] ? (
                          <AddBoxRoundedIcon
                            sx={{ fontSize: "30px", marginTop: "-2px" }}
                          />
                        ) : (
                          <IndeterminateCheckBoxRoundedIcon
                            sx={{ fontSize: "30px", marginTop: "-2px" }}
                          />
                        )}
                      </div>
                      <span className="text-xl font-medium">
                        Cancelellation/Prepayment
                      </span>
                    </div>

                    <div className={`${isView[2] ? "hidden" : "block"} pl-8`}>
                      <span className="text-lg font-medium">
                        Cacellation and prepayment vary accordingly read more
                        about it
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="cursor-pointer"
                        onClick={() => togglePolicies(3)}
                      >
                        {isView[3] ? (
                          <AddBoxRoundedIcon
                            sx={{ fontSize: "30px", marginTop: "-2px" }}
                          />
                        ) : (
                          <IndeterminateCheckBoxRoundedIcon
                            sx={{ fontSize: "30px", marginTop: "-2px" }}
                          />
                        )}
                      </div>
                      <span className="text-xl font-medium">Pets</span>
                    </div>

                    <div className={`${isView[3] ? "hidden" : "block"} pl-8`}>
                      <span className="text-lg font-medium">
                        Pets aren't allowed
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="cursor-pointer"
                        onClick={() => togglePolicies(4)}
                      >
                        {isView[4] ? (
                          <AddBoxRoundedIcon
                            sx={{ fontSize: "30px", marginTop: "-2px" }}
                          />
                        ) : (
                          <IndeterminateCheckBoxRoundedIcon
                            sx={{ fontSize: "30px", marginTop: "-2px" }}
                          />
                        )}
                      </div>
                      <span className="text-xl font-medium">Groups</span>
                    </div>

                    <div className={`${isView[4] ? "hidden" : "block"} pl-8`}>
                      <span className="text-lg font-medium">
                        When booking more that 5 rooms, different policies may
                        apply
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* end of content */}

        {/* form */}
        <div className="mt-10">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

export default Body;
