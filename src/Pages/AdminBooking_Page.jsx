import React from "react";
import AdminNavigation from "../Components/AdminNavigation";
import AdminBookingTab from "../Components/AdminBookingTab";
import Logout from "../Components/Logout";

const AdminBooking_Page = () => {
  return (
    <div className="flex flex-row w-full">
      <AdminNavigation />
      <div className="w-full overflow-hidden">
        <AdminBookingTab />
      </div>
      <Logout />
    </div>
  );
};

export default AdminBooking_Page;
