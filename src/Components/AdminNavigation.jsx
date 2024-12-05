import React from "react";
import { Link } from "react-router-dom";

const AdminNavigation = () => {
  return (
    <div className="flex flex-col gap-20 bg-blueBlack min-w-64 h-screen overflow-y-auto">
      <div className="flex flex-col items-center justify-center bg-golden rounded-b-2xl">
        <Link to='/'>
          <h1 className="font-semibold text-2xl">Arab Ali</h1>
          <h1 className="font-semibold text-xl">HOTEL</h1>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 ">
        <Link to='/admin-room'>
          <h1 className="text-center text-xl text-white hover:text-golden">
            ROOM
          </h1>
        </Link>
        <Link to='/admin-booking'>
          <h1 className="text-center text-xl text-white hover:text-golden">
            BOOKING
          </h1>
        </Link>
        <Link to='/admin-testimonial'>
          <h1 className="text-center text-xl text-white hover:text-golden">
            TESTIMONY
          </h1>
        </Link>
        <Link to="/admin-contact">
          <h1 className="text-center text-xl text-white hover:text-golden">
             CONTACT
          </h1>
        </Link>
        <Link to='/admin-gallery'>
          <h1 className="text-center text-xl text-white hover:text-golden">
            GALLERY
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default AdminNavigation;
