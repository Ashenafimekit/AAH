import VisibilityOffSharpIcon from "@mui/icons-material/VisibilityOffSharp";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login_page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" }); // Error state for both email and password
  const [generalError, setGeneralError] = useState(""); // State for general error
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    let isValid = true;

    // Email Validation
    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Password Validation
    if (!password) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:3000/login", {
          email,
          password,
        });
        const data = response.data;
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate("/adminPage");
        } else {
          setGeneralError(data.message || "Invalid email or password");
          setError({ email: "", password: "" }); 
        }
        setEmail("");
        setPassword("");
        setError({ email: "", password: "" });
        setGeneralError("");
      } catch (error) {
        console.error("Error logging in:", error);
        setGeneralError("Invalid email or password");
        setError({ email: "", password: "" }); 
      }
    }
  };

  return (
    <div className="w-full h-screen bg-[#f0f9ff] flex justify-center items-center">
      <div className="bg-white shadow-lg w-9/12 sm:w-6/12 lg:w-4/12 flex flex-col p-8 rounded-sm">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold mb-4 text-center">Log in</h1>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="font-medium text-lg">
              Email
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="email"
              className="py-2 px-3 border-2 rounded-md mt-1 focus:outline-none focus:border-blue-400"
            />
            {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
          </div>
          <div className="flex flex-col relative mb-6">
            <label htmlFor="password" className="font-medium text-lg">
              Password
            </label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="py-2 px-3 border-2 rounded-md mt-1 focus:outline-none focus:border-blue-400"
            />
            {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
            <button
              type="button"
              className="absolute right-3 bottom-2 text-gray-500"
              onClick={handleShowPassword}
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <VisibilitySharpIcon />
              ) : (
                <VisibilityOffSharpIcon />
              )}
            </button>
          </div>
          {generalError && <p className="text-red-500 text-sm">{generalError}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login_page;
