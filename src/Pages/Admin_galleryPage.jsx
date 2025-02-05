import AdminNavigation from "../Components/AdminNavigation";
import AdminGallery from "../Components/AdminGallery";
import Logout from "../Components/Logout";

const Admin_galleryPage = () => {
  return (
    <div className="flex flex-row">
      <AdminNavigation />
      <div className="w-full">
        <AdminGallery />
      </div>
      <Logout />
    </div>
  );
};

export default Admin_galleryPage;
