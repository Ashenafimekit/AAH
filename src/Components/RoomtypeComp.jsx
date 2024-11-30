import { useState } from "react";
import EditModal from "./EditModal";
import RoomTypeEdit from "./RoomTypeEdit";

const RoomTypeComp = ({ bedroom, roomType, roomTypeSummary, onSetAlert }) => {
  const [showSingleModal, setShowSingleModal] = useState(false);
  return (
    <div className="ml-2 flex flex-col items-center justify-center rounded-lg shadow-lg w-full sm:w-3/5 md:w-1/2 lg:w-1/3 max-h-[600px] overflow-auto">
      <img
        src={bedroom}
        alt="Arab Ali Hotel Room Type"
        className="rounded-t-lg w-full h-48 object-cover"
      />

      <h1 className="w-full bg-blueBlack text-center font-semibold text-gray-100 py-2 text-xl">
        {roomType}
      </h1>
      <div className="w-full flex flex-col border-b-4 rounded-lg border-blue-900">
        <div className="flex flex-col px-4 py-4 text-sm md:text-base font-medium bg-white rounded-lg space-y-1">
          <div className="flex justify-between items-center p-2 rounded-md bg-blue-50">
            <h2 className="text-gray-700">Total Rooms</h2>
            <h2 className="text-blue-700 font-semibold">
            {roomTypeSummary?.total || 0}
            </h2>
          </div>

          <div className="flex justify-between items-center p-2 rounded-md bg-green-50">
            <h2 className="text-gray-700">Available</h2>
            <h2 className="text-green-700 font-semibold">
              {roomTypeSummary?.available || 0}
            </h2>
          </div>

          <div className="flex justify-between items-center p-2 rounded-md bg-red-50">
            <h2 className="text-gray-700">Booked</h2>
            <h2 className="text-red-700 font-semibold">
              {roomTypeSummary?.booked || 0}
            </h2>
          </div>
        </div>

        <div className="w-full flex justify-end pb-2 px-4 mb-2">
          <button
            className="bg-blue-500 text-gray-100 text-sm px-6 py-2 rounded-md hover:bg-blue-600"
            onClick={() => setShowSingleModal(true)}
          >
            Update
          </button>
          <EditModal
            show={showSingleModal}
            onHandleClose={() => setShowSingleModal(false)}
          >
            <RoomTypeEdit roomType={roomType} alert={alert} onSetAlert={onSetAlert} />
          </EditModal>
        </div>
      </div>
    </div>
  );
};

export default RoomTypeComp;
