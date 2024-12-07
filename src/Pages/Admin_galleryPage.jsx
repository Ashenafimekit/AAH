import AdminNavigation from "../Components/AdminNavigation";
import AdminGallery from "../Components/AdminGallery";

const Admin_galleryPage = () => {
  return (
    <div className="flex flex-row">
      <AdminNavigation />
      <div className="w-full">
        <AdminGallery />
      </div>
    </div>
  );
};

export default Admin_galleryPage;
