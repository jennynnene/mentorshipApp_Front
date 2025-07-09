// src/components/common/Navbar.tsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { isAuthenticated, getUser, logout } from "../../utils/auth";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/login", label: "Login" },
  { to: "/signup", label: "Signup" },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const dashboardPath =
    user?.role === "mentor"
      ? "/mentor-dashboard"
      : user?.role === "mentee"
      ? "/mentee-dashboard"
      : "/";

  return (
    <nav className="bg-blue-900 flex fixed w-full space-x-4 justify-between items-center text-white p-4 ">
      <h2>Mentorship</h2>
      <ul className="flex space-x-4 justify-center items-center">
        {isAuthenticated() ? (
          <>
            <li>
              <NavLink
                to={dashboardPath}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-bold"
                    : "text-white hover:text-yellow-200"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="text-white hover:text-red-400"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-bold"
                    : "text-white hover:text-yellow-200"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
