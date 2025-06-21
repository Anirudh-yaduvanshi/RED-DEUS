import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigator = useNavigate();

  return (
    <header className="bg-red-900/20 p-4 backdrop-blur-lg relative z-50">
      <div className="container mx-auto flex justify-between items-center bg-red-700/40 backdrop-blur-xl rounded-lg shadow-lg px-6 py-3 relative">
        {/* Logo */}
        <img
          src="/logobg.png"
          alt="Logo"
          className="h-16 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            navigator("/");
            setIsOpen(false); // Close menu when clicking logo
          }}
        />

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-white p-2 rounded-md bg-red-600/40 hover:bg-red-600/70 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row absolute lg:static top-full left-0 right-0 w-full lg:w-auto bg-red-800/60 lg:bg-transparent rounded-b-lg lg:rounded-none p-4 lg:p-0 shadow-lg lg:shadow-none z-40`}
        >
          <ul className="flex flex-col lg:flex-row text-lg font-semibold space-y-4 lg:space-y-0 lg:space-x-8">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
              { path: "/products", label: "Our Offerings" },
            ].map(({ path, label }) => (
              <li key={path} className="flex items-center">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `px-6 py-3 rounded-md transition-all duration-300 backdrop-blur-lg shadow-md border-2 border-transparent ${
                      isActive
                        ? "bg-red-500/50 text-white border-white"
                        : "bg-red-700/40 text-white hover:bg-red-500/60 hover:text-black"
                    }`
                  }
                  style={{
                    display: "inline-block",
                    minWidth: "140px",
                    textAlign: "center",
                    boxSizing: "border-box",
                  }}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
