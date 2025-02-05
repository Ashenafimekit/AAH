import { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import EditModal from "./EditModal";
import VisibilityOffSharpIcon from "@mui/icons-material/VisibilityOffSharp";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";

const Logout = () => {
  const [logout, setLogout] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState(null);
  const [showPassword, setShowPassword] = useState([false, false, false]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
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
        localStorage.setItem("logout", Date.now());
        setLogout(true);
        setAlert({ message: "Logout successful", type: "success" });
        navigate("/admin");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setChangePassword(true);
    setShowProfile(false);
  };

  const handleShowPassword = (index) => {
    setShowPassword((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (newPassword !== e.target.value) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  const handlePasswordChange = async () => {
    if (oldPassword && newPassword && confirmPassword && oldPassword === newPassword) {
      setError("Old password and new password cannot be the same");
      return;
    }
    if (newPassword.length < 8) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (oldPassword && newPassword && confirmPassword && !error) {
      try {
        const response = await axios.post(
          "http://localhost:3000/changePassword",
          {
            oldPassword,
            newPassword,
            confirmPassword,
          },
          {
            withCredentials: true,
          }
        );
        console.log(response);
        if (response.data.success) {
          setAlert({
            message: "Password changed successfully",
            type: "success",
          });
          setChangePassword(false);
          setOldPassword("");
          setNewPassword("");
          setConfirmPassword("");
        } else {
          setAlert({ message: response.data.message, type: "error" });
        }
      } catch (error) {
        console.log(error);
        setAlert({ message: "An error occurred", type: "error" });
      }
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
        onClick={() => handleClick()}
      >
        A
      </div>
      {showProfile && (
        <div className="absolute top-14 right-0 w-40 h-20 bg-blueBlack opacity-90 rounded-md flex items-center">
          <div className="flex flex-col px-4 py-2 text-white capitalize gap-2">
            <div
              className="font-medium cursor-pointer hover:text-golden"
              onClick={(e) => handleChangePassword(e)}
            >
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
      {changePassword && (
        <EditModal
          show={changePassword}
          onHandleClose={() => setChangePassword(false)}
        >
          <div className="w-[300px] h-full flex flex-col gap-2">
            <h2 className="text-xl font-semibold capitalize mx-auto text-blueBlack">
              change password
            </h2>

            <div className="mt-1 relative">
              <input
                type={showPassword[0] ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-4 py-2 text-blueBlack border-2 rounded-md focus:outline-none focus:border-golden"
                placeholder="Enter old password"
              />
              <button
                type="button"
                className="absolute right-3 bottom-2 text-gray-500"
                onClick={() => handleShowPassword(0)}
                aria-label="Toggle old password visibility"
              >
                {showPassword[0] ? (
                  <VisibilitySharpIcon />
                ) : (
                  <VisibilityOffSharpIcon />
                )}
              </button>
            </div>

            <div className="relative">
              <input
                type={showPassword[1] ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 text-blueBlack border-2 rounded-md focus:outline-none focus:border-golden"
                placeholder="Enter new password"
              />
              <button
                type="button"
                className="absolute right-3 bottom-2 text-gray-500"
                onClick={() => handleShowPassword(1)}
                aria-label="Toggle confirm password visibility"
              >
                {showPassword[1] ? (
                  <VisibilitySharpIcon />
                ) : (
                  <VisibilityOffSharpIcon />
                )}
              </button>
            </div>
            
            <div className="relative">
              <input
                type={showPassword[2] ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => handleConfirmPassword(e)}
                className="w-full px-4 py-2 text-blueBlack border-2 rounded-md focus:outline-none focus:border-golden"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                className="absolute right-3 bottom-2 text-gray-500"
                onClick={() => handleShowPassword(2)}
                aria-label="Toggle confirm password visibility"
              >
                {showPassword[2] ? (
                  <VisibilitySharpIcon />
                ) : (
                  <VisibilityOffSharpIcon />
                )}
              </button>
            </div>

            {error && <p className="text-red-500 text-xs">{error}</p>}
            <div className="flex justify-center">
              <button
                className="bg-golden text-gray-100 w-2/3 py-2 rounded-md mt-2 hover:bg-[#e3b359] focus:outline-none focus:border-golden"
                onClick={handlePasswordChange}
              >
                Change Password
              </button>
            </div>
          </div>
        </EditModal>
      )}
    </div>
  );
};

export default Logout;
