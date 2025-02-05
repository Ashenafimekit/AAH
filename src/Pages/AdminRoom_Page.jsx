import React from "react";
import AdminNavigation from "../Components/AdminNavigation";
import AdminRoom from "../Components/AdminRoom";
import Logout from '../Components/Logout';

const AdminRoom_Page = () => {
  return (
    <div className="flex flex-row relative">
      <AdminNavigation />
      <div className="w-full">
        <AdminRoom />
      </div>
        <Logout />
    </div>
  );
};

export default AdminRoom_Page;
