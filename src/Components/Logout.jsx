import { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [logout, setLogout] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setShowProfile(!showProfile);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/logout",
        {},
        {
          withCredentials: true,
        }
      );

      localStorage.setItem("isLoggedIn", "false");
      const data = response.data;
      if (data.success) {
        localStorage.setItem('logout', Date.now());
        setLogout(true);
        setAlert({ message: "Logout successful", type: "success" });
        navigate("/admin");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute right-6 mt-2">
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
          onHandleClose={() => setAlert()}
        />
      )}
      <div
        className="w-11 h-11  text-3xl flex justify-center items-center rounded-full bg-blueBlack text-golden cursor-pointer"
        onClick={(e) => handleClick(e)}
      >
        A
      </div>
      {showProfile && (
        <div className="absolute top-14 right-0 w-40 h-20 bg-blueBlack opacity-90 rounded-md flex items-center">
          <div className="flex flex-col px-4 py-2 text-white capitalize gap-2">
            <div className="font-medium cursor-pointer hover:text-golden">
              change password
            </div>
            <div
              className="font-medium cursor-pointer hover:text-golden "
              onClick={handleLogout}
            >
              logout
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
