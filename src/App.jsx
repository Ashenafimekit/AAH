import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About_Page from "./Pages/About_Page";
import Contact_Page from "./Pages/Contact_Page";
import Gallery_Page from "./Pages/Gallery_Page";
import Room_Page from "./Pages/Room_Page";
import Service_Page from "./Pages/Service_Page";
import RoomClicked_page from "./Pages/RoomClicked_page"
import Admin_Page from "./Pages/Admin_Page";
import AdminContact_page from "./Pages/AdminContact_page";
import AdminBooking_Page from "./Pages/AdminBooking_Page";
import AdminTestimonial from "./Pages/AdminTestimonial";
import AdminRoom_Page from "./Pages/AdminRoom_Page";
import Login_page from "./Pages/Login_Page";
import Admin_galleryPage from './Pages/Admin_galleryPage';

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
          <Route path="/room-detail/:roomType" element={<RoomClicked_page />} />
          <Route path="/admin" element={<Login_page />} />
          <Route path="/adminPage" element={<Admin_Page key={window.location.pathname} />} />
          <Route path="/admin-contact" element={<AdminContact_page />} />
          <Route path="/admin-booking" element={<AdminBooking_Page/>} />
          <Route path="/admin-testimonial" element={<AdminTestimonial/>} />
          <Route path="/admin-room" element={<AdminRoom_Page/>}/>
          <Route path="/gallery" element={<Gallery_Page />} />
          <Route path="/admin-gallery" element={<Admin_galleryPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
