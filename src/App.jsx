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
import AdminContact_page from "./Pages/AdminContact_page";
import AdminBooking_Page from "./Pages/AdminBooking_Page";
import AdminTestimonial from "./Pages/AdminTestimonial";
import AdminRoom_Page from "./Pages/AdminRoom_Page";

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
          <Route path="/admin-contact" element={<AdminContact_page />} />
          <Route path="/admin-booking" element={<AdminBooking_Page/>} />
          <Route path="/admin-testimonial" element={<AdminTestimonial/>} />
          <Route path="/admin-room" element={<AdminRoom_Page/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;