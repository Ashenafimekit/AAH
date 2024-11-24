import { useState } from "react";
import Carusel_Comp from "../Carausel_Comp";
import WcIcon from "@mui/icons-material/Wc";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import { TextField, InputAdornment } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

function Body() {
  const [selectedTab, setSelectedTab] = useState("Features");
  const [isView, setView] = useState([false, false, true, true, true]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [dates, setDates] = useState({
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDates((prevDates) => ({
      ...prevDates,
      [name]: value,
    }));
  };

  const togglePolicies = (index) => {
    setView((prev) => prev.map((view, i) => (i === index ? !view : view)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

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
        <div className="flex justify-center mt-10">
          <div className="border-t border-b border-dashed border-gray-400">
            <div className="flex divide-x-[2px] divide-gray-700 text-gray-700">
              <div className="flex items-center space-x-1 pr-4">
                <span>max person:</span>
                <WcIcon />
              </div>
              <div className="flex items-center space-x-1 px-4">
                <span>
                  <strong>1</strong> king size bed
                </span>
              </div>
              <div className="flex items-center space-x-1 pl-4">
                <span>
                  <strong>35-40sqm</strong> room size
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* start of content */}
        <div className="max-w-[1100px]">
          <div className="w-2/3 max-h-[500px] shadow-md mt-10 p-4">
            <div className="flex flex-row justify-center mx-24 border">
              <div
                className={`w-full flex justify-start px-4 py-3 cursor-pointer ${
                  selectedTab === "Features" ? "bg-golden" : ""
                } text-tealBlack text-2xl font-medium`}
                onClick={() => setSelectedTab("Features")}
              >
                <div className="flex flex-row gap-2">
                  Features
                  <StarRoundedIcon
                    sx={{ fontSize: "28px", marginTop: "4px" }}
                  />
                </div>
              </div>
              <div
                className={`w-full flex justify-start px-4 py-3 cursor-pointer ${
                  selectedTab === "Policies" ? "bg-golden" : ""
                } text-tealBlack text-2xl font-medium`}
                onClick={() => setSelectedTab("Policies")}
              >
                <div className="flex flex-row gap-2">
                  Policies
                  <div className="rotate-45">
                    <LibraryBooksRoundedIcon
                      sx={{ fontSize: "28px", marginTop: "-2px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex m-10 h-full">
              {selectedTab === "Features" ? (
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-2 mt-2">
                      <StarRoundedIcon
                        sx={{ fontSize: "30px", marginTop: "-2px" }}
                      />{" "}
                      <span className="text-xl font-medium">
                        24 hour room service
                      </span>
                    </div>
                    <div className="flex flex-row gap-2 mt-2">
                      <StarRoundedIcon
                        sx={{ fontSize: "30px", marginTop: "-2px" }}
                      />{" "}
                      <span className="text-xl font-medium">
                        24 hour room service
                      </span>
                    </div>
                    <div className="flex flex-row gap-2 mt-2">
                      <StarRoundedIcon
                        sx={{ fontSize: "30px", marginTop: "-2px" }}
                      />{" "}
                      <span className="text-xl font-medium">
                        24 hour room service
                      </span>
                    </div>
                    <div className="flex flex-row gap-2 mt-2">
                      <StarRoundedIcon
                        sx={{ fontSize: "30px", marginTop: "-2px" }}
                      />{" "}
                      <span className="text-xl font-medium">
                        24 hour room service
                      </span>
                    </div>
                    <div className="flex flex-row gap-2 mt-2">
                      <StarRoundedIcon
                        sx={{ fontSize: "30px", marginTop: "-2px" }}
                      />{" "}
                      <span className="text-xl font-medium">
                        24 hour room service
                      </span>
                    </div>
                  </div>

                  <div className="ml-20">
                    <div className="flex flex-row gap-2 mt-2">
                      <StarRoundedIcon
                        sx={{ fontSize: "30px", marginTop: "-2px" }}
                      />{" "}
                      <span className="text-xl font-medium">
                        24 hour room service
                      </span>
                    </div>
                    <div className="flex flex-row gap-2 mt-2">
                      <StarRoundedIcon
                        sx={{ fontSize: "30px", marginTop: "-2px" }}
                      />{" "}
                      <span className="text-xl font-medium">
                        24 hour room service
                      </span>
                    </div>
                    <div className="flex flex-row gap-2 mt-2">
                      <StarRoundedIcon
                        sx={{ fontSize: "30px", marginTop: "-2px" }}
                      />{" "}
                      <span className="text-xl font-medium">
                        24 hour room service
                      </span>
                    </div>
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
        <div className="border mt-10">
          <div className="flex justify-center">
            <div className="w-full max-w-[800px] px-4 sm:px-6 lg:px-8">
              <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-3">
                <div className="w-full max-w-[325px]">
                  <label htmlFor="name" className="flex flex-col font-medium">
                    Full name
                    <input
                      id="name"
                      className="shadow-sm outline-none py-2 px-3 border-2 border-gray-200 focus:border-golden font-normal rounded-sm placeholder-gray-300 w-full"
                      type="text"
                      placeholder="Full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="flex flex-row justify-between space-x-[50px]">
                  <div className="w-full max-w-[350px]">
                    <label
                      className="flex flex-col font-medium"
                      htmlFor="checkin-date"
                    >
                      Select check-in date
                      <TextField
                        focused={false}
                        id="check-in"
                        name="checkIn"
                        type="date"
                        value={dates.checkIn}
                        onChange={handleChange}
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CalendarTodayIcon />
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                      />
                    </label>
                  </div>
                  <div className="w-full max-w-[350px]">
                    <label
                      className="flex flex-col font-medium"
                      htmlFor="checkout-date"
                    >
                      Select check-out date
                      <TextField
                        id="check-out"
                        name="checkOut"
                        type="date"
                        value={dates.checkOut}
                        onChange={handleChange}
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CalendarTodayIcon />
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                      />
                    </label>
                  </div>
                </div>
                <label className="flex flex-col font-medium" htmlFor="message">
                  Message
                  <textarea
                    id="message"
                    className="h-32 outline-none py-2 px-3 rounded-sm shadow-sm border-2 border-gray-200 focus:border-golden resize-none overflow-auto font-normal placeholder-gray-300 w-full"
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
                <button
                  type="submit"
                  className="bg-[#deae54] text-white text-lg px-3 py-2 rounded-sm hover:bg-[#e3b359] w-full"
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
