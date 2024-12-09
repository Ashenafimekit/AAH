import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("http://localhost:3000/check-auth", { withCredentials: true });
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
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    // If not authenticated, redirect to the login page
    if (!isAuthenticated) {
        return <Navigate to="/admin" />;
    }

    return children;
};

export default ProtectedRoute;
