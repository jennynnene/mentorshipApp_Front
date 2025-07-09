// src/components/common/SocialLinks.tsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const SocialLinks: React.FC = () => {
  const socials = [
    { icon: <FaFacebookF />, url: "https://facebook.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
  ];

  return (
    <div className="flex space-x-4 text-blue-600">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 text-xl"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
