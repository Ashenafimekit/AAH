import { useState, useRef } from "react";
import axios from "axios";
import Alert from "./Alert";

const AdminGallery = () => {
  const [formData, setFormData] = useState({
    category: "gym",
    image: [],
  });
  const [alert, setAlert] = useState();
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prevState) => ({
        ...prevState,
        image: Array.from(files),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.image.length === 0) {
      setAlert({ message: "Please select an image", type: "error" });
    }

    const formDatas = new FormData();
    formDatas.append("category", formData.category);
    formData.image.forEach((image) => {
      formDatas.append("images", image); // Append each image
    });

    try {
      setUploading(true);
      const response = await axios.post(
        "http://localhost:3000/upload",
        formDatas,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.data.success) {
        setAlert({ message: "Image uploaded successfully", type: "success" });
        setFormData({ category: "gym", image: [] });
        if(fileInputRef.current) {
            fileInputRef.current.value = "";
        }
      }
    } catch (error) {
      setAlert({ message: "Failed to upload image", type: "error" });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
          onHandleClose={() => setAlert(null)}
        />
      )}
      <h1 className="text-3xl font-bold text-blueBlack capitalize border-b-4 border-golden p-2">
        Upload image
      </h1>
      <div className="w-2/3 pb-8 bg-[#f8fafc] flex flex-col items-center shadow-lg">
        <div className="flex flex-col w-3/5 py-4 focus:border-golden">
          <label
            htmlFor="category"
            className="text-blueBlack text-xl font-semibold"
          >
            Category
          </label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="text-blueBlack text-xl font-normal mt-2 focus:outline-none py-2 px-4 rounded-md border border-golden "
          >
            <option value="room">Room</option>
            <option value="gym">Gym</option>
            <option value="restaurant">Restaurant</option>
          </select>
        </div>

        <div className="flex flex-col w-3/5 py-2 focus:border-golden">
          <label
            htmlFor="image"
            className="text-blueBlack text-xl font-semibold"
          >
            Image
          </label>
          <input
            type="file"
            multiple={true}
            ref={fileInputRef}
            onChange={handleChange} // Handle file change
            name="image"
            id="image"
            className="text-blueBlack text-xl font-normal mt-2 focus:outline-none py-2 px-4 rounded-md border border-golden "
          />
        </div>

        <div className="mt-2">
          <button
            onClick={handleSubmit}
            className="bg-golden py-2 px-4 rounded-md text-lg text-gray-100 hover:bg-yellow-500"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload Files"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminGallery;
