import { useEffect } from "react";
import ClearIcon from "@mui/icons-material/Clear";

const Alert = ({ message, type, onClose, onHandleClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div>
      <div
        className={`fixed top-4 right-4 px-6 pr-12 py-3 rounded-md shadow-md z-50 ${
          type === "success" ? "bg-green-500" : "bg-red-500"
        } text-white`}
      >
        {message}
        <button className="absolute top-3 right-2">
          <ClearIcon onClick={onHandleClose} className="w-4 h-4 text-green-100 hover:text-gray-700 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Alert;
