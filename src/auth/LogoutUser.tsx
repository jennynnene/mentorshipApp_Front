
import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

const LogoutUser: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-red-600 hover:underline"
    >
      Logout
    </button>
  );
};

export default LogoutUser;
