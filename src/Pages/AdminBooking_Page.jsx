import React from "react";
import AdminNavigation from "../Components/AdminNavigation";
import AdminBookingTab from "../Components/AdminBookingTab";

const AdminBooking_Page = () => {
  return (
    <div className="flex flex-row w-full">
      <AdminNavigation />
      <div className="w-full overflow-hidden">
        <AdminBookingTab />
      </div>
    </div>
  );
};

export default AdminBooking_Page;
