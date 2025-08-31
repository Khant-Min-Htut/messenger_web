import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.8562-6/475210330_598195142840489_9172482348551739153_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=GB4IGbdnYx0Q7kNvwFzyf36&_nc_oc=AdlW3F12zmSZG1WWMqUxMc8DHoV8ZiMNqZqslONfpnjr5b-RBZIIzGh-vqdvHfYEmn8&_nc_zt=14&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=44BbWUjs_NMy_OzS1rDUqQ&oh=00_AfGUEPUyucVLQV1irCkANlR57v_3my1ZG-1JjOG7g9dTcQ&oe=68191CD8"
            className="w-11"
            href="/features"
          />
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
            <a href="/features" className="hover:text-blue-500">
              Features
            </a>
          </li>
          <li>
            <a href="/privacyandsafety" className="block hover:text-blue-500">
              Privacy and Safety
            </a>
          </li>
          <li>
            <a href="/desktopapp" className="hover:text-blue-500">
              Desktop App
            </a>
          </li>
          <li>
            <a href="/fordevelopers" className="hover:text-blue-500">
              Fordevelopers
            </a>
          </li>
          <li>
            <a href="/helpcentre" className="hover:text-blue-500">
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
