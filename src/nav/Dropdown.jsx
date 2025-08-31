import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookMessenger } from "react-icons/fa";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/">
          <FaFacebookMessenger className="text-blue-500 w-11 h-10" />
          <img className="w-11" href="/features" />
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/features" className="hover:text-blue-500 font-bold">
              Features
            </a>
          </li>
          <li>
            <a
              href="/privacyandsafety"
              className="block hover:text-blue-500 font-bold"
            >
              Privacy and Safety
            </a>
          </li>
          <li>
            <a href="/desktopapp" className="hover:text-blue-500 font-bold">
              Desktop App
            </a>
          </li>
          <li>
            <a href="/fordevelopers" className="hover:text-blue-500 font-bold">
              For Developers
            </a>
          </li>
          <li>
            <a href="/helpcentre" className="hover:text-blue-500 font-bold">
              Help Centre
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4">
          <a href="/features" className="block hover:text-blue-500">
            Features
          </a>
          <a href="/privacyandsafety" className="block hover:text-blue-500">
            Privacy and Safety
          </a>
          <a href="/desktopapp" className="block hover:text-blue-500">
            Desktop App
          </a>
          <a href="/fordevelopers" className="block hover:text-blue-500">
            For Developers
          </a>
          <a href="/helpcentre" className="block hover:text-blue-500">
            Help Centre
          </a>
        </div>
      )}
    </nav>
  );
};

export default Dropdown;
