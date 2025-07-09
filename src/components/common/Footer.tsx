// src/components/common/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Mentorship Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Mentorship</h2>
          <p className="text-sm text-gray-400">
            Connecting mentors and mentees to grow and thrive together.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Support & Actions */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get Involved</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link to="/signup" className="hover:underline">
                Become a Mentor
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:underline">
                Request a Mentorship
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons (Extendable) */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
          <div className="flex space-x-4 mt-2">
            {/* Reusable Social Icon Placeholder — Add actual links later */}
            <a href="#" className="text-gray-400 hover:text-white">
              {/* Example: FontAwesome or Heroicons can be used */}
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
            {/* Add more as needed */}
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Mentorship. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
