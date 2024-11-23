import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import About_Page from "./Pages/About_Page";
import Contact_Page from "./Pages/Contact_Page";
import Gallery_Page from "./Pages/Gallery_Page";
import Room_Page from "./Pages/Room_Page";
import RoomClicked_Page from "./Pages/RoomClicked_page";


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
            <Route path="/room_clicked" element={<RoomClicked_Page />} />
          </Routes>
        </Router>
    </div>
  );
};

export default App;
