import Carusel_Comp from "../Carausel_Comp";
import WcIcon from "@mui/icons-material/Wc";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";

function Body() {
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

        <div className="max-w-[1100px]">
          <div className="w-2/3 h-full shadow-md mt-10 p-4">
            <div className="flex flex-row justify-center mx-24 border">
              <div className="w-full flex justify-start px-4 py-3 bg-golden text-tealBlack text-2xl font-medium">
                <div className="flex flex-row gap-2">
                  Features
                  <StarRoundedIcon
                    sx={{ fontSize: "28px", marginTop: "4px" }}
                  />
                </div>
              </div>
              <div className="w-full flex justify-start px-4 py-3 text-tealBlack text-2xl font-medium">
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

            <div className="flex m-10">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
