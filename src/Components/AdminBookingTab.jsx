import React from "react";
import { Tabs } from "antd";
import AdminBooking from "./AdminBooking";
import AdminBookList from "./AdminBookList";

const { TabPane } = Tabs;

const AdminBookingTab = () => {
  return (
    <div className="w-full">
      <Tabs defaultActiveKey="1" centered className="">
        <TabPane tab="Book" key="1">
          <AdminBooking />
        </TabPane>
        <TabPane tab="Booking List" key="2">
          <AdminBookList/>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AdminBookingTab;
