import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading, true = authenticated, false = not authenticated
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.post("http://localhost:3000/check-auth", {}, { withCredentials: true });
                const data = response.data;
                console.log(data);
                if (data.success) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Authentication check failed", error);
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []); // Only run this on component mount (no need to rerun on every auth change)

    if (isAuthenticated === null) {
        // Show a loading screen while the auth check is still running
        return <p>Loading...</p>;
    }

    if (!isAuthenticated) {
        // If the user is not authenticated, redirect them to the login page
        navigate("/login");
        return null;
    }

    // Render the children once authentication is confirmed
    return children;
};

export default ProtectedRoute;
