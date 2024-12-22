import React from "react";

const Navbar = ({ setActiveTab }) => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="flex justify-between">
        <div>
          <button
            className="mr-4"
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </button>
          <button
            className="mr-4"
            onClick={() => setActiveTab("write")}
          >
            Write Blog
          </button>
          <button
            className="mr-4"
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
