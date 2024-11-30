import React from "react";
import { Tabs } from "antd";
import AdminBooking from "./AdminBooking";
import AdminBookList from "./AdminBookList";
import "../css/adminBookingTab.css";

const items = [
  {
    key: '1',
    label: 'Book',
    children: <AdminBooking/>,
  },
  {
    key: '2',
    label: 'Booking List',
    children: <AdminBookList/>,
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
