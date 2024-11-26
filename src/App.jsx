import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About_Page from "./Pages/About_Page";
import Contact_Page from "./Pages/Contact_Page";
import Gallery_Page from "./Pages/Gallery_Page";
import Room_Page from "./Pages/Room_Page";
import Service_Page from "./Pages/Service_Page";
import Body from "./Components/roomClicked/Body";
import Admin_Page from "./Pages/Admin_Page";
import AdminDashboard_page from "./Pages/AdminDashboard_page";
import AdminBooking_Page from "./Pages/AdminBooking_Page";
import AdminTestimonial from "./Pages/AdminTestimonial";

const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About_Page />} />
          <Route path="/contact" element={<Contact_Page />} />
          <Route path="/gallery" element={<Gallery_Page />} />
          <Route path="/room" element={<Room_Page />} />
          <Route path="/service" element={<Service_Page />} />
          <Route path="/room-detail" element={<Body />} />
          <Route path="/admin" element={<Admin_Page />} />
          <Route path="/admin-dashboard" element={<AdminDashboard_page />} />
          <Route path="/admin-booking" element={<AdminBooking_Page/>} />
          <Route path="/admin-testimonial" element={<AdminTestimonial/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
