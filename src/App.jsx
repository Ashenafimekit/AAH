import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutPage from "./Pages/About_Page";
import ContactPage from "./Pages/Contact_Page";
import GalleryPage from "./Pages/Gallery_Page";
import RoomPage from "./Pages/Room_Page";
import ServicePage from "./Pages/Service_Page";
import RoomClickedPage from "./Pages/RoomClicked_page";
import AdminPage from "./Pages/Admin_Page";
import AdminContactPage from "./Pages/AdminContact_page";
import AdminBookingPage from "./Pages/AdminBooking_Page";
import AdminTestimonial from "./Pages/AdminTestimonial";
import AdminRoomPage from "./Pages/AdminRoom_Page";
import LoginPage from "./Pages/Login_Page";
import AdminGalleryPage from "./Pages/Admin_galleryPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import setUpStorageListner from "./utils/storageListner";

const App = () => {
  React.useEffect(() => {
    setUpStorageListner();
  }, []);
  const adminRoutes = [
    { path: '/adminPage', element: <AdminPage /> },
    { path: '/admin-contact', element: <AdminContactPage /> },
    { path: '/admin-booking', element: <AdminBookingPage /> },
    { path: '/admin-testimonial', element: <AdminTestimonial /> },
    { path: '/admin-room', element: <AdminRoomPage /> },
    { path: '/admin-gallery', element: <AdminGalleryPage /> },
  ];

  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/room" element={<RoomPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/room-detail/:roomType" element={<RoomClickedPage />} />
          <Route path="/admin" element={<LoginPage />} />

          {adminRoutes.map(({ path, element }, index) => (
            <Route
              key={index}
              path={path}
              element={<ProtectedRoute>{element}</ProtectedRoute>}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
