import ClearIcon from "@mui/icons-material/Clear";

const EditModal = ({ show, onHandleClose, children }) => {
  return (
    <div
      onClick={onHandleClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        show ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={` bg-white rounded-lg shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-120 opacity-0"
        }`}
      >
        <button className="absolute top-2 right-2">
          <ClearIcon
            onClick={onHandleClose}
            className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer"
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default EditModal;
