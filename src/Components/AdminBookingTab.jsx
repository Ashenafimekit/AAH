import React from "react";
import { Tabs } from "antd";
import AdminBooking from "./AdminBooking";
import AdminBookList from "./AdminBookList";
import "../css/adminBookingTab.css";
import BookingHistory from "./BookingHistory";


const items = [
  {
    key: "1",
    label: "Book",
    children: <AdminBooking />,
  },
  {
    key: "2",
    label: "Current Booking",
    children: <AdminBookList />,
  },
  {
    key: "3",
    label: "Booking History",
    children: <BookingHistory/>,
  },
];

const AdminBookingTab = () => {
  return (
    <div className="w-full">
      <Tabs defaultActiveKey="1" items={items} centered />
    </div>
  );
};

export default AdminBookingTab;
